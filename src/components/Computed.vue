<template>
    <div>
        <p>Original message: {{message}}</p>
        <!--    
            the difference is that computed properties 
            are cached based on their reactive dependencies. 
        -->
        <p>Computed reversed message: {{reversedMessageComp}}</p>
        <p>Method reversed message: {{reversedMessageFunc()}}</p>
        <!-- Computed vs Watched Property -->
        <div>
            {{fullName}}
        </div>
         <!-- Watchers -->
         <div>
             <p>Ask a yes/no question: <input v-model="question"></p>
             <p>{{answer}}</p>
         </div>
    </div>
</template>

<script>

import axios from 'axios';
import _ from 'lodash'

export default {
    name: "Computed",
    data: function(){
        return {
            message: "Hello",
            // fullName: "Foo Bar",
            firstName: "Foo",
            lastName: "Bar",
            question: "",
            answer:"I cannot give you an answer until you ask a question!"
        }
    },
    computed: {
        reversedMessageComp: function(){
            return this.message.split('').reverse().join('')
        },
        fullName: {
            get: function(){
                return this.firstName + ' ' + this.lastName;
            },
            set: function(newValue){
                const names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        }
    },
    methods: {
        reversedMessageFunc: function(){
            return this.message.split('').reverse().join('')
        },
        getAnswer: function(){
            if(this.question.indexOf('?') === -1){
                this.answer = 'Questions usually contain a question mark. ;)'
                return;
            }
            this.answer = 'Thinking...';
            const vm = this;
            axios.get('https://yesno.wtf/api').then(function(response){
                vm.answer = response["data"]["answer"];
            }).catch(function(error){
                console.log(error);
            })
        }
    },
    watch: {
        // firstName: function(val){
        //     this.fullName = val + ' ' + this.lastName;
        // },
        // lastName: function(val){
        //     this.fullName = this.firstName + ' ' + val;
        // }
        question: function(){
            this.answer = 'Waiting for you to stop typing...';
            this.debouncedGetAnswer();
        }
    },
    created: function(){
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    }
}
</script>

<style>

</style>