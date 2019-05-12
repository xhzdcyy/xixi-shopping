<template>
    <div class="header">
        <router-link to="/">
            <img class="logo" alt="logo" src="../assets/xixi.png">
        </router-link>


        <nav>
            <ul>
                <router-link to="/productlist/ALL"><el-button><li>所有</li></el-button></router-link>
                <router-link to="/productlist/WOMEN"><el-button><li>女装</li></el-button></router-link>
                <router-link to="/productlist/MEN"><el-button><li>男装</li></el-button></router-link>
            </ul>
        </nav>

        <div class="tool">
            <!--<span>{{isLogin}}</span>-->
            <!--<router-link to="/productlist"><el-button>列表</el-button></router-link>-->
            <router-link to="/shoppingcart"><el-button>购物车</el-button></router-link>
            <router-link to="/upload" v-if=admin> <el-button>上传</el-button></router-link>
            <!--<router-link to="/test"><el-button>test</el-button></router-link>-->
            <router-link to="/orders"><el-button>订单</el-button></router-link>
            <!--<router-link to="/cart"><el-button>购物车</el-button></router-link>/-->
            <template v-if="!isLogin">
                <router-link to="/login"><el-button>登录</el-button></router-link>
            </template>
            <template v-if="isLogin">
                <router-link to="/user"> <el-button>{{user.username}}</el-button></router-link>
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
            return {
                admin:false
            }
        },

        computed: {
            ...mapGetters([
                'isLogin',
                'user'
            ])
        },

        created() {

        },
        mounted(){
            this.checkLogin()
            // this.checkLogin();
            setTimeout(()=>{
                // console.log(user)
                console.log(this.user)
                if (this.user)
                this.admin = this.user.admin;
            })

            // this.admin = this.user.admin;
        },

        methods: {
            ...mapActions([
                'checkLogin',
                'logout'
            ]),

            onLogout() {
                this.logout();
                this.admin=false;
                this.$router.push({path: '/'})

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
        margin-bottom: 40px;
        .logo,nav,.tool{
            flex: none;
        }
        ul {
            display: flex;
            list-style: none;
        }
    }

</style>
