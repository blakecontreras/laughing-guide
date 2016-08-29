import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App)
})
