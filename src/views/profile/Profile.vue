<template>
    <div id="profile">
        <navbar class="pro-navbar"><div slot="center">商城</div></navbar>

        <user @click.native="userclick"></user>

        <div class="my-information">
            <div class="balance">
                <span class="jisuan">0.00</span>元
                <p>我的余额</p>
            </div>
            <div class="discounts">
                <span class="jisuan">{{count}}</span>个
                <p>我的优惠</p>
            </div>
            <div class="integral">
                <span class="jisuan">{{count}}</span>分
                <p>我的积分</p>
            </div>
        </div>

        <profilelist :herf="user" class="user-list"></profilelist>
        <profilelist :herf="list" class="item-list"></profilelist>
    </div>
</template>
<script>
    import navbar from '@/components/common/nav/navbar.vue';

    import user from './childcomps/user.vue';
    import profilelist from './childcomps/profilelist.vue';
export default {
    name:'Profile',
    components: {
        navbar,
        user,
        profilelist
    },
    data() {
        return{
            user: [
                {icon:'',info:'我的消息'},
                {icon:'',info:'积分商城'},
                {icon:'',info:'会员卡'}
            ],
            list:[
                {icon:'',info:'我的购物车'},
                {icon:'',info:'下载购物应用'}
            ],
            count:0
        }
    },
    computed:{

    },
    methods:{
        userclick() {
            console.log("点击了")
        }
    }
}
</script>

<style scoped>
    .pro-navbar{
        font-weight:700;
        color:#FFF;
        background: var(--color-tint);
    }
    .my-information{
        height:100px;
        width:100%;
        text-align: center;
        display: flex;
        font-size:14px;
        background: #fff;
    }
    .jisuan{
        position: relative;
        font-size: 22px;
        color:red;
    }
    .balance{
        padding-top:20px;
        flex:1;  
        border:1px solid #ccc;
    }
    .balance p{
        padding-top:10px;
    }
    .discounts{
        padding-top:20px;
        flex:1;  
        border:1px solid #ccc;
    }
    .discounts p{
        padding-top:10px;
    }
    .integral{
        padding-top:20px;
        flex:1;  
        border:1px solid #ccc;
    }
    .integral p{
        padding-top:10px;
    }
    .user-list, .item-list{
        margin-top:10px;
    }
</style>