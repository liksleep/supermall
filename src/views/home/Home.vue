<template>
   <div id="home">
        <navbar class="home-bar"><div slot="center">购物车</div></navbar>
        <homeswiper :banners="banners"></homeswiper>
        <recommendviews :recommends="recommends"></recommendviews>
        <featureviews></featureviews>
        <tabcontrol :titles="['流行' , '新款' , '精选']"></tabcontrol>
   </div>
</template>

<script>

import homeswiper from './childcomps/homeswiper'
import recommendviews from './childcomps/recommendviews'
import featureviews from './childcomps/featureviews'


import navbar from '@/components/common/nav/navbar'
import tabcontrol from '@/components/content/tabcontrol/tabcontrol'


import {gethomemultidata} from '@/network/home'


export default {
    name:'Home',
    components:{
        homeswiper,
        recommendviews,
        featureviews,

        navbar,
        tabcontrol
    },
    data() {
        return {
            //获取返回函数
           banners:[],
           recommends:[]
        }
    },
    created() {
        //1.请求多个数据
        gethomemultidata().then(res => {
             //调用函数返回
             this.banners = res.data.banner.list
             this.recommends = res.data.recommend.list
        })
        // }).catch(err => {
        //     console.log(err,'错误了')
        // })
    }
}
</script>

<style scoped>
        #home{
            padding-top:40px;
        }
        .home-bar{
            background:var(--color-tint);
            color:#fff;

            position:fixed;
            left:0;
            top:0;
            right:0;
            z-index:9;
        }
</style>