import Vue from 'vue'
import Router from 'vue-router'
import ComponentsRouters from '../nav.config.json'

Vue.use(Router)
let routes = [{
  name:'index',
  path:'/',
  component:r => require.ensure([], () =>r(require('../pages/index.vue'))),
}]

let addComponent = (router) => {
  router.forEach(v=>{
      routes.push({
        name:v.name,
        path:'/'+v.name,
        meta: v.meta,
        component:r => require.ensure([], () =>r(require(`../docs/${v.name}.md`))),
    })
  })
}

addComponent(ComponentsRouters.Route)

export default new Router({
  routes
})
