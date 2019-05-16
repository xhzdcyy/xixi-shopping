<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <div>
                <span>关于XIXI</span>
                <br>
                <br>
                了解XIXI
                <br>
                服务通知
                <br>
                品牌日志
            </div>
        </el-col>
        <el-col :span="6">
            <div>
                <span>帮助中心</span>
                <br>
                <br>

                支付方式
                <br>
                配送方式
                <br>
                退货服务
            </div>
        </el-col>
        <el-col :span="6">
            <div>
               <span>微信公众号</span>
                <br>
                <br>
                <img src="../assets/wechat.gif" alt="wechat">

            </div>
        </el-col>
        <el-col :span="6">
            <div>
                <span> 021-6151-5750</span>
                <br>
                <br>
                周一至周五
                <br>
                09:00-12:00
                <br>
                13:30-18:00
                <br>
                (节假日休息)
            </div>
        </el-col>

    </el-row>
</template>
<style lang="scss" scoped>
    .el-row {
        margin: 20px 0;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
        font-family: "Verdana","Microsoft Yahei" !important;
        & span{
            font-size: 20px;
        }
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>