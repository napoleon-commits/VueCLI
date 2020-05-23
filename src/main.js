import Vue from 'vue'
// import App from './App.vue'

// import Introduction from './components/Introduction'
import Instance from './components/Instance'
import obj2 from './assets/Data.js'

Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(Instance),
}).$mount('#app');

console.log(Instance.data() === obj2);
console.log(vm.$el === document.getElementById("#InstanceVM"));
