<template>
     <div id="user">
            <div slot="left" class="moren">
                <img src="@/assets/image/profile/avatar.svg" alt="">
            </div>
                <div class="text">登录/注册</div>
                <div class="phone"><img src="@/assets/image/profile/phone.svg" alt="">
                暂无绑定手机号
                </div>
            <div slot="right" class="arrows">
                <img src="@/assets/image/profile/right.svg" alt="">
            </div>
     </div>   
</template>

<script>
export default {
    name:'user',
    data() {
        return{}
    }
}
</script>

<style scoped>
    #user{
        position: relative;
        height:120px;
        width:100%;
        background:var(--color-tint);
    }
    .moren{
        padding:10px;
    }
    .moren img{
        width:100px;
        height:100px;
    }
    .text{
        position:absolute;
        top:30px;
        left:120px;
        color:#fff;
        font-size:20px;
    }
    .phone{
        position:absolute;
        top:50px;
        left:120px;
        color:#fff;
        font-size:14px;
    }
    .phone img {
        position:relative;
        top:10px;
        left:-10px; 
        width:30px;
        height:30px;
        margin-right:-16px;
    }
    .arrows img{
        position:absolute;
        top:50px;
        right:10px;
        width:30px;
        height:20px;
    }
</style>