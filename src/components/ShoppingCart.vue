<template>
    <div class="cart">
        <h2>购物车</h2>

        <el-table
                :data="products"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="title"
                    label="商品名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="size"
                    label="尺码"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="quantity"
                    label="数量">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="200">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="incrementItemQuantity(scope.row)">+
                    </el-button>
                    <el-button
                            size="mini"
                            @click="decrementItemQuantity(scope.row,)" :disabled="scope.row.quantity<=1">-
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="200">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="danger"
                            @click="deleteProductFromCart(scope.row)">删除
                    </el-button>
                    <!--<el-button-->
                            <!--size="mini"-->
                            <!--@click="show(scope.row)">检查-->
                    <!--</el-button>-->

                </template>
            </el-table-column>
        </el-table>

        <!--<p v-show="!products.length"><i>Please add some products to cart.</i></p>-->
        <!--<ul>-->
            <!--<li v-for="product in products" :key="product.id">-->
                <!--{{ product.title }} - {{ product.price }} x {{ product.quantity }}-->
                <!--<el-input-number v-model="product.quantity"></el-input-number>-->
            <!--</li>-->
        <!--</ul>-->
        <p>合计: {{ total }}</p>
        <!--<p>-->
            <!--<el-button :disabled="!products.length" @click="checkout(products)">Checkout</el-button>-->
        <!--</p>-->
        <!--<p>-->
            <!--<el-button :disabled="!products.length" @click="createOrder()">createOrder</el-button>-->
        <!--</p>-->
        <!--<p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>-->

        <el-button  @click="dialogFormVisible = true">下单</el-button>

        <el-dialog title="请确认收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="address">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="address.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话" :label-width="formLabelWidth">
                    <el-input v-model="address.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="address.address" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="createOrder()">确 定</el-button>
            </div>
        </el-dialog>



    </div>
</template>

<script>
    import {mapGetters, mapState, mapMutations} from 'vuex'
    import generateOrderId from '../api/order'
    const AV = require('leancloud-storage');

    // import {getInfo} from'../api/auth'

    export default {
        data(){
            return{
                dialogFormVisible: false,
                formLabelWidth: '120px',

                address:AV.User.current().get('address')
            }
        },
        computed: {
            ...mapState({
                checkoutStatus: state => state.cart.checkoutStatus,
                user:state => state.auth.user
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
        methods: {
            ...mapMutations('cart', [
                'incrementItemQuantity',
                'decrementItemQuantity',
                'deleteProductFromCart'
            ]),
            show(i) {
                console.log(i)
            },
            checkout(products) {
                this.$store.dispatch('cart/checkout', products)
            },
            createOrder() {
                let Order = AV.Object.extend('Orders');
                let order = new Order();
                order.set('userId', AV.User.current().id);
                order.set('details', this.products);
                order.set('price', this.total);
                order.set('state', false);
                order.set('address',this.address);
                order.set('orderId',generateOrderId());
                order.save().then( () =>{
                    console.log('done');
                    this.dialogFormVisible = false;

                    this.checkout(this.products);
                    this.$message({
                        message: '下单成功',
                        type: 'success'
                    });
                }, function (error) {
                })
            },
            checkAddress(address){
                console.log(address);
                this.dialogFormVisible = false;
            }

        },
        mounted() {
            console.log(this.user);
            console.log(this.products)
            console.log(generateOrderId())
        }
    }
</script>
