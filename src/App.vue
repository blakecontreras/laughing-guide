<template>
  <div id="app">
    <hello></hello>
    <!--<quiz></quiz>-->
    <create></create>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Quiz from './components/Quiz.vue'
import Create from './components/Create.vue'

export default {
  components: {
    Hello,
    Quiz,
    Create
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
