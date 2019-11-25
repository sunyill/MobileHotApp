import request from '@/Utils/request.js'

/**
 * 封装的登录请求
 */

export const Login = ({
  mobile,
  code
}) => {
  return request.post('/app/v1_0/authorizations', {
    mobile,
    code
  })
}
