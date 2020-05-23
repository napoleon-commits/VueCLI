import Vue from 'vue'
// import App from './App.vue'

// import Introduction from './components/Introduction'
// import Instance from './components/Instance'
// import obj2 from './assets/Data.js'

import TemplateSyntax from './components/TemplateSyntax'

Vue.config.productionTip = false

new Vue({
  render: h => h(TemplateSyntax),
}).$mount('#app');

// console.log(Instance.data() === obj2);
// console.log(vm.$el === document.getElementById("#InstanceVM"));
