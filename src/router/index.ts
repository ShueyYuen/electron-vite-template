// src\router\index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/HelloWorld.vue')
  },
]

const router = createRouter({
  // history: createWebHashHistory(), // hash 路由模式
  history: createWebHistory(), // history 路由模式
  routes // 路由规则
})

export default router

