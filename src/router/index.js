import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import profile from '../views/profile.vue'
import errorpage from '../error/errorpage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/:catchNotMatchPath(.*)',
    name: 'errorpage',
    component: errorpage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),routes
})

export default router
