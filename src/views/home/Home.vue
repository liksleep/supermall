<template>
   <div id="home">
        <navbar class="home-bar"><div slot="center">购物车</div></navbar>
   </div>
</template>

<script>

import navbar from '@/components/common/nav/navbar'
import {gethomemultidata} from '@/network/home'

export default {
    name:'Home',
    components:{
        navbar
    },
    data() {
        return {
            //获取返回函数
           banners: [],
           recomends: []
        }
    },
    created() {
        //1.请求多个数据
        gethomemultidata().then(res => {
             //调用函数返回
            //  this.result = res;
            this.banners = res.data.banner.list;
            this.recomends = res.data.recomend.list;
        })
    }
}
</script>

<style scoped>
        .home-bar{
            background:var(--color-tint);
            color:#fff;

        }
</style>