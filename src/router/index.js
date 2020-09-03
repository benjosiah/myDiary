import Vue from 'vue'
import Router from 'vue-router'
import display from '@/components/display'
import Record from '@/components/record'
import Login from '@/components/Login'
import Register from '@/components/register'
import * as firebase from 'firebase/app';



Vue.use(Router)
const router = new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'display',
      component: display,
      meta:{auth: true}
    },
    {
      path: '/write',
      name:'record',
      component: Record,
      meta:{auth: true}
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

router.beforeEach((to, from, next)=>{
  const auth= to.matched.some(records=> records.meta.auth);
  const isAuth= firebase.auth().currentUser;
  if (auth && !isAuth) {
    next('/login')
  }else{
    next()
  }
})

export default router


