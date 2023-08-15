import { ElNotification } from 'element-plus'

export function toast(message, duration = 3000, type = 'success', dangerouslyUseHTMLString,) {
  ElNotification({
    message,
    type,
    duration,
    dangerouslyUseHTMLString
  })
}