import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/global.less'

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
