<template>
    <div>
        <div>
            <img :src=product.productImageUrl>
            <div class="caption">
                <div class="caption">
                    <span class="productTitle">{{product.title}}</span>
                    <br>
                    <span><span>￥</span><span>{{product.price}}</span></span>
                </div>
            </div>

            <br>
            <el-radio-group v-model="size">
                <el-radio-button label="S"></el-radio-button>
                <el-radio-button label="M"></el-radio-button>
                <el-radio-button label="L"></el-radio-button>
                <el-radio-button label="XL"></el-radio-button>
                <el-radio-button label="XXL"></el-radio-button>
            </el-radio-group>
            <br>
            <br>
            <!--<span>数量</span>-->
            <!--<el-input-number v-model="num1" :min="1" :max="10" label="数量"></el-input-number>-->
            <el-button
                    :disabled="!product.inventory"
                    @click="addProductToCart({...product,size})"
            >加入购物车
            </el-button>

            <router-link :to=/comment/+productId><el-button>评价</el-button></router-link>
            <br>
        </div>
        <div class="imgs">
            <!--<img src="../assets/40469_D_21.jpg">-->
            <!--<img src="../assets/40469_D_22.jpg">-->
            <!--<img src="../assets/40469_D_23.jpg">-->
            <!--<img src="../assets/40469_D_24.jpg">-->
            <!--<img src="../assets/40469_D_26.jpg">-->
            <!--<img src="../assets/40469_D_27.jpg">-->
            <!--<img src="../assets/40469_D_28.jpg">-->
            <!--<img src="../assets/19SS_760WASH_CN.jpg">-->
            <!--<img src="../assets/ADULT_new_CN.jpg">-->
            <div v-for="pic in pics"  :key="pic">
                <img :src="pic">
            </div>

        </div>
    </div>
</template>
<script>
    import {mapState, mapGetters, mapActions} from 'vuex'

    const AV = require('leancloud-storage');
    export default {
        data() {
            return {
                color: 'red',
                size: 'M',
                num1: 1,
                productId: this.$route.params.productId,
                product: {
                    productImageUrl:'',
                    productTitle:'加载中',
                    price:0,
                    inventory:999
                },
                title: '',
                price: '',
                imageURL: '',
                description: '',
                pics:[]
            };
        },
        methods: {
            ...mapActions('cart', [
                'addProductToCart'
            ]),
            show(item) {
                console.log(item);
            },
            addToCart(){

            }
        },
        computed: {
            ...mapState({
                checkoutStatus: state => state.cart.checkoutStatus
            }),
            ...mapGetters('cart', {
                products: 'cartProducts',
                total: 'cartTotalPrice'
            }),
            ...mapGetters('products', {
                allProducts: 'allProducts',
                getPtById: 'getPtById'
            })
        },
        created() {
            this.$store.dispatch('products/getAllProducts')
        },
        mounted() {
            // this.$store.dispatch('products/getAllProducts')
            console.log(this.productId);
            this.product = this.getPtById(this.productId);

            console.log('product', this.product)
            let file = new AV.Query('_FIle');
            let query = new AV.Query('Pt');
            let pic = [];
            query.get(this.productId).then(pt => {
                // console.log(pt.attributes.pics);
                let pics = (pt.attributes.pics);
                for (let i = 0; i < pics.length; i++) {
                    pic.push(pics[i].id)
                    file.get(pics[i].id).then(data => {
                        console.log(data.attributes.url);
                        this.pics.push(data.attributes.url)
                    })
                    console.log(this.pics);
                }
            }, function (error) {
                // 异常处理
            });
            console.log(this.product);


            setTimeout(()=> {
                console.log(this.productId);
                this.product = this.getPtById(this.productId);

                console.log('product', this.product)
                let file = new AV.Query('_FIle');
                let query = new AV.Query('Pt');
                let pic = [];
                query.get(this.productId).then(pt => {
                    // console.log(pt.attributes.pics);
                    let pics = (pt.attributes.pics);
                    for (let i = 0; i < pics.length; i++) {
                        pic.push(pics[i].id)
                        file.get(pics[i].id).then(data => {
                            console.log(data.attributes.url);
                            this.pics.push(data.attributes.url)
                        })
                        console.log(this.pics);
                    }
                }, function (error) {
                    // 异常处理
                });
                console.log(this.product);

            },1000)

        }

    }
</script>
<style>
    .activities {
        text-decoration: line-through;
        color: #ccc;
    }
</style>