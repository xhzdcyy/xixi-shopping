import shop from '../../api/shop'
import { Message } from 'element-ui';

// initial state
// shape: [{ id, quantity }]
const state = {
    items: [],
    checkoutStatus: null
}

// getters
const getters = {
    cartProducts: (state, getters, rootState) => {
        // console.log('item',state.items);
        // console.log('length',state.items.length);
        return state.items.map(({ id, quantity,size }) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
                id:product.id,
                title: product.title,
                price: product.price,
                url:product.productImageUrl,
                quantity,
                size
            }
        })
    },

    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    }
}

// actions
const actions = {
    checkout ({ commit, state }, products) {
        const savedCartItems = [...state.items]
        commit('setCheckoutStatus', null)
        // empty cart
        commit('setCartItems', { items: [] })
        shop.buyProducts(
            products,
            () => commit('setCheckoutStatus', 'successful'),
            () => {
                commit('setCheckoutStatus', 'failed')
                // rollback to the cart saved before sending the request
                commit('setCartItems', { items: savedCartItems });

            }
        )
    },

    addProductToCart ({ state, commit }, product,) {
        commit('setCheckoutStatus', null)
        console.log('add');
        console.log(product);
        if (product.inventory > 0) {
            // console.log(product.inventory);
            // console.log('in');
            const cartItem = state.items.find(item => item.id === product.id)
            if (!cartItem) {
                // console.log('add',size);
                commit('pushProductToCart', { id: product.id ,size:product.size})
            } else {
                commit('incrementItemQuantity', cartItem)
            }
            // remove 1 item from stock
            commit('products/decrementProductInventory', { id: product.id }, { root: true })
            Message.success({
                message:'添加成功'
            })
            // Message({
            //     type: 'success'
            // });
            console.log('added');

        }
    },

}

// mutations
const mutations = {
    pushProductToCart (state, { id,size }, ) {
        // console.log('push',size);
        state.items.push({
            id,
            quantity: 1,
            size
        })
    },

    incrementItemQuantity (state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    },
    decrementItemQuantity (state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity--
    },


    setCartItems (state, { items }) {
        state.items = items
    },

    setCheckoutStatus (state, status) {
        state.checkoutStatus = status
    },
    deleteProductFromCart(state, { id }) {
        let index = state.items.findIndex(item => item.id === id)
        console.log(index);
        state.items.splice(index,1);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}