import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      name: 'not-found',
      path: '/:pathMatch(.*)',
      component: () => import('@/pages/NotFound.vue')
    },
    {
      name: 'index',
      path: '/index',
      component: () => import('@/pages/Index.vue')
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('@/pages/About.vue')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/pages/Login.vue')
    }
  ]
})