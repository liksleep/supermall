<template>
        <div class="recommend">
            <!-- 遍历接口recommends -->
            <div v-for="(item, index) in recommends" class="recommend-item" :key="index">
            <!-- 双向绑定接口信息 item.link -->
                <a :href="item.link">
                <!-- 双向绑定接口信息 item.image -->
                    <img :src="item.image" alt="">
                    <div>{{item.title}}</div>
                </a>
            </div>
        </div>
</template>

<script>
export default {
    name:'recommendviews',
    props: {
        recommends:{
            type:Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
        .recommend{
            width:100%;
            display:flex;
            text-align:center;
            padding:20px 0 30px;
            font-size:12px;
            border-bottom:8px solid #eee;
        }
        
        .recommend-item{
            flex:1;
        }

        img{
           width:65px;
           height:65px;
           margin-bottom:10px; 
        }

</style>