<template>
    <div class="tab-control">
        <!-- 遍历item 调用titles -->
        <div v-for="(item, index) in titles" :key="index" class="tabcon">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'tabcontrol',
    // 父子通信 props
    props:{
        titles: {
            type:Array,
            default() {
                return []
         }
        }
    }
}
</script>

<style scoped>
        .tab-control{
            display:flex;
            text-align:center;
            font-size:15px;
        }
        .tabcon{
            flex:1;
            height:40px;
            line-height:40px;
        }
</style>