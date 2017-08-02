// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
var VueMaterial = require('vue-material')
var VueFire = require('vuefire')


Vue.use(VueFire)
Vue.use(VueMaterial)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
