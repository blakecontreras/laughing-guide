<template>
  <div id="app">
    <hello></hello>
    <quiz></quiz>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Quiz from './components/Quiz.vue'

export default {
  components: {
    Hello,
    Quiz
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
