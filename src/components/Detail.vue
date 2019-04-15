<template>
    <div>
        <div>
            <a><img src="../assets/4045801_360.jpg"></a>
        </div>
        <div>
            <div class="productName">棉麻短袖衬衫-男</div>
            <div class="productName">{{ productId}}</div>
            <br>
            <span class="hidden" style="display: inline;"><span class="activities">
            <span class="currencyIdentifier">￥</span><span>69</span></span>&nbsp;&nbsp;
            <span>活动价</span>
            <span class="currencyIdentifier">￥</span><span>66</span></span>
            <br>
            <el-radio-group v-model="color">
                <el-radio-button label="red"></el-radio-button>
                <el-radio-button label="yellow"></el-radio-button>
                <el-radio-button label="blue"></el-radio-button>
                <el-radio-button label="green"></el-radio-button>
            </el-radio-group>
            <br>
            <el-radio-group v-model="size">
                <el-radio-button label="M"></el-radio-button>
                <el-radio-button label="S"></el-radio-button>
                <el-radio-button label="L"></el-radio-button>
                <el-radio-button label="XL"></el-radio-button>
                <el-radio-button label="XXL"></el-radio-button>
            </el-radio-group>
            <br>
            <span>数量</span>
            <el-input-number v-model="num1"  :min="1" :max="10" label="数量"></el-input-number>
            <el-button>加入购物车</el-button>
        </div>
        <div class="imgs">
            <img src="../assets/40469_D_21.jpg">
            <img src="../assets/40469_D_22.jpg">
            <img src="../assets/40469_D_23.jpg">
            <img src="../assets/40469_D_24.jpg">
            <img src="../assets/40469_D_26.jpg">
            <img src="../assets/40469_D_27.jpg">
            <img src="../assets/40469_D_28.jpg">

            <img src="../assets/19SS_760WASH_CN.jpg">
            <img src="../assets/ADULT_new_CN.jpg">
        </div>



    </div>
</template>
<script>
    import Router from 'vue-router'
    export default {
        props: {
            title: String,
        },
        data() {
            return {
                color: 'red',
                size: 'M',
                num1:1,
                productId:this.$route.params.productId
            };
        },
        mounted(){
            console.log(this.productId)
        }

    }
</script>
<style>
    .activities {
        text-decoration: line-through;
        color: #ccc;
    }
</style>