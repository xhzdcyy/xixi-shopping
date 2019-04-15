<template>
    <div class="header">
        <router-link to="/">
            <img class="logo" alt="logo" src="../assets/lativ.png">
        </router-link>


        <nav>
            <ul>
                <router-link to="/WOMEN"><el-button><li>女装</li></el-button></router-link>
                <el-button><li>男装</li></el-button>
                <el-button><li>童装</li></el-button>
                <el-button><li>婴幼儿</li></el-button>
                <el-button><li>运动</li></el-button>
            </ul>
        </nav>

        <div class="tool">
            <!--<span>{{isLogin}}</span>-->

            <router-link to="/upload"> <el-button>上传</el-button></router-link>
            <router-link to="/test"><el-button>test</el-button></router-link>
            <template v-if="!isLogin">
            <el-button><router-link to="/login">登录</router-link></el-button>
            </template>
            <template v-if="isLogin">
                <span>{{user.username}}</span>
                <el-button @click="onLogout">注销</el-button>
            </template>
            <!--<el-input v-model="input" placeholder="请输入内容"></el-input>-->
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data() {
            return {}
        },

        computed: {
            ...mapGetters([
                'isLogin',
                'user'
            ])
        },

        created() {
            this.checkLogin()
        },
        mounted(){
            this.checkLogin()
            // console.log(user)
        },

        methods: {
            ...mapActions([
                'checkLogin',
                'logout'
            ]),

            onLogout() {
                this.logout()
            }
        }

    }
</script>

<style scoped lang="scss">
    .header{
        font-size: 12px;
        color: #706e6c;
        display: flex;
        align-items:  baseline;
        justify-content: space-between;
        .logo,nav,.tool{
            flex: none;
        }
        ul {
            display: flex;
            list-style: none;
        }
    }

</style>
