const fs = require('fs')
const path = require('path')
const pathName = require('../examples/nav.config.json').Route
const entryTemplate = require('./entry-template')
const componentTemplate = require('./component-template')
const mdTemplates = require('./md-template')
const componentInitTemplate = require('./component-init-template')
let importStr = ``,componentsStr = ``,key = false

pathName.forEach(v=>{
  importStr += `import B${v.dir} from './${v.dir}/index'
`
  componentsStr += `B${v.dir},
    `
  const singleComponentStr = componentInitTemplate(v.dir)
  const vueTemplate = componentTemplate(v.dir)
  const mdTemplate = mdTemplates(v.dir,v.name)
  if(!fs.existsSync(path.join(__dirname,`../packages/${v.dir}`))) {
    key = true
    createNewComponent(v,singleComponentStr,vueTemplate,mdTemplate)
  }
})

const indexTemplate = entryTemplate(importStr,componentsStr)
fs.writeFileSync(path.join(__dirname,'../packages/index.js'),indexTemplate)


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

