<template>

<div class="wrapper">
        <div v-for="product in lists" class="product">
            <router-link :to=/detail/+product.id>
            <img :src=product.productImageUrl>
            <div class="caption">
                <span class="productTitle">{{product.productTitle}}</span>
                <br>
                <span><span>￥</span><span>{{product.price}}</span></span>
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
        mounted(){
            console.log('lists',this.lists)
        }
    }

</script>

<style scoped lang="scss">
    a{
        text-decoration: none;
    }
    .wrapper{
        display: flex;
        flex-wrap: wrap;
        .caption{
            color: #706e6c;
            text-decoration: none;
        }
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