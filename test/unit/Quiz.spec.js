import Vue from 'vue'
import Quiz from '../../src/components/Quiz.vue'

describe('Quiz.vue', () => {
  const vm = new Vue({
    el: document.createElement('div'),
    render: (h) => h(Quiz)
  })

  it('should render the quiz title', () => {
    expect(vm.$el.querySelector('.quiz-title').textContent).toBe('Test Quiz Title')
  })
  it('should render the quiz description', () => {
    expect(vm.$el.querySelector('.quiz-description').textContent).toBe('Description of Test Quiz')
  })
  it('should render at least one input', () => {
    expect(vm.$el.querySelector('.quiz-entries').toBeDefined())
  })
  it('should have a handleSubmit function', () => {
    expect(vm.handleSubmit.toEqual(jasmine.any(Function)))
  })
})