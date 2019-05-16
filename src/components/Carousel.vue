<template>
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item >
            <router-link to="/productlist/WOMEN"><img src='../assets/c1.jpg' >
            </router-link>
        </el-carousel-item>
        <el-carousel-item >
            <router-link to="/productlist/ALL"><img src='../assets/c2.jpg' >
            </router-link>
        </el-carousel-item>
        <el-carousel-item >
            <router-link to="/productlist/MEN"><img src='../assets/Carousel2.jpg' >
            </router-link>

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