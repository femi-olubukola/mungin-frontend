import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JoinWaitingList from '../views/JoinWaitingList.vue'
import Login from '../views/Login.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import CreatePassword from '../views/CreatePassword.vue'
import Register from '../views/Register.vue'
import ReadMore from '../views/ReadMore.vue'
import ReaadMore from '../views/ReaadMore.vue'
import OurMission from '../views/OurMission.vue'

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
    path: '/read-more',
    name: 'ReadMore',
    component: ReadMore
  },
  {
    path: '/readMore',
    name: 'ReaadMore',
    component: ReaadMore
  },
  {
    path: '/ourmission',
    name: 'OurMission',
    component: OurMission
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
