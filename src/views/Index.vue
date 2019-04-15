<template>
    <el-main>
        <Carousel></Carousel>
        <br>
        <Banner></Banner>
        <Waterfall></Waterfall>
        <Footer></Footer>
    </el-main>
</template>


<script>
    import Carousel from '@/components/Carousel.vue'
    import Banner from '@/components/Banner.vue'
    import Footer from '@/components/Footer.vue'
    import Waterfall from '@/components/Waterfall.vue'

    export default {
        components: {
            Carousel,
            Banner,
            Waterfall,
            Footer,
        }
    }
</script>

<style lang="scss">


</style>
