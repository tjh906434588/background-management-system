
export const loginRouter = {
  path: '/login',
  name: 'login',
  component: resolve => require(['@/views/login/login.vue'], resolve)
}
