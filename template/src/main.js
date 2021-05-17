// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Moment from 'moment'

import App from './App'
import router from './router'
import store from '@/store'

import '@/assets/theme/style.scss'

import Cookies from 'js-cookie'
import * as tabMethods from '@/utils/page'

Vue.config.productionTip = false

Vue.use(ElementUI)

const requireComponents = require.context('./components', true, /\.vue/);

requireComponents.keys().forEach(fileName => {
  const reqCom = requireComponents(fileName)
  const reqComName = fileName.split('/')[2].split('.')[0]
  Vue.component(reqComName, reqCom.default || reqCom)
})

Vue.filter('formatDate', (date, fmt='YYYY-MM-DD') => {
  if(typeof date==='string' && date.constructor==String && date !== '') {
    return Moment().format(fmt)
  }
  return ''
})

Vue.prototype.$Cookie = Cookies
Vue.prototype.$tabMethods = tabMethods

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
