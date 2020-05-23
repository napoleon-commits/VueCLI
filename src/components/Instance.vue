<template>
    <div id="#InstanceVM">
        <!-- Data and Methods -->
        <p>{{foo}}</p>
        <button @click="foo = foo == 'foo'?'bar':'foo'">Change It</button>
        <!-- Instance properties and methods -->
        <p>{{a}}</p>
        <button @click="a+=1">Increase number</button>
    </div>
</template>

<script>
var obj = {
    foo: "foo",
    a: 1,
}
// Prevents existing properties from being changed
Object.freeze(obj);
// 
// 
// 
import obj2 from '../assets/Data.js'

export default {
    name: "Instance",
    data(){
        // return obj;
        return obj2;
    },
    watch:{
        a: function(newValue, oldValue){
            console.log(`the value of a has changed from ${oldValue} to ${newValue}`)
        }
    },
    // Instance Lifecycle Hooks
    created: function(){
        console.log('this function is called after the instance is created');
    }
};
</script>

<style>

</style>