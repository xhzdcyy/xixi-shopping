<template>
    <div>
        <div class="comment-list">
    <div class="comment" v-for="detail in details">
        <div class="pic">
            <img :src="detail.url" alt="">
        </div>
        <div class="main">
            <div class="id">
                订单后四位：{{order.orderId.substring(order.orderId.length-4)}}
            </div>
            <div class="content">
                <el-input
                        type="textarea"
                        :rows="2"
                        :placeholder="detail.title"
                        v-model="detail.content">
                </el-input>


                <!--<span>{{detail.title}}</span>-->
            </div>
            <div class="date">
                {{dateShow}}
            </div>

        </div>
        <div class="operation">
            <el-button @click=createComment(detail)>评论</el-button>
            <el-button @click="detail.content=''">重置</el-button>
        </div>
    </div>

</div>
    <!--<div v-for="detail in details" >-->
    <!--<div><img :src="detail.url" alt=""></div>-->
    <!--{{detail.title}}-->
    <!--</div>-->
    </div>
</template>

<script>
    const AV = require('leancloud-storage');
    export default {
        name: "Evaluate",
        data() {
            return {
                id: this.$route.params.orderId,
                order:{},
                details:[],
                date:{},
                dataShow:''
            };
        },

        mounted(){
            let query = new AV.Query('Orders');

            query.get(this.id).then((order) => {
                console.log(order);
                this.order = order.attributes;
                this.details  = order.attributes.details;
                this.date = order.createdAt;
                console.log(this.date);
                this.dateShow=order.createdAt.getFullYear()+'-'+(order.createdAt.getMonth()+1)+'-'+order.createdAt.getDate()
            })
        },
        methods:{
            createComment({content,id,title,url}) {
                let Comment = AV.Object.extend('Comments');
                let comment= new Comment();
                comment.set('content', content);
                comment.set('orderId', this.order.orderId)
                comment.set('productId',id)
                comment.set('productName', title)
                comment.set('url', url)

                comment.save().then( () =>{
                    this.$message({
                        message: '评论成功',
                        type: 'success'
                    });
                }, function (error) {
                })
            },
        }
    }
</script>

<style scoped lang="scss">
    .pic img{
        width: 120px;
        height: 120px;
        padding: 20px;
    }

    .comment{
        display: flex;
    }

    .main{
        display: flex;
        flex-direction: column;
        margin: 20px;
        font-size: 14px;
        min-width: 200px;
    }

    .content{
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
    }

    .id, .date{
        color: #999999;
    }
    .id{
        text-align: left;
    }
    .date{
        text-align: right;
    }
    .operation{
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
    .el-button+.el-button {
        margin-left: 0;
    }
</style>