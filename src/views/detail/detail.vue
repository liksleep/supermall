<template>
    <div id="detail">
        <detailnavbar/>
        <detailswiper :topImages="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
    </div>
</template>

<script>
import detailnavbar from './chilcomptens/detailnavbar'
import detailswiper from './chilcomptens/detailswiper'
import detailBaseInfo from './chilcomptens/detailBaseInfo'
import detailShopInfo from './chilcomptens/detailShopInfo'

import {getDetail, Goods, Shop} from '@/network/detail'
import DetailShopInfo from './chilcomptens/detailShopInfo.vue'

export default {
    name:'Detail',
    components: {
    detailnavbar,
    detailswiper,
    detailBaseInfo,
    detailShopInfo,
    DetailShopInfo
},
    data() {
        return {
            iid: null,
            // res: null,
            topImages: [],
            goods: {},
            shop: {}
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
        })
    }
}  
</script>

<style>

</style>