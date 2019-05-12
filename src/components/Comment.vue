<template>
    <div class="comment-list">
        <div class="comment" v-for="comment in comments">
        <div class="pic">
            <img :src="comment.url" alt="pic">
        </div>
        <div class="main">
            <div class="id">
                订单后四位：{{comment.orderId.substring(comment.orderId.length-4)}}
            </div>
            <div class="content">
                <span>{{comment.content}}</span>
            </div>
            <div class="date">
                {{comment.date}}
            </div>

        </div>

    </div>

    </div>
</template>

<script>
    const AV = require('leancloud-storage');
    export default {
        name: "Comment",
        data() {
            return {
                productId: this.$route.params.productId,
                comments:[]
            };
        },
        mounted(){
            console.log('test');
            let query = new AV.Query('Comments');
            console.log('test1');
            query.equalTo('productId', this.productId );
            console.log('test2');
            query.find().then((comments) => {
                console.log(comments);
                    comments.forEach((element)=>{
                        this.comments.push(
                            {
                                ...(element.attributes),
                                date:element.createdAt.getFullYear()+'-'+(element.createdAt.getMonth()+1)+'-'+element.createdAt.getDate()
                            }
                            );
                    })
                console.log(this.comments);
            })
        }
    }
</script>

<style scoped>
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
</style>