<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="服装名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="服装类型">
            <el-radio-group v-model="form.type">
                <el-radio label="女装"></el-radio>
                <el-radio label="男装"></el-radio>
                <el-radio label="童装"></el-radio>
                <el-radio label="婴幼儿"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item
                label="价格"
                prop="price"
                :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
        >
            <el-input type="price" v-model.number="form.price" autocomplete="off"></el-input>
        </el-form-item>


        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
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