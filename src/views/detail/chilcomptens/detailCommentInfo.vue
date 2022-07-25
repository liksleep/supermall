 <template>
    <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
         <div class="info-header">
            <div class="header-title">用户评价</div>
            <div class="header-more">
                更多
                <i class="arrow-right"></i>
            </div>
         </div>
         
         <div class="info-user">
            <img :src="commentInfo.user.avatar" alt="">
            <span>{{commentInfo.user.uname}}</span>
         </div>
         <div class="info-detail">
            <p>{{commentInfo.content}}</p>
            <div class="info-other">
                <span class="date">{{commentInfo.created | showDate}}</span>
                <span>{{commentInfo.style}}</span>
            </div>
            <div class="info-imgs">
                <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" alt="">
            </div>
         </div>
    </div>
</template>

<script>
import {formatDate} from '@/common/utils'

export default {
    name:'detailCommentInfo',
    filters: {
        showDate: function (value) {
            let date = new Date(value*1000)
            return formatDate(date, 'yyyy-MM-dd')
        }
    },
    props: {
        commentInfo: {
            type:Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
        .info-header{
            width:94%;
            margin:0 auto;
            height:50px;
            /* line-height:50px; */
            border-bottom:1px solid #ccc;
        }
        .header-title{
            text-align:left;
            padding-top:10px;
            font-size:18px;
            color: #000;
        }
        .header-more{
            text-align:right;
            font-size:18px;
            color: #000;
            position: relative;
            top:-20px;
        }

        .info-user{
            margin-top:10px;
            width:100%;
            height:70px;
        }
        .info-user img{
            width:50px;
            height:50px;
            margin:0 10px;
            border-radius:50%;
            position:relative;
            top:10px;
        }
        .info-user span{
            position:relative;
            top:-10px;
            font-size:18px;
            color: #000;
        }

        .info-detail{
            width:94%;
            margin:0 auto;
            line-height:30px;
            color:#000;
        }
        .info-detail span{
            color:#ccc;
            padding-right:10px;
        }
        .info-imgs{
            width:98%;
            margin:0 auto;
            height:130px;
            border-bottom:3px solid #ccc;
            padding-top:10px;
        }
        .info-imgs img{
            width:100px;
            height:100px;
            padding-right:4px;
        }
</style>