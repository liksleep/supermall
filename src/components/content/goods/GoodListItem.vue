<template>
    <div class="goodsitem" @click="itemClick">
        <img :src="showImage" alt="" @load="imageLoad">
        <div class="goods-info">
            <p>{{goodsitem.title}}</p>
            <span class="price">{{goodsitem.price}}</span>
            <span class="collect">{{goodsitem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'GoodListItem',
    props: {
        goodsitem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        showImage() {
            return this.goodsitem.image || this.goodsitem.show.img
        }
    },  
    methods: {
        imageLoad() {
                // this.$bus.$emit('itemImageLoad')

            if (this.$route.path.indexOf('/home')) {
                this.$bus.$emit('homeitemImageLoad')
            } else if(this.$route.path.indexOf('/detail')) {
                this.$bus.$emit('detailitemImageLoad')
            }   
        },
        itemClick() {
            // console.log("跳转到详情页")
            this.$router.push('/detail/' + this.goodsitem.iid)
        }
    }
}
</script>

<style scoped>
        .goodsitem{
            position:relative;
            padding-bottom:40px;

            width:48%;
        }
        .goodsitem img {
            width:100%;
            border-radius:5px;
        }
        .goods-info{
            font-size:12px;
            /* position:absolute;
            left:0;
            right:0; */
            overflow:hidden;
            text-align:center;
        }
        .goods-info p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap;
            margin-bottom:3px;
        }
        .goods-info .price{
            color:var(--color-high-text);
            margin-right:20px;
        }

        .goods-info .collect{
             position:relative; 
        }
        
        .goods-info .collect::before {
            content: '';
            position:absolute;
            left:-15px;
            top:-1px;
            width:14px;
            height:14px;
            background:url("@/assets/image/common/collect.svg") 0 0/14px 14px;
        }
</style>