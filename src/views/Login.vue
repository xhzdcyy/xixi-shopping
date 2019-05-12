<template>
    <div id="login" >
        <el-form >
        <el-form-item label="用户名">
            <el-input v-model="username" placeholder="用户名"></el-input>
        </el-form-item>


        <el-form-item label="密码">
            <el-input v-model="password" type="password" placeholder="密码" @keyup.enter="onLogin" width="300"></el-input>
        </el-form-item>
            <el-form-item>
                <el-button size="medium" @click="onLogin">立即登录</el-button>
            </el-form-item>
        <p class="notice">没有账号？
            <router-link to="/register">注册新用户</router-link>
        </p>
        </el-form>
    </div>
</template>


<script>
    import {mapActions} from 'vuex'
    import {Message} from 'element-ui'


    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },

        methods: {
            ...mapActions(['login']),

            onLogin() {
                this.login({username: this.username, password: this.password})
                    .then(() => {
                        this.$message({
                            message: '登录成功',
                            type: 'success'
                        });
                        this.$router.push({path: '/'})
                    },error => {
                        Message.error('用户名密码不匹配')
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