module.exports = (d) => {
  return `import B${d} from './src/index.vue'

B${d}.install = (Vue) => {
  Vue.component(B${d}.name, B${d})
}

export default B${d}
`
}
