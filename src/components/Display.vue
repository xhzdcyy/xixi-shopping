<template>

<div class="wrapper">

        <!--<a><img src="../assets/4045801_360.jpg"></a>-->
        <!--<div><a>M</a>&nbsp;<a>L</a>&nbsp;<a>XL</a>&nbsp;-->
        <!--</div>-->
        <!--<div class="productname">棉麻短袖衬衫-男</div>-->
        <!--<br>-->
        <!--<span class="hidden" style="display: inline;"><span class="activities">-->
            <!--<span class="currencyIdentifier" >￥</span><span>69</span></span>&nbsp;&nbsp;-->
            <!--<span>活动价</span>-->
            <!--<span class="currencyIdentifier">￥</span><span>66</span></span>-->
        <div v-for="product in lists" class="product">
            <router-link :to=/detail/+product.id>
            <img :src=product.productImageUrl>
            <div class="caption">
                <h3>{{product.productTitle}}</h3>
                <p>{{product.productDescription}}</p>
                <p>价格：{{product.price}}</p>
                <!--<p>发布时间：{{product.releaseTime}}</p>-->
            </div>
            </router-link>
        </div>
</div>

</template>

<script>
    const AV = require('leancloud-storage');
    export default {
        data() {
            return {
                lists: [ ]
            };
        },
        created() {
            const query = new AV.Query('Pt');
            query.include('owner');
            query.include('image');
            query.find().then( (products)=> {
                console.log(products);
                products.forEach((product)=> {
                    let id = product.id;
                    let data = product._serverData;
                    let productTitle = data.title;
                    let productDescription = data.description;
                    let price = data.price;
                    let productImage = data.image;
                    let productImageUrl;
                    if (productImage) {
                        productImageUrl = productImage.attributes.url;
                    } else {
                        productImageUrl = './../storage.png'
                    }
                    this.lists.push({
                        id,
                        productImageUrl,
                        productTitle,
                        productDescription,
                        price
                    });
                });
            }).catch(function(error) {
                console.log(JSON.stringify(error));
            });
        },

    }

</script>

<style scoped>
    .wrapper{
        display: flex;
        flex-wrap: wrap;
    }
    .product{
        margin: 10px;
    }
    img{
        height:220px;
        width:220px;
    }
    .activities {
        text-decoration: line-through;
        color: #ccc;
    }
</style>