import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: { title: '登录' },
    },
    {
      path: '/login',
      redirect: { name: 'login' },
    },
    {
      // 其余路径统一回落到登录页（演示项目无其他页面）
      path: '/:pathMatch(.*)*',
      redirect: { name: 'login' },
    },
  ],
})

router.afterEach((to) => {
  const title = to.meta.title as string | undefined
  document.title = title ? `Stride · ${title}` : 'Stride'
})

export default router