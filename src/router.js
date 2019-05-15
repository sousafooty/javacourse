import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Documentation from './views/Documentation.vue'
import Capitulo from './views/Capitulos.vue'
import Course from './views/Course.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: Documentation
    },
    {
      path: '/course',
      name: 'course',
      component: Course
    },
    {
      path: '/capitulo/:chapter',
      name: 'capitulo',
      component: Capitulo,
      props: true
    },
    {
      path: '/help',
      name: 'help',
      // route level code-splitting
      // this generates a separate chunk (help.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "help" */ './views/Help.vue')
    }
  ]
})
