<template>
    <el-form ref="form"  label-width="80px"  :model="address">
        <span>个人信息</span>
        <br>
        <br>
        <el-form-item label="姓名" >
            <el-input v-model="address.name"></el-input>
        </el-form-item>
        <el-form-item label="电话" >
            <el-input v-model="address.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" >
            <el-input v-model="address.address" autocomplete="off"></el-input>
        </el-form-item>


        <el-form-item>
            <el-button type="primary" @click="updateAddress()">修改</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    const AV = require('leancloud-storage');

    export default {
        name: "User",
        data(){
            return{
                userId:AV.User.current().id,
                address:AV.User.current().get('address')
                // address:{
                //     name:'',
                //     phone:'',
                //     address:''
                // }
            }
        },
        methods:{
            updateAddress(){
                console.log(this.address);
                let query = AV.Object.createWithoutData('_User', this.userId);
                query.set('address', this.address);
                // 保存到云端
                query.save().then(()=>{
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                });
            }
        },
        mounted(){
            console.log(AV.User.current().get('address'));
        }

    }
</script>

<style scoped>

</style>