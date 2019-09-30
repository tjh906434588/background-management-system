import Router from 'vue-router'
import Vue from 'vue'
import { loginRouter } from './routers'

Vue.use(Router)

let initRouter = {
  path: '/',
  redirect: '/login'
}

let router = new Router({
  routes: [
    initRouter,
    loginRouter
  ]
})

export default router
