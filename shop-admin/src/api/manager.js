// 从src/axios.js导入自己封装的service
import { service } from '@/axios.js'

// 封装login方法
export function login(username, password) {
  // 返回service
  // 请求方式: post
  // 格式: post(url, { 参数1, 参数2 })
  return service.post('admin/login', {
    username,
    password
  })
}