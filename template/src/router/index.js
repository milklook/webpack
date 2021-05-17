import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = Router.prototype.replace
Router.prototype.repalce = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const whiteRoutes = ['login', 'page-401', 'page-402', 'page-500', 'page-400'];
// 路由前置守卫
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('sys_token')
  if (whiteRoutes.indexOf(to.name) === -1 && !token) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
