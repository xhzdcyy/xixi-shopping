<template>
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in imgs" :key="item">
            <!--<h3>{{ item }}</h3>-->
            <!--<img :src=item :alt=item>-->
            <img src='../assets/Carousel1.jpg' :alt=item>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        data() {
            return {
                imgs:
                    [
                        '../assets/Carousel1.jpg',
                        '../assets/Carousel2.jpg',
                        '../assets/Carousel3.jpg',
                        '../assets/Carousel4.jpg',
                        '../assets/Carousel5.jpg',
                        '../assets/Carousel6.jpg',
                    ]
            };
        }
    }
</script>

<style>
    /*.el-carousel{*/
        /*width:1180px;*/
        /*height: 557px;*/
    /*}*/

    .el-carousel__container{
        width:1180px;
        height: 557px;
    }

    /*.el-carousel__item{*/
        /*width:1180px;*/
        /*height: 557px;*/
    /*}*/

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>