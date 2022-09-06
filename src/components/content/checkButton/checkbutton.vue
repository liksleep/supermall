<template>
    <div class="check-button" :class="{check: ischecked}">
        <img src="@/assets/image/cart/tick.svg" alt="">
    </div>
</template>

<script>
export default {
    name:'checkbutton',
    props:{
        // isActive 是否是选中状态
        ischecked:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
    .check-button{
        border-radius:50%;
        border:2px solid #aaa;
    }
    .check{
        border-color:red;
        background:red;
    }
</style>