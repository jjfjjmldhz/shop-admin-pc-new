import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      name: 'index',
      path: '/index',
      component: () => import('@/pages/Index.vue'),
      meta: {
        title: '后台首页'
      }
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/pages/Login.vue'),
      meta: {
        title: '登录页'
      }
    },
    {
      name: 'not-found',
      path: '/:pathMatch(.*)',
      component: () => import('@/pages/NotFound.vue'),
      meta: {
        title: '404页面'
      }
    }
  ]
})