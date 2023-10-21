import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '岁岁廿廿的元宇宙'
    },
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/display',
    name: 'display',
    meta: {
      title: '岁岁廿廿的元宇宙'
    },
    component: () => import('../views/DisplayView.vue')
  },
  {
    path: '/activation',
    name: 'activation',
    meta: {
      title: '岁岁廿廿的元宇宙 - 激活藏品'
    },
    component: () => import('../views/ActivationView.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '岁岁廿廿的元宇宙 - 关于'
    },
    component: () => import('../views/AboutView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
