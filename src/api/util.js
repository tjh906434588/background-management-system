import Vue from 'vue'
import router from '@/router'

/*
 * 请求接口成功，但状态码非200的处理方法
 * @params {Number} status statusCode状态码
 * @params {String} message 后端返回的信息
 */
export const catchCode = (status, message) => {
  switch (status) {
    case 413:
      router.replace({ name: 'login' })
      break
    default:
      Vue.prototype.$notice.error({
        title: '请求错误',
        desc: message,
        duration: 3
      })
      break
  }
}

/*
 * 请求失败的处理方法
 * @params {Object} error axios的错误对象
 */
export const catchError = function (error) {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        Vue.prototype.$notice.error({
          title: '请求参数异常',
          duration: 3
        })
        break
      case 403:
        Vue.prototype.$notice.error({
          title: '服务器拒绝您的请求',
          duration: 3
        })
        break
      case 404:
        Vue.prototype.$notice.error({
          title: '请求的资源未找到',
          duration: 3
        })
        break
      default:
        Vue.prototype.$notice.error({
          title: '请求失败，请联系技术人员',
          duration: 3
        })
    }
  }
  return Promise.reject(error)
}
