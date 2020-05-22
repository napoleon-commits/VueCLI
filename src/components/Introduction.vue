<template>
    <div>
        <!-- An example of text interpolation -->
        <div>
            {{message}}
        </div>
        <!-- Binding of element attributes -->
        <div>
            <span :title="hoverMessage">
                Hover your mouse over me for a few seconds
                to see my dynamically bound title!
            </span>
        </div>
        <!-- Conditionals and Loops -->
        <div>
            <span v-if="seen">Now you see me</span>
        </div>
        <!--  -->
        <!--  -->
        <!--  -->
        <div>
            <ol>
                <li 
                    v-for="todo in todos"
                    :key="todos.indexOf(todo)"
                >
                    {{todo.text}}
                </li>
            </ol>
        </div>
        <!-- Handling User Input -->
        <div>
            <p>{{message}}</p>
            <button @click="reverseMessage">
                Reverse Message
            </button>
        </div>
        <!--  -->
        <!--  -->
        <!--  -->
        <p>{{message}}</p>
        <input v-model="message">
        <!-- Composing with Components -->
        <ol>
            <ToDoItem
                v-for="item of groceryList"
                :key="item.id"
                :todo="item.text"
            >
            </ToDoItem>
        </ol>
    </div>
</template>

<script>
import ToDoItem from './ToDoItem.vue';

export default {
    name: "Introduction",
    data() {
        return{
            message: "Hello Vue!",
            hoverMessage: "You loaded this page on " + new Date().toLocaleString(),
            seen: true,
            todos: [
                {text: "Learn JavaScript"},
                {text: "Learn Vue"},
                {text: "Build something awesome"},
            ],
            groceryList: [
                {id: 1, text: "Vegetables"},
                {id: 3, text: "Cheese"},
                {id: 4, text: "Whatever else humans are supposed to eat"},
            ],
        }
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    },
    components:{
        ToDoItem
    }
}
</script>