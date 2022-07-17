<template>
        <div class="shop-info"> 
            <div class="shop-top">
                <img :src="shop.logo" alt="">
                <span class="title">{{shop.name}}</span>
            </div>
            <div class="shop-middle">
                <div class="shop-middle-left">
                    <div class="sells-count">
                        {{shop.sells | sellCountFilter}}
                    </div>
                    <div class="sells-text">总销量</div>
                </div>
            <div class="info-goods">
                <div class="goods-count">
                    {{shop.goodsCount}}
                </div>
                <div class="goods-text">全部宝贝</div>
                <div class="shop-middle-right">
                    <table>
                        <tr v-for="(item, index) in shop.score" :key="index">
                            <td>{{item.name}}</td>
                            <td class="score" :class="{'score-better' : item.isBetter}">{{item.score}}</td>
                            <td class="better" :class="{'better-more' : item.isBetter}"><span>
                                {{item.isBetter ? '高':'低'}}
                            </span></td>
                        </tr>
                    </table>
                    </div>
                </div>
                <div class="shop-bottom">
                    <div class="enter-shop">进店逛逛</div>
                </div>
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
    },
    filters: {
        sellCountFilter: function (value) {
            if(value < 10000) return value;
            return (value/10000).toFixed(1) + '万'
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
            height:100px;
            margin-top:80px;
        }
        .shop-top img{
            width:60px;
            height:60px;
            padding:10px;
            margin:10px;
            border-radius:50%;
            border:1px solid #ccc;
        }
        .title{
            padding-left:10px;
            position:relative;
            top:-30px;
        }
        .shop-middle{
            width:100%;
            height:160px;
            padding-top:10px;
            position:relative;
            margin-bottom:30px; 
        }
        .shop-middle-left{
            padding:10px;
            font-size:18px;
            color:#000000;
        }
        .sells-text{
            padding-top:15px;
        }
        .info-goods{
            width:80px;
            height:80px;
            position:relative;
            top:-76px;
            left:100px;
            font-size:18px;
            color:#000000;
            border-right:1px solid #ccc;
        }
        .goods-count{
            margin-left:6px;
        }
        .goods-text{
            padding:4px 4px 0 0;
        }
        .goods-count{
            font-size:18px;
            padding:10px;
        }
        .shop-middle-right{
            width:200px;
            height:100px;
            margin-left:30px;
            position:absolute;
            top:0;
            left:100%;
            right:0;
        }
        .shop-middle-right table td{
            padding:5px 5px;
        }
        .shop-middle-right .score{
            color:#5ea732;
        }
        .shop-middle-right .score-better{
            color:#f13e3a;
        }
        .shop-middle-right .better span{
            background:#5ea732;
            color:#fff;
            text-align: center;
        }
        .shop-middle-right .better-more span{
            background:#f13e3a;
        }
        .shop-bottom{
            position:relative;
            top:-50px;
            left:120px;
            width:160px;
            height:40px;
            line-height:40px;
            text-align:center;
            border-radius:20px;
            background:rgba(225, 225, 225,.8);
        }
        .enter-shop{
            font-size:16px;
        }
</style>