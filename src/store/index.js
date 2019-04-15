import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import auth from './modules/auth'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        cart,
        products,
        auth
    },
})
