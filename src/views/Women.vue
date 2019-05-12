<template>
    <el-container>
        <!--<el-aside width="200px">-->
            <!--<Aside></Aside>-->
        <!--</el-aside>-->
        <el-main>

            <Display></Display>
            <!--<Detail></Detail>-->
        </el-main>
    </el-container>
</template>


<script>
    // @ is an alias to /src
    import Header from '@/views/Header.vue'
    import Carousel from '@/components/Carousel.vue'
    import Banner from '@/components/Banner.vue'
    import Footer from '@/components/Footer.vue'
    import Copyright from '@/components/Copyright.vue'
    import Aside from '@/components/Aside.vue'
    import Display from '@/components/Display.vue'
    import Detail from '@/components/Detail.vue'
    import ProductList from '@/components/ProductList.vue'
    import ShoppingCart from '@/components/ShoppingCart.vue'
    import Waterfall from '@/components/Waterfall.vue'
    import Index from '@/views/Index.vue'

    export default {
        components: {
            myheader: Header,
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
</style>
