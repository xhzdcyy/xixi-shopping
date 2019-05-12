<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="服装名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="服装类型">
            <el-radio-group v-model="form.type">
                <el-radio label="WOMEN"></el-radio>
                <el-radio label="MEN"></el-radio>
                <!--<el-radio label="童装"></el-radio>-->
                <!--<el-radio label="婴幼儿"></el-radio>-->
            </el-radio-group>
        </el-form-item>

        <el-form-item
                label="价格"
                prop="price"
                :rules="[
      { required: true, message: '价格不能为空'},
      { type: 'number', message: '价格必须为数字值'}
    ]"
        >
            <el-input type="price" v-model.number="form.price" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="上传图片">
            <input type="file" id="inputFile" class="form-control" placeholder="文件" required ref="files" >
            </input>
        </el-form-item>

        <el-form-item label="详细图片">
            <input type="file" id="inputPics" class="form-control" placeholder="文件" required ref="pics" multiple>
            </input>
        </el-form-item>

        <!--<input type="file" id="inputFile" class="form-control" placeholder="文件" required ref="files">-->



        <el-form-item>
            <el-button type="primary" @click="submitUpload">立即创建</el-button>
            <el-button @click="test">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    const AV = require('leancloud-storage');

    export default {
        data() {
            return {
                form: {
                    name: '',
                    price:'',
                    type:''
                },
                fileList: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }, {
                    name: 'food2.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }]

            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
                console.log(this.form.type);
            },
            submitUpload() {
                // e.preventDefault();
                const Product = AV.Object.extend('Pt');
                const files = AV.Object.extend('_File');
                let fileUploadControl = this.$refs.files;
                let localFile = fileUploadControl.files[0];
                let name = localFile.name;
                let avFile = new AV.File(name, localFile);
                let product = new Product();

                let fileUploadControl2 = this.$refs.pics;
                let pics = fileUploadControl2.files;
                console.log(pics);
                let pic = [];
                for( let i=0;i<pics.length;i++){
                    let avFile = new AV.File(pics[i].name, pics[i]);
                    console.log(avFile)
                    pic.push(avFile);
                }

                product.set('title', this.form.name);
                product.set('price', parseFloat(this.form.price));
                product.set('type', this.form.type);
                product.set('image', avFile);
                product.set('pics', pic);
                product.save().then( ()=> {
                    this.$message({
                        message: '上传成功',
                        type: 'success'
                    })

                }, function (error) {
                    alert(JSON.stringify(error));
                });
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            test(){
                console.log(this.$refs)
                console.log(this.$refs)
            }
        }
    }
</script>