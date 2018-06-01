import Vue from 'vue'
import { mount } from 'vue-test-utils'
import Block from '../../../packages/Block'

const cardData = {
  image : '/static/block-simple.jpg',
  bottomTitle : '我是底部标题部分',
  desc : {
    leftKeyword:'我是左部信息',
    rightKeyword:'我是右部信息'
  },
  maskCard : {
    title: '此处为标题',
    author: '作者',
    play: '杂项'
  }
}

const videoData = {
  image : '/static/block-simple.jpg',
  bottomTitle : '我是底部标题部分',
  videoTime: 90,
  desc : {
    leftKeyword:'我是左部信息',
    rightKeyword:'我是右部信息'
  },
}

const imageData = {
  image : '/static/block-simple.jpg',
  bottomTitle : '带图片的遮罩',
  desc : {
    leftKeyword:'我是左部信息',
    rightKeyword:'我是右部信息'
  },
  maskImage:'/static/38008861.jpg',
}

describe('Block.vue', () => {
  it('card mask', () => {
    const wrapper = mount(Block,{
      propsData: {
        mask: 'card',
        ...cardData,
      }
    })
    expect(wrapper.find('.card-mask').exists()).toBe(true)
    expect(wrapper.find('.video-mask').exists()).toBe(false)
    expect(wrapper.find('.image-mask').exists()).toBe(false)
    expect(wrapper.find('.card-mask .title').text()).toBe('此处为标题')
    expect(wrapper.find('.tit span').text()).toBe('我是左部信息')
    expect(wrapper.find('.b').text()).toBe('我是底部标题部分')
    expect(wrapper.find('.pic img').attributes().src).toBe('/static/block-simple.jpg')
  })
  it('video mask', () => {
    const wrapper = mount(Block,{
      propsData: {
        mask: 'video',
        ...videoData,
      }
    })
    expect(wrapper.find('.card-mask').exists()).toBe(false)
    expect(wrapper.find('.video-mask').exists()).toBe(true)
    expect(wrapper.find('.image-mask').exists()).toBe(false)
    expect(wrapper.find('.video-mask .time').text()).toBe('01:30')
    expect(wrapper.find('.tit span').text()).toBe('我是左部信息')
    expect(wrapper.find('.b').text()).toBe('我是底部标题部分')
  })
  it('image mask', () => {
    const wrapper = mount(Block,{
      propsData: {
        mask: 'image',
        ...imageData,
      }
    })
    expect(wrapper.find('.card-mask').exists()).toBe(false)
    expect(wrapper.find('.video-mask').exists()).toBe(false)
    expect(wrapper.find('.image-mask').exists()).toBe(true)
    expect(wrapper.find('.image-mask img').attributes().src).toBe('/static/38008861.jpg')
  })
})
