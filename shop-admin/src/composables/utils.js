import { ElNotification, ElMessageBox } from 'element-plus'
import nprogress from 'nprogress'

// 弹窗封装
export function toast(message, duration = 3000, type = 'success', dangerouslyUseHTMLString,) {
  ElNotification({
    message,
    type,
    duration,
    dangerouslyUseHTMLString
  })
}

// 封装消息弹出框
export function showModal(content = '提示内容', type = 'warning', title = '') {
  return ElMessageBox.confirm(
    content,
    title,
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type
    }
  )
}

// 显示全屏loading
export function showFullScreenLoading() {
  return nprogress.start()
}
// 隐藏全屏loading
export function hideFullScreenLoading() {
  return nprogress.done()
}