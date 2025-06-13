// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Assessment from '../views/Assessment.vue'
import AboutUs from '../views/AboutUs.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import CheckAuth from '../views/CheckAuth.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/assessmentform',
    name: 'AssessmentForm',
    component: Assessment
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs
  },
  {
path: '/contact',name: 'Contact',component: Contact},

  { path: '/check-auth', component: CheckAuth },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
{
  path: '/team/:id',
  name: 'TeamMemberProfile',
  component: () => import('../views/TeamMemberProfile.vue'),
  props: true
}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router