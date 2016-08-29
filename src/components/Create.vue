<template>
  <div class="create-view">
    <div class="title"><h1>Create a Quiz</h1></div>
    <div class="subheader description">Choose a quiz type: </div>
    <div class="type-select">
      <form class="type-select-form">
        <input type="radio" name="quiz-type" value="mc">Multiple Choice
        <input type="radio" name="quiz-type" value="fi">Fill In
        <input type="radio" name="quiz-type" value="sa">Short Answer
        <input type="radio" name="quiz-type" value="mx">Mixed
        <input type="button" name="select-type" value="Select" v-on:click="">
      </form>
    </div>
  </div>
</template>

<script>
  // select a quiz type
    // show form based on selection
      // forms: multiple choice, short answer, fill in, mixed
      // form components:
        // question
          // possible answers for MC
        // add another question button
        // save quiz button

</script>