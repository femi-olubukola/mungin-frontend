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
import ContactUs from '../views/ContactUs.vue'
import ContactUs1 from '../views/ContactUs1.vue'
import CropProfile from '../views/CropProfile.vue'

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
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/contactUs1',
    name: 'ContactUs1',
    component: ContactUs1
  },
  {
    path: '/cropProfile',
    name: 'CropProfile',
    component: CropProfile
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
