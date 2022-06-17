<template>
    <div class="tab-bar-item" @click="itemclick">
        <!-- !取反 将活跃状态变成不活跃 -->
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activestyle"><slot name="item-text"></slot></div>

    </div>
</template>

<script>
export default {
    name:"TabBaritem",
    props:{
        path: String,
        activecolor: {
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // isActive:true

        }
    },
    //计算属性
    computed:{
        isActive(){
            // /home -> item(/home) =true
            // /category -> item(/category) =true
            // /cart -> item(/cart) =true
            // /profile -> item(/profile) =true
            return this.$route.path.indexOf(this.path) !== -1
        },
        activestyle() {
            return this.isActive ? {color: this.activecolor} : {}
        }
    }, 
     methods: {
        itemclick() {
            this.$router.replace(this.path)
        }
    }
}
</script>

<style scoped>
    .tab-bar-item {
    flex:1;
    text-align:center;
    height:49px;
    font-size:14px;
    }

    .tab-bar-item img{
      background:#fff;
      width:24px;
      height:24px;
      margin-top:3px;
      vertical-align:middle;
    }

</style>