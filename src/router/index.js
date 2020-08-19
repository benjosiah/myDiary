import Vue from 'vue'
import Router from 'vue-router'
import display from '@/components/display'
import Record from '@/components/record'
import Login from '@/components/Login'
import Register from '@/components/register'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'display',
      component: display
    },
    {
      path: '/write',
      name:'record',
      component: Record
    },
    {
      path: '/login',
      name:'login',
      component: Login
    },
    {
      path: '/register',
      name:'register',
      component: Register
    }
  ]
})
