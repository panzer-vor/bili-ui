const fs = require('fs')
const path = require('path')
const pathName = require('../examples/nav.config.json').Route

let importStr = ``,componentsStr = ``,key = false

pathName.forEach(v=>{

  importStr += `import B${v.dir} from './${v.dir}/index'
`
  componentsStr += `B${v.dir},
  `
  const singleComponentStr = `import B${v.dir} from './src/index.vue'

B${v.dir}.install = (Vue) => {
  Vue.component(B${v.dir}.name, B${v.dir})
}

export default B${v.dir}
`
  const vueTemplate = `<template>
  <div>

  </div>
</template>
<script>
  export default {
    name: 'B${v.dir}',
    props: {

    },
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
`
  const mdTemplate = `# ${v.dir}
----
### 基础用法

<div class="demo-block">
  <b-${v.name}></b-${v.name}>
</div>
`
  if(!fs.existsSync(path.join(__dirname,`../packages/${v.dir}`))) {
    key = true
    createNewComponent(v,singleComponentStr,vueTemplate,mdTemplate)
  }
})
if(key) {
  const indexTemplate = `${importStr}

  const components = [
    ${componentsStr}
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
  `
  fs.writeFileSync(path.join(__dirname,'../packages/index.js'),indexTemplate)
}

function createNewComponent(str,cTemplate,vTemplate,mdTemplate) {
  fs.mkdirSync(path.join(__dirname,`../packages/${str.dir}`))
  fs.createWriteStream(path.join(__dirname,`../packages/${str.dir}/index.js`))
  fs.createWriteStream(path.join(__dirname,`../examples/docs/${str.name}.md`))
  fs.mkdirSync(path.join(__dirname,`../packages/${str.dir}/src`))
  fs.createWriteStream(path.join(__dirname,`../packages/${str.dir}/src/index.vue`))
  fs.writeFileSync(path.join(__dirname,`../packages/${str.dir}/index.js`),cTemplate)
  fs.writeFileSync(path.join(__dirname,`../packages/${str.dir}/src/index.vue`),vTemplate)
  fs.writeFileSync(path.join(__dirname,`../examples/docs/${str.name}.md`),mdTemplate)
}

