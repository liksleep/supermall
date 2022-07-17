<template>
    <div id="detail">
        <scroll class="content" ref="scroll">
            <detailnavbar class="detail-navbar"/>
                <detailswiper :topImages="topImages"/>
                    <detail-base-info :goods="goods"/>
                <detail-shop-info :shop="shop"/>
            <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
        <detail-param-info :paramInfo="paramInfo"/>
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

import Scroll from '@/components/common/scroll/Scroll'

import {getDetail, Goods, Shop, GoodsParam} from '@/network/detail'
import DetailParamInfo from './chilcomptens/detailParamInfo.vue'

export default {
    name:'Detail',
    components: {
    detailnavbar,
    detailswiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo,
    Scroll,
    DetailParamInfo
},
    data() {
        return {
            iid: null,
            // res: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {}
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
        })
    },
    methods: {
        imageLoad() {
                this.$refs.scroll.refresh()
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