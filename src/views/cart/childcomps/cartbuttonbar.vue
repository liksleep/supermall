<template>
    <div class="button-bar">
        <div  class="check-content">
            <checkbutton class="check-ed"/>
            <span>全选</span>
        </div>

        <div class="check-price">
            合计:{{totalprice}}
        </div>

        <div class="calculate">
            结算:{{checkLength}}
        </div>
    </div>
</template>

<script>
import checkbutton from '@/components/content/checkButton/checkbutton';

export default {
    name:'cartbuttonbar',
    components: {
        checkbutton
    },
    computed:{
        totalprice(){
            return '￥' + this.$store.state.cartList.filter(item => {
                return  item.checked
            }).reduce((preValue, item) => {
                return item.price * item.count
            }, 0)
        },
        checkLength() {
            return this.$store.state.cartList.filter(item => item.checked).length
        }
    }
}
</script>

<style scoped>
    .button-bar{
        position: relative;
        display:flex;
        background:#fff;
        border:1px solid #eee;

        height:50px;
        line-height:50px;
    }
    .check-content{
        display:flex;
        align-items:center;
        margin-left:10px;
    }
    .check-ed{
        width:24px;
        line-height:20px;
        margin-right:10px;
    }

    .check-price{
        margin-left:10px;
    }

    .calculate{
        width:100px;
        /* line-height:40px; */
        /* height:40px; */
        position: absolute;
        right:10px;
        text-align:center;

        color:#fff;
        background:red;
        border-radius:100px;

    }
</style>