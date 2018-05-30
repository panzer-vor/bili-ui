import Vue from 'vue'
import { mount } from 'vue-test-utils'
import Block from '/packages/Block/src/index.vue'

describe('Block.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(Block)
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
