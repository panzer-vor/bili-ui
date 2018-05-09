/**
 * @author xyk
 * Date: 18/3/5
 */

import BBlock from './block/index'
import BNavList from './navList/index'
const components = [
  BBlock,
  BNavList,
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components,
}
