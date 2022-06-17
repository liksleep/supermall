<template>
     <tab-bar>
            <tab-baritem path='/home' activecolor="red">
               <img slot="item-icon" src="../../assets/image/tabbar/home.png" alt="">
               <img slot="item-icon-active" src="../../assets/image/tabbar/home1.png" alt="">
                    <div slot="item-text">首页</div>
            </tab-baritem>
            <tab-baritem path='/category' activecolor="red">
                <img slot="item-icon" src="../../assets/image/tabbar/分类.png" alt="">
                <img slot="item-icon-active" src="../../assets/image/tabbar//分类1.png" alt="">
                   <div slot="item-text">分类</div>
            </tab-baritem>
            <tab-baritem path='/cart' activecolor="red">
               <img slot="item-icon" src="../../assets/image/tabbar/购物车.png" alt="">
               <img slot="item-icon-active" src="../../assets/image/tabbar/购物车1.png" alt="">
                    <div slot="item-text">购物车</div> 
            </tab-baritem>
            <tab-baritem path='/profile' activecolor="red">
                <img slot="item-icon" src="../../assets/image/tabbar/我的.png" alt="">
                <img slot="item-icon-active" src="../../assets/image/tabbar/我的1.png" alt="">
                    <div slot="item-text">我的</div>
            </tab-baritem>
        </tab-bar>
</template>

<script>

     import TabBar from '../common/tabbar/TabBar'
     import TabBaritem from '../common/tabbar/TabBaritem'

export default {
    name:'MainTabbar',
    components: {
    TabBar,
    TabBaritem
  }
}
</script>

<style>

</style>