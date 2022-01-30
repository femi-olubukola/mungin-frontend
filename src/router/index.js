import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JoinWaitingList from '../views/JoinWaitingList.vue'
import Login from '../views/Login.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import CreatePassword from '../views/CreatePassword.vue'
import Register from '../views/Register.vue'
import Footer from '../views/Footer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/join-waiting-list',
    name: 'JoinWaitinglist',
    component: JoinWaitingList
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/create-password',
    name: 'CreatePassword',
    component: CreatePassword
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
