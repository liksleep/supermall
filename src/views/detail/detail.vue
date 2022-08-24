<template>
    <div id="detail">
        <detailnavbar class="detail-navbar" @itemClick="itemClick"/>
            <scroll class="content" ref="scroll"> 
                <!-- 属性:topImages  传入值: top-images -->
                <detailswiper :topImages="topImages"/>
                    <detail-base-info :goods="goods"/>
                         <detail-shop-info :shop="shop"/>
                    <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
                <detail-param-info :paramInfo="paramInfo"/>
             <detail-comment-info :commentInfo="commentInfo"/>
        <good-list :goods="recommends"/>
        </scroll>
    </div>
</template>

<script>
import detailnavbar from './chilcomptens/detailnavbar'
import detailswiper from './chilcomptens/detailswiper'
import detailBaseInfo from './chilcomptens/detailBaseInfo'
import detailShopInfo from './chilcomptens/detailShopInfo'
import detailGoodsInfo from './chilcomptens/detailGoodsInfo'
import detailParamInfo from './chilcomptens/detailParamInfo'
import detailCommentInfo from './chilcomptens/detailCommentInfo'


import Scroll from '@/components/common/scroll/Scroll'
import GoodList from '@/components/content/goods/GoodList'

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from '@/network/detail'


export default {
    name:'Detail',
    components: {
    detailnavbar,
    detailswiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,
    
    Scroll,
    GoodList
},
    data() {
        return {
            iid: null,
            // res: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo: {},
            recommends: [],
            // 详情页导航Y值
            themeTopYs: [0, 1000, 2000, 3000]
        }
    },
    activated() {
        // 1.保存idd位置
        // console.log(this.$route.params.iid);
        this.iid = this.$route.params.iid

        // //2. 获取idd请求的数据
         getDetail(this.iid).then(res => {
            console.log(res);

            this.topImages = res.result.itemInfo.topImages
        })
     },
    created() {
        // 1.保存idd位置
        // console.log(this.$route.params.iid);
        this.iid = this.$route.params.iid

        // //2. 获取idd请求的数据
         getDetail(this.iid).then(res => {
            console.log(res);

            // 1.获取轮播图数据
            const data = res.result  
            this.topImages = data.itemInfo.topImages

            // 2.获取商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

            // 3.获取商家信息
            this.shop = new Shop(data.shopInfo)
            
            // 4.获取店铺信息
            this.detailInfo = data.detailInfo

            // 5.获取参数信息
            this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

            // 6.取出评论信息
            if (data.rate.cRate !== 0) {
                this.commentInfo = data.rate.list[0]
            }

            // 7.
        }),
        // 3.请求推荐数据
        getRecommend().then(res => {
           this.recommends = res.data.list
           console.log(res)
        })
    },
    methods: {
        imageLoad() {
            this.$refs.scroll.refresh()
        },
        itemClick(index) {
            // 获取index个数,监听点击
            console.log(index)
            this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
         }
    }
}  
</script>

<style scoped>
        #detail{
            position:relative;
            z-index:9;
            background:#fff;
            height:100vh;
            overflow:hidden;
        }
        .content{
            height: calc(100% - 44px);
        }
        .detail-navbar{
            position:relative;
            z-index:20;
            background:#fff;
        }
</style>