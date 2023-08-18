import { service } from '@/axios'

// 登录
export function login(username, password) {
  return service.post('/admin/login', {
    username,
    password
  })
}

// 获取用户信息
export function getInfo() {
  return service.post('/admin/getinfo')
}

// 退出登录
export function logout() {
  return service.post('/admin/logout')
}