<template>
  <div>
      <!-- Listening to Events -->
      <button @click="counter+=1">Add 1</button>
      <p>This button has been clicked {{counter}} times.</p>
      <!-- Method Event Handlers -->
      <button @click="greet">Greet</button>
      <!-- Methods in Inline Handlers -->
      <button @click="say('hi')">Say hi</button>
      <button @click="say('what')">Say what</button>
      <!--  -->
      <!--  -->
      <!--  -->
      <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
      <!--  -->
      <!--  -->
      <!--  -->
      <a href="#" @click.once="once">Some anchor tag</a>
      <!-- System Modifier Keys -->
      <input 
        style="width: 100%;"
        v-model="altC"
        placeholder="This will clear when alt + c is pressed"
        @keyup.alt.67="clear"
      />
  </div>
</template>

<script>
export default {
    data(){
        return {
            counter: 0,
            name: "Vue.js",
            altC: ""
        }
    },
    methods: {
        greet: function(event){
            alert(`Hello ${this.name}!`);
            if(event){
                alert(event.target.tagName);
            }
        },
        say: function(message){
            alert(message);
        },
        warn: function(message, event){
            if(event){
                event.preventDefault();
            }
            alert(message);
        },
        once: function(){
            alert();
        },
        clear: function(){
            this.altC = ""
        }
    }
}
</script>

<style>

</style>