import { useCookies } from '@vueuse/integrations/useCookies'

const TokenKey = 'admin-token'
const cookie = useCookies()

// 存储
export function setToken(token) {
  return cookie.set(TokenKey, token)
}
// 读取
export function getToken() {
  return cookie.get(TokenKey)
}
// 删除
export function removeToken() {
  return cookie.remove(TokenKey)
}