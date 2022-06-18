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
    created() {
        //1.请求多个数据
        gethomemultidata().then(res => {
             console.log(res)
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