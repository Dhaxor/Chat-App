import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Welcome from '@/components/Welcome'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome,
      props:true,
      beforeEnter: (to,from,next) => {
         if (to.params.name) {
             next()
         } else {
           next({ name: 'Welcome'})
         }
      }
    }
  ]
})
