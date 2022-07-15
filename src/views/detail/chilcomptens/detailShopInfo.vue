<template>
        <div class="shop-info"> 
            <div class="shop-top">
                <img :src="shop.logo" alt="">
                <span class="title">{{shop.name}}</span>
            </div>
        </div>
</template>

<script>
export default {
    name:'detailShopInfo',
    props: {
        shop: {
            type:Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
        .shop-info{
            width:100%;
            position: relative;
        }
        .shop-top{
            width:100%;
            height:200px;
            margin-top:100px;
            border:1px solid red;
        }
        .shop-top img{
            width:60px;
            height:60px;
            padding:10px;
            border-radius:20px;
        }
</style>