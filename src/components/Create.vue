<template>
  <div class="create-view">
    <div class="title"><h1>Create a Quiz</h1></div>
    <div class="type-select" v-show="unselected">Choose a quiz type:
      <form class="type-select-form">
        <input type="radio" name="quiz-type" value="mc" v-model="selected">Multiple Choice
        <input type="radio" name="quiz-type" value="fi" v-model="selected">Fill In
        <input type="radio" name="quiz-type" value="sa" v-model="selected">Short Answer
        <input type="radio" name="quiz-type" value="mx" v-model="selected">Mixed
        <input type="button" name="select-type" value="Select" v-on:click="handleSelect">
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        unselected: true,
        renderComponent: null
      }
    },
    methods: {
      handleSelect() {
        if (this.selected === null) {
          alert("Make a selection first")
        } else {
          this.renderComponent = this.selected
        }
      }
    }
  }
  // select a quiz type
    // show form based on selection
      // forms: multiple choice, short answer, fill in, mixed
      // form components:
        // question
          // possible answers for MC
        // add another question button
        // save quiz button

</script>