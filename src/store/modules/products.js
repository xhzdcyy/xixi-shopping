import shop from '../../api/shop'

// initial state
const state = {
    all: []
}

// getters
const getters = {
    allProducts: (state, getters, rootState) => {
        console.log('pt',state.all[0]);
        console.log('length',state.all.length);
        return state.all.length
    },

    getPtById: (state) => (id) => {
        return state.all.find(p => p.id === id)
    }

    // cartTotalPrice: (state, getters) => {
    //     return getters.cartProducts.reduce((total, product) => {
    //         return total + product.price * product.quantity
    //     }, 0)
    // }
}

// actions
const actions = {
    getAllProducts({commit}) {
        if(state.all.length!==0) return;
        shop.getProducts(products => {
            commit('setProducts', products)
        })
    }
}

// mutations
const mutations = {
    setProducts(state, products) {
        state.all = products
    },

    decrementProductInventory(state, {id}) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
