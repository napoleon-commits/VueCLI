<template>
  <div>
      <!-- Mapping an Array of Elements with v-for -->
      <ul>
          <li v-for="(item, index) in items" :key="items.indexOf(item)">
              {{parentMessage}} - {{index}}: {{item.message}}
          </li>
      </ul>
      <!-- v-for with an object -->
      <ul>
          <li v-for="(value, name, index) in object" :key="index">
              {{index}}. {{name}}: {{value}}
          </li>
      </ul>
      <!-- Displaying Filtered/Sorted Results -->
      <ul>
          <li v-for="n in evenNumbers" :key="n">
              {{n}}
          </li>
      </ul>
      <!--  -->
      <!--  -->
      <!--  -->
      <ul v-for="set in sets" :key="sets.indexOf(set)">
          <li v-for="n in even(set)" :key="n">
              {{n}}
          </li>
      </ul>
      <!-- v-for with a range -->
      <div>
          <span v-for="n in 10" :key="n">{{n}}</span>
      </div>
      <!-- v-for on a template -->
      <div>
        <form @submit.prevent="addNewTodo">
            <label for="new-todo">Add a todo</label>
            <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat">
            <button>Add</button>
        </form>
        <ul>
            <li
                is="ToDoItem"
                v-for="(todo, index) in todos"
                :key="index"
                :title="todo.title"
                @remove="todos.splice(index,1)"
            ></li>
        </ul>
      </div>
  </div>
</template>

<script>

import ToDoItem from './ToDoItem';

export default {
    data: function(){
        return {
            items: [
                {message: "foo"},
                {message: "bar"},
            ],
            parentMessage: "Parent",
            object: {
                title: "How to do lists in Vue",
                author: "Byron Hall",
                date: "2020-05-26"
            },
            numbers: [1,2,3,4,5],
            sets: [[1,2,3,4,5],[6,7,8,9,0]],
            todos: [
                {id: 1, title: "Do the dishes"},
                {id: 2, title: "Take out the trash"},
                {id: 3, title: "Mow the lawn"},
            ],
            newTodoText: '',
            nextTodoIndex: 4,
        }
    },
    computed: {
        evenNumbers: function(){
            return this.numbers.filter(function(n){
                return n % 2 === 0;
            });
        }
    },
    methods: {
        even: function(numbers){
            return numbers.filter(function(n){
                return n % 2 === 0;
            });
        },
        addNewTodo: function(){
            this.todos.push({
                id: this.nextTodoIndex++,
                title: this.newTodoText,
            });
            this.newTodoText = '';
        }
    },
    components:{
        ToDoItem
    }
}
</script>

<style>

</style>