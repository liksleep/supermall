<template>
    <div id="detail">
        <detailnavbar class="detail-navbar" @itemClick="itemClick" ref="nav"/>
            <scroll class="content" ref="scroll" :probe-type="3" @scroll="conentscorll"> 
                <!-- 属性:topImages  传入值: top-images -->
                <ul>
                    <li v-for="(item, index) in $store.state.cartList" :key="index">
                        {{item}}
                    </li>
                </ul>
                <detailswiper :topImages="topImages"/>
                    <detail-base-info :goods="goods"/>
                         <detail-shop-info :shop="shop"/>
                    <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
                <detail-param-info :paramInfo="paramInfo" ref="parmams"/>
             <detail-comment-info :commentInfo="commentInfo" ref="comment"/>
        <good-list :goods="recommends" ref="recomment"/>
        </scroll>
        <detailbottombar @addCart="addCart"/>
        

        <back-top @click.native="backclick" v-show="isshowbacktop"/>
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
import detailbottombar from './chilcomptens/detailbottombar'
import  backTop from  '@/components/content/backTop/backTop'


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
    detailbottombar,
    backTop,
    
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
            themeTopYs: [],
            count:0,
            // [0, 6520, 7320, 8000]
            isshowbacktop: false,
        }
    },
    activated() {
        // 1.保存idd位置
        // console.log(this.$route.params.iid);
        this.iid = this.$route.params.iid

        // //2. 获取idd请求的数据
         getDetail(this.iid).then(res => {
            // console.log(res);

            this.topImages = res.result.itemInfo.topImages
        })
     },
    created() {
        // 1.保存idd位置
        // console.log(this.$route.params.iid);
        this.iid = this.$route.params.iid

        // //2. 获取idd请求的数据
         getDetail(this.iid).then(res => {
            // console.log(res);

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

        }),
        // 3.请求推荐数据
        getRecommend().then(res => {
           this.recommends = res.data.list
        //    console.log(res)
        })
    },
    methods: {
        imageLoad() {
            this.$refs.scroll.refresh()

            // 获取themeTopYs的三个值
            this.themeTopYs = []

            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.parmams.$el.offsetTop - 44)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
            this.themeTopYs.push(this.$refs.recomment.$el.offsetTop - 44) 
            this.themeTopYs.push(Number.MAX_VALUE)

            // console.log(this.themeTopYs)
        },
        itemClick(index) {
            // 获取index个数,监听点击
            // console.log(index)
            this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)     
         },
         conentscorll(position) {
            //1. 获取Y值
            const positionY = -position.y

            // 2.positionY和主题中值进行对比
            // 0, 6515, 7318, 7668, Number.MAX_VALUE
            // console.log(Number.MAX_VALUE)

            // positionY在 0 和 6515之间, index = 0
            // positionY在 6515 和 7318之间, index = 1
            // positionY在 7318 和 7668之间, index = 2
            // positionY在 =超过7318值, index = 3

            // 遍历index数值  判断i数值的位置判断停留位置
            let length = this.themeTopYs.length
            for(let i = 0; i < length-1 ; i++) {
                // if(positionY > this.themeTopYs[parseInt(i)] && positionY < this.themeTopYs[i+1]){
                //     console.log(i)
                // }
                 
                //  hack做法
                if(this.count !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
                    this.count = i
                    this.$refs.nav.count = this.count   
                }
                
                // 普通做法
                // 判断是否跳转到相应位置
                // if(this.count !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] &&
                // positionY < this.themeTopYs[i+1]) || (i === length - 1 && positionY >= this.themeTopYs[i])))
                // {
                //     this.count = i
                //     this.$refs.nav.count = this.count
                // }


                // 3.是否显示回到顶部
                this.isshowbacktop = (-position.y) > 600
            }
         },
        backclick() {
           this.$refs.scroll.scrollTo(0,0)
         },
         addCart() {
            // 1.获取购物车展示的信息
             const product = {}
             product.image = this.topImages[0]
             product.title = this.goods.title 
             product.desc = this.goods.desc
             product.price =  this.goods.realPrice
             product.iid = this.iid

            // 2.将商品添加到购物车里
            // this.$store.commit('addCart', product)
            this.$store.dispatch('addCart', product)
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
        
        .detail-navbar{
            position:relative;
            z-index:20;
            background:#fff;
        }
        .content{
            height:calc(100vh - 44px);
        }
</style>