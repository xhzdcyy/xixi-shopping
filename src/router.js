import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import auth from './api/auth'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/WOMEN',
      name: 'women',
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
      meta: { requiresAuth: true }
    },
    {
      path:'/test',
      component: () => import(/* webpackChunkName: "about" */ './views/Test.vue'),
    },
    {
      path:'/orders',
      component: () => import(/* webpackChunkName: "about" */ './views/Orders.vue'),
      meta: { requiresAuth: true }
    },
    {
      path:'/cart',
      component: () => import(/* webpackChunkName: "about" */ './components/Cart.vue'),
      meta: { requiresAuth: true }
    },
    {
      path:'/shoppingcart',
      component: () => import(/* webpackChunkName: "about" */ './components/ShoppingCart.vue'),
      meta: { requiresAuth: true }
    },
    {
      path:'/productlist/:type',
      component: () => import(/* webpackChunkName: "about" */ './components/ProductList.vue'),
    },
    {
      path:'/productlist',
      component: () => import(/* webpackChunkName: "about" */ './components/ProductList.vue'),
    },
    {
      path:'/comment/:productId',
      component: () => import(/* webpackChunkName: "about" */ './components/Comment.vue'),
    },
    {
      path:'/evaluate/:orderId',
      component: () => import(/* webpackChunkName: "about" */ './components/Evaluate.vue'),
      meta: { requiresAuth: true }
    },
    {
      path:'/order/:orderId',
      component: () => import(/* webpackChunkName: "about" */ './components/Order.vue'),
      meta: { requiresAuth: true }
    },
    {
      path:'/user',
      component: () => import(/* webpackChunkName: "about" */ './views/User.vue'),
      meta: { requiresAuth: true }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.getInfo()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})


export default router;