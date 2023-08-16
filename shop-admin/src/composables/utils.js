import { ElNotification } from 'element-plus'

// 弹窗封装
export function toast(message, duration = 3000, type = 'success', dangerouslyUseHTMLString,) {
  ElNotification({
    message,
    type,
    duration,
    dangerouslyUseHTMLString
  })
}