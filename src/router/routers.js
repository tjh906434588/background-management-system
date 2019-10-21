import Main from '@/views/main/main.vue'

export const loginRouter = {
  path: '/login',
  name: 'login',
  component: resolve =>
    require(['@/views/login/login.vue'], resolve)
}

// 是mian组件的子组件，但不在侧边导航栏显示
export const otherRouter = {
  path: '/home',
  name: 'other-router',
  component: Main,
  children: [
    {
      path: 'home-index',
      name: 'home-index',
      component: resolve =>
        require([
          '@/views/home-index/home-index.vue'
        ], resolve)
    },
    {
      path: 'user-list',
      name: 'user-list',
      meta: ['数据管理', '用户列表'],
      component: resolve =>
        require([
          '@/views/user-list/user-list.vue'
        ], resolve)
    },
    {
      path: 'business-list',
      name: 'business-list',
      meta: ['数据管理', '商家列表'],
      component: resolve =>
        require([
          '@/views/business-list/business-list.vue'
        ], resolve)
    },
    {
      path: 'add-food',
      name: 'add-food',
      meta: ['添加数据', '添加商品'],
      component: resolve =>
        require(['@/views/add-food/add-food.vue'], resolve)
    },
    {
      path: 'food-list',
      name: 'food-list',
      meta: ['添加数据', '添加商品'],
      component: resolve =>
        require(['@/views/food-list/food-list.vue'], resolve)
    }
  ]
}
