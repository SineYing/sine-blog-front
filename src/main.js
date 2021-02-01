// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vue from 'vue'
import DefaultLayout from '~/layouts/Layout.vue'
import ElementUI from 'element-ui'
import util from './utils/util'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)
Vue.prototype.$util = util
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
