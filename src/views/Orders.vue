<template>
    <div>
        <el-table
                :data="orders"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="orderId"
                    label="订单号"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="金额">
            </el-table-column>
            <el-table-column
                    prop="stateCN"
                    label="状态">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="250">
                <template slot-scope="scope">
                    <!--<el-button-->
                            <!--size="mini"-->
                            <!--type="danger"-->
                            <!--@click="check(scope.row)">检查-->
                    <!--</el-button>-->
                    <!--<router-link :to=/order/+scope.row.id><el-button size="mini">详情</el-button></router-link>-->

                    <el-popover
                            placement="right"
                            width="400"
                            trigger="click">
                        <el-table :data="scope.row.details">
                            <el-table-column width="150" property="title" label="商品"></el-table-column>
                            <el-table-column width="100" property="size" label="尺码"></el-table-column>
                            <el-table-column width="100" property="quantity" label="数量"></el-table-column>
                            <el-table-column width="100" property="price" label="价格"></el-table-column>
                        </el-table>
                        <el-button slot="reference" size="mini">详情</el-button>
                    </el-popover>


                    <!--<el-button size="mini" @click="showDetails(scope.row)">详情</el-button>-->

                    <el-button
                            size="mini"
                            @click="goToPay( scope.row)" v-if="!scope.row.state">支付
                    </el-button>
                    <router-link :to=/evaluate/+scope.row.id>
                    <el-button
                            size="mini"
                            v-if="scope.row.state">评价
                    </el-button>
                    </router-link>

                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    import { mapMutations } from 'vuex'


    const AV = require('leancloud-storage');
    import axios from 'axios'

    export default {
        name: "Orders",
        data() {
            return {
                orders: [],
                loading: true

            };
        },
        methods: {
           ...mapMutations ('cart', [
                'deleteProductFromCart'
            ]),
            goToPay(order) {
                axios.post('http://localhost:3000', {
                    name: '衣服',
                    id: order.id,
                    price: order.price,
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                })
                    .then(function (response) {
                        console.log(response.data);
                        window.open(response.data)
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
                // console.log(order)
            },
            check(order) {
                axios.post('http://localhost:3000', {
                    id: order.id,
                })
                    .then( (response) =>{
                        // console.log(response.data.data)
                        let data = response.data.data;
                        if (data.trade_status === "TRADE_SUCCESS") {
                            // alert('已支付')
                            this.updateOrder(order)
                            // console.log('已支付')
                        } else {
                            // alert('未支付')
                            // console.log('未支付')
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })

            },
            showDetails(order) {
                let products = order.details;
                // console.log(products);
                for (let product of products) {
                    console.log(product.title, product.quantity, product.price);
                }

            },
            updateOrder(order){
                let id = order.id;
                console.log(order);
                let query = AV.Object.createWithoutData('Orders', id);
                // 修改属性
                query.set('state', true);
                // 保存到云端
                query.save().then(()=>{
                    console.log('updated')
                });
            }

        },
        mounted() {
            // console.log(this.deleteProductFromCart());
            let query = new AV.Query('Orders');

            query.find().then((products) => {
                products.forEach((product) => {
                    this.check(product)
                })
            })
            query.descending('createdAt');

            query.find().then((products) => {
                products.forEach((product) => {
                    // console.log(product)
                    // this.orders.push(product._serverData)
                    console.log(product);
                    this.orders.push({
                        date: product.createdAt.getFullYear()+'-'+(product.createdAt.getMonth()+1)+'-'+product.createdAt.getDate(),
                        id: product.id,
                        orderId: product._serverData.orderId,
                        price: product._serverData.price,
                        details: product._serverData.details,
                        state: product._serverData.state,
                        stateCN: product._serverData.state ? '已支付' : '未支付'
                    })
                }).catch(err => {
                    console.log(err)
                })
            })
        }
    }
</script>

<style scoped>

</style>