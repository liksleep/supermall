<template>
    <div class="cart">
        <navbar class="nav-bar">
            <div slot="center">购物车({{cartLenght}})</div>
        </navbar>
    
        <!-- 商品列表 --> 
        <Scroll class="content" 
        :probe-type="3"
        ref="scroll"
        >    
            <cart-list></cart-list>
        </Scroll>

        <!-- 底部汇总 -->
        <Cartbuttonbar/>
    </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'

import navbar from '@/components/common/nav/navbar'


import cartList from './childcomps/cartList.vue'

import cartbuttonbar from './childcomps/cartbuttonbar.vue';

// 直接导入getters
import { mapGetters } from 'vuex';
import Cartbuttonbar from './childcomps/cartbuttonbar.vue';

export default {
    name:'Cart',
    components:{
    navbar,
    cartList,
    Scroll,
    cartbuttonbar,
    Cartbuttonbar
},
    computed: {
        // 两种语法
        ...mapGetters ([
            'cartLenght'
        ])

        // ...mapGetters([
        //     length: 'cartLenght'
        // ])
    },
    methods:{
       
    },
    // 生命周期函数
    activated() {
        // 重新刷新scroll滚动效果
         this.$refs.scroll.refresh()
    }
}
</script>

<style scoped>
     .cart{
        height:100vh;
     }
    .nav-bar{
        background:var(--color-tint);
        color:#fff;
        /* font-weight:700; */
    }
    
    .content{
        overflow: hidden;
        height:calc(100% - 44px - 49px - 50px);
    }
</style>