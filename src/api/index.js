import axios from 'axios'
import qs from 'qs'
import { catchCode, catchError } from './util'
import { baseUrl } from './config'

const instance = axios.create({
  // node环境的不同，对应不同的baseURL
  baseURL: baseUrl,
  // 请求的超时时间
  timeout: 20000,
  // 允许携带cookie
  withCredentials: true
})
// axios拦截器在请求发送之前做的事
instance.interceptors.request.use(config => {
  config.data = qs.stringify(config.data)
  return config
}, err => {
  console.log(err)
})
// 结果拦截
instance.interceptors.response.use(response => {
  if (response.data.statusCode === 200) {
    return response.data.data
  } else {
    catchCode(response.data.statusCode, response.data.msg)
    return 'isError'
  }
}, catchError)

export default instance
