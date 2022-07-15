<template>
    <div v-if="Object.keys(goods).length !== 0" class="Base-info">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>

    </div>
</template>

<script>
export default {
    name:'detailBaseInfo',
    props: {
        goods: {
            type: Object,
            default() {
                return{}
            }
        }
    }
}
</script>

<style scoped>
        .Base-info{
            width:100%;
            height:160px;
            margin:0 auto;
        }
        .info-title{
            padding:10px;
            font-size:18px;
            color:#000000;
        }
        .info-price{
            width:100%;
            height:40px;
            padding-left:10px;
            padding-top:10px;
        }
        .n-price{
            font-size:18px;
            padding:10px 5px 10px 0px;
            color:var(--color-tint);
        }
        .o-price{
            padding:5px;
            font-size:12px;
        }
        .discount{
            width:10px;
            height:10px;
            padding:2px;
            font-size:12px;
            border-radius:20px;
            background:var(--color-tint);
            color:#fff;
            position:relative;
            top:-6px;
        }
        .info-other{
            width:100%;
            height:40px;
            line-height:40px;
            font-size:14px;
            display:flex;
        }
        .info-other span{
            flex:1;
            padding-left:10px;
            border-bottom:3px solid #ccc;
        }
</style>