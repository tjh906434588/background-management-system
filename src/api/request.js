import instance from './index.js'
import md5 from 'js-md5'

// 登录
export const login = params => {
  params.password = md5(params.pass)
  return instance.post('/account/login', params)
}
