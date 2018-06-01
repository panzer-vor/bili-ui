import Vue from 'vue'
import { mount } from 'vue-test-utils'
import Carousel from '../../../packages/Carousel'

describe('Carousel.vue', () => {
  it('Carousel', () => {
    const wrapper = mount(Carousel)
    expect(wrapper.find('li').text()).toBe("111")
  })
})
