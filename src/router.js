import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/WOMEN',
      name: 'women',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Women.vue'),
    },
    {
      path:'/detail/:productId',
      component: () => import(/* webpackChunkName: "about" */ './components/Detail.vue'),
    },
    {
      path:'/login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
    },
    {
      path:'/register',
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue'),
    },
    {
      path:'/upload',
      component: () => import(/* webpackChunkName: "about" */ './views/Upload.vue'),
    },
    {
      path:'/test',
      component: () => import(/* webpackChunkName: "about" */ './views/Test.vue'),
    },
  ]
})
