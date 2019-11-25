/**
 * 封装的请求,及相应拦截器
 */

import axios from 'axios'
import JsonBigInt from 'json-bigint'

// 创建一个axios实例,配置不同的baseUrl
const Instance = axios.create({
  timeout: 5000,
  baseURL: 'http://ttapi.research.itcast.cn',
  /**
   * 在服务器返回数据时,进行大数字处理
   * transfromResponse 是在响应拦截之前执行
   */
  transformResponse: [function (data) {
    // 数据data可能不是标准的json格式,会报错,这时将data原样return
    try {
      return JsonBigInt.parse(data)
    } catch (err) {
      return data
    }
  }]
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
