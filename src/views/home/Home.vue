<template>
   <div id="home">
        <navbar class="home-bar"><div slot="center">购物车</div></navbar>
        <homeswiper :banners="banners"></homeswiper>
        <recommendviews :recommends="recommends"></recommendviews>
        
   </div>
</template>

<script>

import navbar from '@/components/common/nav/navbar'
import homeswiper from './childcomps/homeswiper'
import recommendviews from './childcomps/recommendviews'


import {gethomemultidata} from '@/network/home'


export default {
    name:'Home',
    components:{
        navbar,
        homeswiper,
        recommendviews
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
        .home-bar{
            background:var(--color-tint);
            color:#fff;

        }
</style>