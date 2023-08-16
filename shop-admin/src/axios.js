import axios from 'axios'
import { getToken } from '@/composables/auth'
import { toast } from '@/composables/utils'

export const service = axios.create({
  baseURL: '/api'
})

// 请求拦截器
service.interceptors.request.use(
  // 请求拦截成功
  // 在请求成功自动配置headers中的内容
  (config) => {
    // 获取token
    const token = getToken()
    if (token) {
      config.headers['token'] = token
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  // 响应成功拦截: 处理冗余的data
  (response) => {
    return response.data.data
  },
  // 响应失败拦截
  (error) => {
    // 处理错误弹窗
    // toast(error.data.msg, 3000, 'error')

    return Promise.reject(error)
  }
)