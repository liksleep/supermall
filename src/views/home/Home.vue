<template>
   <div id="home">
        <navbar class="home-bar"><div slot="center">购物车</div></navbar>
   </div>
</template>

<script>

import navbar from '@/components/common/nav/navbar'

export default {
    name:'Home',
    components:{
        navbar
    }
}
</script>

<style scoped>
        .home-bar{
            background:var(--color-tint);
            color:#fff;
            
        }
</style>