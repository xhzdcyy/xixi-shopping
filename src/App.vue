<template>
  <div id="app">
    <el-container>
      <el-header>
        <myheader></myheader>
      </el-header>
      <el-container>
          <router-view/>
      </el-container>
      <el-footer>
        <Copyright></Copyright>
      </el-footer>
    </el-container>
  </div>
</template>


<script>
  // @ is an alias to /src
  import Header from '@/views/Header.vue'
  import Carousel from '@/components/Carousel.vue'
  import Banner from '@/components/Banner.vue'
  import Footer from '@/components/Footer.vue'
  import Copyright from '@/components/Copyright.vue'
  import Aside from '@/components/Aside.vue'
  import Display  from '@/components/Display.vue'
  import Detail from '@/components/Detail.vue'
  import ProductList from '@/components/ProductList.vue'
  import ShoppingCart from '@/components/ShoppingCart.vue'
  import Waterfall from '@/components/Waterfall.vue'
  import Index from '@/views/Index.vue'
  export default {
    components: {
      myheader:Header,
      Carousel,
      Banner,
      Footer,
      Copyright,
      Aside,
      Display,
      Detail,
      ProductList,
      ShoppingCart,
      Waterfall,
      Index
    }
  }
</script>

<style lang="scss">
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
