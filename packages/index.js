import BBlock from './Block/index'
import BNavList from './NavList/index'
import BIcon from './Icon/index'
import BCarousel from './Carousel/index'
import BCount from './Count/index'
import BSearch from './Search/index'


const components = [
  BBlock,
    BNavList,
    BIcon,
    BCarousel,
    BCount,
    BSearch,
    
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
