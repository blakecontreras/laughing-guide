import Vue from 'vue';
import Create from '../../src/components/Create.vue';

describe('Create.vue', () => {
  const vm = new Vue({
    el: document.createElement('div'),
    render: (h) => h(Create)
  })

  it('should have a title', () => {
    const title = vm.$el.querySelector('.title');

    expect(title).toBeDefined();
  })
  it('should allow creation of multiple choice questions', () => {

  })
  it('should allow creation of fill-in questions', () => {

  })
  it('should allow creation of short answer questions', () => {

  })
  it('should allow creation of multiple questions', () => {

  })
  xit('should allow import of old quiz questions', () => {

  })
  xit('should allow comparison with old quizzes', () => {

  })
})