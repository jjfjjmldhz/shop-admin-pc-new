// 导入axios核心
import axios from 'axios'

// 创建实例
export const service = axios.create({
  // baseURL: http://ceshi13.dishait.cn
  // 将原来的baseURL替换为'/api'
  baseURL: '/api'
})