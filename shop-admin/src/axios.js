import axios from 'axios'

import { toast } from '@/composables/utils'
import { getToken } from '@/composables/auth'

export const service = axios.create({
  baseURL: '/api'
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
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
  (response) => {
    // 拦截冗余的data
    return response.data.data
  },
  (error) => {
    // 统一处理错误信息
    toast(error.response.data.msg || '请求失败', 'error')
    return Promise.reject(error)
  }
)