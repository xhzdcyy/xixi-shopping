<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <div>
                关于lativ
                <br>
                了解lativ
                <br>
                服务通知
                <br>
                品牌日志
            </div>
        </el-col>
        <el-col :span="6">
            <div>
                帮助中心
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
                微信公众号
                <br>
                了解lativ
                <br>
                服务通知
                <br>
                品牌日志
            </div>
        </el-col>
        <el-col :span="6">
            <div>
                021-6151-5750
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
<style lang="scss">
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
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