import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import('../components/Course.vue')
  },
  {
    path: '/syllabus',
    name: 'Syllabus',
    component: () => import('../components/Syllabus.vue')
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('../components/Quiz.vue')
  },
  {
    path: '/contest',
    name: 'Contest',
    component: () => import('../components/Contest.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../components/Project.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import( '../components/Map.vue')
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: () => import('../components/Leaderboard.vue')
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('../components/Statistics.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../components/Settings.vue')
  },
  {
    path: '/course/video',
    name: 'CourseVideo',
    component: () => import( '../components/CourseVideo.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
