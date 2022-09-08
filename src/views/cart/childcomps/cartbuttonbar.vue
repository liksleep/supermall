<template>
    <div class="button-bar">
        <div  class="check-content">
            <checkbutton class="check-ed" :ischecked="isselecAll" @click.native="checkedClick"/>
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

import { mapGetters } from 'vuex';

export default {
    name:'cartbuttonbar',
    components: {
        checkbutton
    },
    computed:{
        ...mapGetters([
        'cartList'
    ]),
        totalprice(){
            return '￥' + this.cartList.filter(item => {
                return  item.checked
            }).reduce((preValue, item) => {
                return preValue + item.price * item.count
            }, 0).toFixed(2)
        },
        checkLength() {
            return this.cartList.filter(item => item.checked).length
        },
        isselecAll() {
            // 初始化为false
            if(this.cartList.length === 0) return false
            
            // 1.使用filter
            // return !(this.cartList.filter(item => !item.checked).length)


            // 2.使用find(查找)
            // 查找不选中
            return !this.cartList.find(item => !item.checked)
        }
    },
    methods:{
        checkedClick() {
            // 全部选中
            if (this.isselecAll) {  
                this.cartList.forEach(item => item.checked = false)
            } else {
            // 部分或全部不选中
                this.cartList.forEach(item => item.checked = true)
            }
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