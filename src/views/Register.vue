<template>
    <div id="register">

        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"class="demo-ruleForm">
            <el-form-item label="用户名">
                <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
            </el-form-item>


            <el-form-item label="密码" prop="pass">
                <el-input v-model="ruleForm.pass" type="password" placeholder="密码" width="300"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input v-model="ruleForm.checkPass" type="password" placeholder="密码" width="300"></el-input>
            </el-form-item>


            <!--<el-form-item label="密码" prop="pass">-->
                <!--<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="确认密码" prop="checkPass">-->
                <!--<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>-->
            <!--</el-form-item>-->


            <el-form-item label="电子邮箱" prop="email">
                <el-input v-model="ruleForm.email" type="email" placeholder="e-mail" @keyup.enter="onRegister"></el-input>
            </el-form-item>

            <el-form-item>
                <!--<el-button type="primary" >立即创建</el-button>-->
                <el-button size="medium" @click="onRegister">立即注册</el-button>
            </el-form-item>
            <!--<el-button size="medium" @click="onLogin">立即登录</el-button>-->
            <p class="notice">已有账号？<router-link to="/login">立即登录</router-link></p>
        </el-form>


        <!--<h4>用户名</h4>-->
        <!--<input v-model="username" placeholder="用户名">-->
        <!--<h4>密码</h4>-->
        <!--<input v-model="password" type="password" placeholder="密码" >-->
        <!--<h4>邮箱</h4>-->
        <!--<input v-model="email"  placeholder="邮箱" @keyup.enter="onRegister" >-->
        <!--<el-button size="medium" @click="onRegister">立即注册</el-button>-->
        <!--<p class="notice">已有账号？<router-link to="/login">立即登录</router-link></p>-->
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import {Message} from 'element-ui'
    export default {
        data () {
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            let validateEmail = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入邮箱地址'));
                } else if (!filter.test(value)) {
                    callback(new Error('请输入有效的邮箱地址'));
                } else {
                    callback();
                }
            };
            return {
                username: '',
                password: '',
                password2:'',
                email:'',
                ruleForm: {
                    username:'',
                    pass: '',
                    checkPass: '',
                    email: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    email: [
                        { validator: validateEmail, trigger: 'blur' }
                    ],

                }
            }
        },

        methods: {
            ...mapActions(['register']),

            onRegister() {
                this.register({username: this.ruleForm.username, password: this.ruleForm.password,email:this.ruleForm.email})
                    .then(()=>{
                        Message.success('注册成功')
                        this.$router.push({path: '/'})
                    })
                    .catch(()=>{
                        Message.error('出错了')
                    })
            }
        }
    }
</script>

<style lang="scss">

    @import "../assets/base.scss";

    #login, #register {
        display: grid;
        justify-content: center;
        padding-top: 30px;

        h4 {
            margin: 10px 0 5px;
        }

        p {
            margin: 5px 0;
        }

        input {
            width: 400px;
        }

        .error {
            font-size: 12px;
            color: #f00;
        }

        button {
            margin-top: 30px;
            justify-self: start;
        }

        .notice {
            font-size: 12px;
            color: $textLighterColor;
            text-align: center;
            margin-top: 30px;

            a {
                color: $themeColor;
            }
        }
    }


</style>