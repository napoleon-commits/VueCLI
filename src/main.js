import Vue from 'vue'
// import App from './App.vue'

import Introduction from './components/Introduction'

Vue.config.productionTip = false

new Vue({
  render: h => h(Introduction),
}).$mount('#app')
