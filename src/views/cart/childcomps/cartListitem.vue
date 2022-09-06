<template>
    <div class="item-sever">
        <div class="item-selector">
            <checkbutton :ischecked="product.checked" @click.native="checkClick"/>
        </div>

        <div class="item-image">
                <img :src="product.image" alt="">
            </div>
        <div class="item-gouwu">
            <div class="item-title">{{product.title}}</div>
            <div class="item-desc">{{product.desc}}</div>
            <div class="item-zonghe">
                <div class="item-price">￥{{product.price}}</div>
                <div class="item-count">x{{product.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>

import checkbutton from '@/components/content/checkButton/checkbutton'

export default {

    name:'cartListitem',
    props: {
        product: {
        type:Object,
        default() {
            return {}
            }
        }
    },
    components: {
        checkbutton
    },
    methods:{
        checkClick() {
            this.product.checked = !this.product.checked
        }
    }
}
</script>

<style scoped>
    .item-sever{
        display:flex;
        width:100%;
        height:150px;
        border:1px solid #ccc;
    }
    .item-selector{
        width:20px;
        display:flex;
        padding-left:5px;
        justify-content: center;
        align-items: center;
    }
    .item-image{
        flex:1;
    }
    .item-image img{
        padding:10px;
        width:120px;
        height:150px;
        border-radius:15px;
    }
    .item-gouwu{
        padding-top:5px;
        width:67%;
        height:150px;
        /* background:#ccc; */
    }
    .item-title{
        padding-top:10px;
        width:90%;
        /* height:30px; */
        font-size:18px;
        /* 文本省略 */
        overflow:hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .item-desc{
        padding-top:15px;
        font-size:14px;
        width:90%;

        /* 文本省略 */
        overflow:hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .item-zonghe{
        margin-top:20px;
        width:100%;
        height:60px;
        line-height:60px;
        display:flex;
    }
    .item-price{
        width:80%;
        font-size:20px;
        color:var(--color-tint);
    }
    item-count{
        flex:1;
    }
</style>