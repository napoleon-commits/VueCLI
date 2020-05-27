import Vue from 'vue'
// import App from './App.vue'

// import Introduction from './components/Introduction'
// import Instance from './components/Instance'
// import obj2 from './assets/Data.js'

// import TemplateSyntax from './components/TemplateSyntax'
// import Computed from './components/Computed'

// import ClassAndBindingStyles from './components/ClassAndBindingStyles'

// import ConditionalRendering from './components/ConditionalRendering';

// import ListRendering from './components/ListRendering';

// import EventHandling from './components/EventHandling';

import FormInputBindings from './components/FormInputBindings';

Vue.config.productionTip = false

new Vue({
  render: h => h(FormInputBindings),
}).$mount('#app');

// console.log(Instance.data() === obj2);
// console.log(vm.$el === document.getElementById("#InstanceVM"));
