<template>
  <div class="quiz-view">
    <h1 class="quiz-title">{{ title }}</h1>
    <p class="quiz-description">{{ description }}</p>
    <form name="quiz" v-on:submit="handleSubmit">
    <ul class="quiz-entries">
      <li v-for="question in questions">{{ question.question }}: <input v-model="question.answer" class="quiz-input" type="text"></li>
    </ul>
    <button name="submit" type="button">Submit</button>
    </form>
    <p v-for="question in questions">{{question.answer}}</p>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        title: 'Test Quiz Title',
        description: 'Description of Test Quiz',
        questions: [
          { question: 'Are you a robot?', answer: '' },
          { question: 'What is the value of this?', answer: '' },
        ]
      }
    },
    methods: {
      handleSubmit() {
        console.log('Answers submitted: ', questions[0].answer + ' ' + questions[1].answer)
      }
    }
  }
</script>