import { router } from '@/router'
import { store } from '@/store'

import { getToken } from '@/composables/auth'
import { toast, showFullScreenLoading, hideFullScreenLoading } from '@/composables/utils'
import { useTitle } from '@/hooks/useTitle'

// 全局前置导航守卫
router.beforeEach((to, from) => {
  // 显示全屏loading
  showFullScreenLoading()

  // 获取token
  const token = getToken()
  // 如果用户没有登录, 并且访问的不是登录页面, 就强制跳转到登录页面
  if (!token && to.path !== '/login') {
    toast('请先登录', 'warning')
    return '/login'
  }

  // 如果用户已经登录, 不再允许重复登录
  if (token && to.path === '/login') {
    toast('请勿重复登录', 'error')
    return from.path ? from.path : '/'
  }

  // 如果用户登录了, 才去获取用户信息
  if (token) {
    store.dispatch('getInfoActions')
  }

  // 动态标题
  const title = useTitle()
  title.value = to.meta.title + '-vue3实战商城后台'
})

// 全屏后置守卫
router.afterEach((to, from) => hideFullScreenLoading())