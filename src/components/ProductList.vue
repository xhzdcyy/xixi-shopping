<template>
    <div class="wrapper">
        <div v-for="product in pt" class="product">
            <router-link :to=/detail/+product.id>
                <img :src=product.productImageUrl alt="product">
                <div class="caption">
                    <span class="productTitle">{{product.title}}</span>
                    <br>
                    <span><span>￥</span><span>{{product.price}}</span></span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {
                type: this.$route.params.type,
                pt: []
            }
        },
        computed: {
            ...mapState({
                products: state => state.products.all
            }),
            ...mapGetters('products', {
                allProducts: 'allProducts',
            }),
        },
        watch:{
            '$route' (to, from) {
                let type = to.params.type
                console.log(type);
                // console.log(from);
                if (type === 'MEN' || type === 'WOMEN') {
                    console.log('matched');
                    this.pt = this.products.filter((product) => product.type === type)
                } else {
                    this.pt = this.products
                }
            }
        },
        methods: mapActions('cart', [
            'addProductToCart'
        ]),

        created() {
            this.$store.dispatch('products/getAllProducts')
        },
        mounted() {
            if (this.type === 'MEN' || this.type === 'WOMEN') {
                console.log('matched');
                this.pt = this.products.filter((product) => product.type === this.type)
            } else {
                this.pt = this.products
            }
        }
    }
</script>
<style lang="scss" scoped>
    a {
        text-decoration: none;
    }

    .wrapper {
        display: flex;
        flex-wrap: wrap;

        .caption {
            color: #706e6c;
            text-decoration: none;
        }
    }

    .product {
        margin: 10px;
    }

    img {
        height: 220px;
        width: 220px;
    }

    .activities {
        text-decoration: line-through;
        color: #ccc;
    }
</style>