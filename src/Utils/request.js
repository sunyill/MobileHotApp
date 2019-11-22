/**
 * 封装的请求,及相应拦截器
 */

import axios from 'axios'

// 创建一个axios实例,配置不同的baseUrl
const Instance = axios.create({
  timeout: 5000,
  baseURL: 'http://ttapi.research.itcast.cn'
})
/**
 * 请求
 */
Instance.interceptors.request.use(function (config) {
  return config
}, function (err) {
  return Promise.reject(err)
})

/**
 * 相应
 */
Instance.interceptors.response.use(function (response) {
  return response
}, function (err) {
  return Promise.reject(err)
})
export default Instance
