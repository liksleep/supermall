<template>
   <div id="home" class="wrapper">
        <navbar class="home-bar"><div slot="center">购物车</div></navbar>
        
        <scroll class="content">
                <homeswiper :banners="banners"></homeswiper>
                 <recommendviews :recommends="recommends"></recommendviews>
                <featureviews></featureviews>
                <tabcontrol :titles="['流行' , '新款' , '精选']" 
                class="tabcont" @tabclick="tabclick">
                </tabcontrol>
                 <GoodList :goods="showgoods"></GoodList>
        </scroll>
   </div>
</template>

<script>
 
import homeswiper from './childcomps/homeswiper'
import recommendviews from './childcomps/recommendviews'
import featureviews from './childcomps/featureviews'


import navbar from '@/components/common/nav/navbar'
import tabcontrol from '@/components/content/tabcontrol/tabcontrol'
import GoodList from '@/components/content/goods/GoodList'
import Scroll from '@/components/common/scroll/Scroll'


import { gethomemultidata, getHomeGoods }  from '@/network/home'

export default {
    name:'Home',
    components:{
        homeswiper,
        recommendviews,
        featureviews,

        navbar,
        tabcontrol,
        GoodList,
        Scroll
    },
    data() {
        return {
            //获取返回函数
            // 图片与文字的接口
           banners: [],
           recommends: [],
            //获取数据    
           goods: {
            'pop': {page: 0, list: []},
            'new': {page: 0, list: []},
            'sell': {page: 0, list: []},
           },
           currenttype: 'pop'
       }
    },
    // 计算属性
    computed: {
        showgoods() {
            return this.goods[this.currenttype].list
        }
    },
    created() {
        //1.请求多个数据
        this.gethomemultidata()
        // 请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
        // }).catch(err => {
        //     console.log(err,'错误了')
        // })
    },
    methods: {
        /**
         * 事件监听
         */
        tabclick(index){
            // 监听index 循环判断点击拿个
            switch (index) {
                case 0:
                    this.currenttype = 'pop'
                    break
                case 1:
                    this.currenttype = 'new'
                    break
                case 2:
                    this.currenttype = 'sell'
                    break
            }
        },



        /**
        *网络请求相关方法
        * */
        gethomemultidata() {
            gethomemultidata().then(res => {
             //调用函数返回
             // 获取接口
             this.banners = res.data.banner.list;
             this.recommends = res.data.recommend.list;
            })
        },
        getHomeGoods(type) {
            // 获取第一页的数据
            const page = this.goods[type].page + 1
            getHomeGoods(type, page).then(res => {
            // console.log(res)
            // 拿到数组对象
            this.goods[type].list.push(...res.data.list)
            // 拿到第一页数据
            this.goods[type].page += 1
          })
        }
    }
}
</script>

<style scoped>
        #home{
            padding-top:40px;
            height:100vh;
        }
        .home-bar{
            background:var(--color-tint);
            color:#fff;

            /* 固定定位 */
            position:fixed;
            left:0;
            top:0;
            right:0;
            z-index:9;
        }

        .tabcont{
            /* 移动到tabcont组件时固定在顶部 */
            position:sticky;
            top:40px;

            z-index:10;
        }
        .content{
            height:calc(100% - 93px);
            overflow: hidden;
        }
</style>