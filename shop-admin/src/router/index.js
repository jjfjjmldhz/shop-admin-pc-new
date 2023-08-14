// 导入vue-router核心
import { createRouter, createWebHashHistory } from 'vue-router'

// 导出router
export const router = createRouter({
  // 指定历史记录模式: hash模式
  history: createWebHashHistory(),
  // 在routes数组中配置路由映射关系表: path 和 component 的关系
  routes: [
    // 配置路由的重定向
    {
      path: '/',
      redirect: '/index'
    },
    // 后台首页 (Index.vue)
    {
      name: 'index',
      path: '/index',
      component: () => import('@/pages/Index.vue')
    },
    // 关于页面 (About.vue)
    {
      name: 'about',
      path: '/about',
      component: () => import('@/pages/About.vue')
    },
    // 404页面 (NotFound.vue)
    {
      name: 'not-found',
      path: '/:pathMatch(.*)',
      component: () => import('@/pages/NotFound.vue')
    }
  ]
})