// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Base URL para GitHub Pages
const BASE_URL = '/Portfolio/'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('@/views/Contacto.vue')
  }
]

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
