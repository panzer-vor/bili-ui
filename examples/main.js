// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import demoBlock from './components/DemoBlock.vue'
import router from './router'
import BiliUI from '../packages/index'
Vue.config.productionTip = false
Vue.component('demo-block', demoBlock)

Vue.use(BiliUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
