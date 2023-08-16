import { router } from '@/router'
import { store } from '@/store'

import { getToken } from '@/composables/auth'
import { toast, showFullScreenLoading, hideFullScreenLoading } from '@/composables/utils'

// 全局前置守卫
// 方案一:
router.beforeEach((to, from) => {
  showFullScreenLoading()
  const token = getToken() 
  if (!token && to.path !== '/login') {
    toast('请先登录', 3000, 'warning')
    return '/login'
  }

  if (token && to.path === '/login') {
    toast('请勿重复登录', 3000, 'error')
    return from.path ? from.path : '/'
  }

  if (token) {
    store.dispatch('getInfoActions')
  }

})

// 全局后置守卫
router.afterEach((to, from) => hideFullScreenLoading())

// 全局前置守卫
// 方案二:
// router.beforeEach((to, from, next) => {
//   // 没有登录的用户, 强制跳转到登录页面
//   const token = getToken()
//   if (!token && to.path !== '/login') {
//     toast('请先登录', 3000, 'warning')
//     return next({ path: '/login' })
//   }

//   // 请勿重复登录
//   if (token && to.path === '/login') {
//     toast('请勿重复登录', 3000, 'error')
//     return next({ path: from.path ? from.path : '/' })
//   }

//   // 放行
//   next()
// })

