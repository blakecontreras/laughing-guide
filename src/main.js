import Vue from 'vue'
import App from './App.vue'
// import Hello from './components/Hello.vue'

// Vue Router removed until 2.0 docs are updated

// import VueRouter from 'vue-router'
// Vue.use(VueRouter);

// const router = new VueRouter();

// router.map({
//   '/': {
//     component: Hello
//   }
// })

// router.start(App, '#app')

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App)
})
