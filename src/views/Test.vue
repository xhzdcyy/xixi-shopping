<template>
    <div>
        <!--<el-upload-->
        <!--class="upload-demo"-->
        <!--action=""-->
        <!--:on-preview="handlePreview"-->
        <!--:on-remove="handleRemove"-->
        <!--:file-list="fileList"-->
        <!--:auto-upload="false"-->
        <!--list-type="picture">-->
        <!--<el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->
        <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>-->
        <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
        <!--</el-upload>-->
        <form class="new-product">

            <h2 class="new-product-heading">发布一个新商品</h2>
            <label for="inputTitle" class="sr-only">商品名称</label>
            <input type="title" id="inputTitle" class="form-control" placeholder="商品名称" required autofocus ref="title"
                   v-model="title">
            <br>
            <label for="inputPrice" class="sr-only">价格</label>
            <input type="price" id="inputPrice" class="form-control" placeholder="价格" required v-model="price">
            <br>
            <label for="inputDescription" class="sr-only">商品描述</label>
            <textarea type="description" id="inputDescription" class="form-control" placeholder="商品描述" required
                      v-model="description"></textarea>
            <br>
            <!--<label for="inputFile" class="sr-only">上传图片</label>-->
            <!--<input type="file" id="inputFile" class="form-control" placeholder="文件" required>-->
            <!--<button class="btn btn-lg btn-primary btn-block" type="submit">发布</button>-->

            <label for="inputFile" class="sr-only">上传图片</label>
            <input type="file" id="inputFile" class="form-control" placeholder="文件" required ref="files">
            <br>
            <button class="btn btn-lg btn-primary btn-block" type="submit" @click="submitUpload">发布</button>
        </form>

        <div v-for="product in lists">
            <img :src=product.productImageUrl>
            <div class="caption">
                <h3>{{product.productTitle}}</h3>
                <p>{{product.productDescription}}</p>
                <p>价格：{{product.price}}</p>
                <!--<p>发布时间：{{product.releaseTime}}</p>-->
            </div>
        </div>

    </div>
</template>

<script>
    const AV = require('leancloud-storage');
    export default {
        data() {
            return {
                fileList: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }, {
                    name: 'food2.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }],
                title: '标题',
                price: '15',
                description: '介绍',
                lists: [ ]
            };
        },
        created() {
            const query = new AV.Query('Pt');
            query.include('owner');
            query.include('image');
            // query.descending('createdAt');
            query.find().then( (products)=> {
                console.log(products);
                products.forEach((product)=> {
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
                        productImageUrl,
                        productTitle,
                        productDescription,
                        price
                    });
                });
            }).catch(function(error) {
                console.log(JSON.stringify(error));
            });
            // this.lists.push({
            //     productImageUrl:'http://lc-xbw5yxog.cn-n1.lcfile.com/dd03864538a5052bc408.jpg',
            //     productTitle:'32',
            //     productDescription:'66',
            //     price:'15'
            // });


        },

        mounted(){

        },
        methods: {
            submitUpload(e) {
                e.preventDefault();
                const Product = AV.Object.extend('Pt');
                let fileUploadControl = this.$refs.files;
                let localFile = fileUploadControl.files[0];
                let name = localFile.name;
                let avFile = new AV.File(name, localFile);
                let product = new Product();
                product.set('title', this.title);
                product.set('price', parseFloat(this.price));
                product.set('description', this.description);
                product.set('owner', AV.User.current().getUsername());
                product.set('image', avFile);
                product.save().then(function () {
                    alert('done')
                }, function (error) {
                    alert(JSON.stringify(error));
                });
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        }
    }

</script>

<style scoped>

</style>