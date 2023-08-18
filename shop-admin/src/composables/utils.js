import { ElNotification, ElMessageBox } from 'element-plus'
import nprogress from 'nprogress'

// 普通弹窗
export function toast(message, type, duration = 3000) {
  return ElNotification({
    message,
    type,
    duration
  })
}

// 按钮弹窗
export function showModal(content, type = 'warning', title) {
  return ElMessageBox.confirm(
    content,
    title,
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type
    }
  )
}

// 显示全屏加载动画
export function showFullScreenLoading() {
  nprogress.start()
}
// 隐藏全屏加载动画
export function hideFullScreenLoading() {
  nprogress.done()
}