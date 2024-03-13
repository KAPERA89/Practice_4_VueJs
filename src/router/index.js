import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobsDetails.vue'
import NotFound from '../views/NotFound.vue'
import TestView from '../views/TestView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component : AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component : Jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component : JobDetails,
    props: true,
  },
  //redirect : 
  {
    path: '/all-jobs',
    redirect : '/jobs'
  },
  //catch all 404 : 
  {
    path : '/:catchAll(.*)',
    name : 'notFound',
    component: NotFound
  },
  {
    path : '/test',
    name : 'test',
    component: TestView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
