import BBlock from './src/index.vue'

BBlock.install = (Vue) => {
  Vue.component(BBlock.name, BBlock)
}

export default BBlock
