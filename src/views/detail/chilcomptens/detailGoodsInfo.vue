<template>
    <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
        <div class="info-desc">
            <div class="start">
            </div>
            <div class="desc">{{detailInfo.desc}}</div>
            <div class="end"></div>
        </div>
        <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
        <div class="info-list">
            <img v-for="(item, index) in detailInfo.detailImage[0].list" 
            :key="index" :src="item" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'detailGoodsInfo',
    props: {
        detailInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
        .goods-info{
            border-top:3px solid #ccc;
            width:100%;
            position:relative;
        }
        .info-desc{
            width:100%;
            height:100px;
            padding-top:26px;
        }
        .start{
            width:10px;
            height:10px;
            margin:10px;
            background:#000000;
        }
        .desc{
            width:110px;
            height:18px;
            margin:10px;
            overflow:hidden;
        }
        .end{
            width:10px;
            height:10px;
            margin-left:320px;
            background:#000000;
        }
        .info-key{
            padding:10px;
        }
</style>