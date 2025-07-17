import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
       {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: { layout: 'private'}
    },
  ],
})

export default router
