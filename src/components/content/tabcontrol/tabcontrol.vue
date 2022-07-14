<!--
 * @Author: liksleep 2103713963@qq.com
 * @Date: 2022-06-19 19:54:43
 * @LastEditors: liksleep 2103713963@qq.com
 * @LastEditTime: 2022-06-21 13:59:51
 * @FilePath: \vscode\vue\supermall\src\components\content\tabcontrol\tabcontrol.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="tab-control">
        <!-- 遍历item 调用titles -->
        <div v-for="(item, index) in titles" :key="item" class="tabcon" 
        :class="{active: index == cur}" @click="tabclick(index)">
        <!-- 监听活跃状态 -->
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
    },
    data() {
        return {
            cur: 0
        }
    },
    methods:{
        // 监听点击
        tabclick(index) {
            this.cur = index
            // 传出点击事件
            this.$emit('tabclick', index)
        }
    }
}
</script>

<style scoped>
        .tab-control{
            display:flex;
            text-align:center;
            font-size:15px;
            height:40px;
            line-height:40px;
            background:rgba(225,225,225,.9);
        }
        .tabcon{
            flex:1;
        }
        
        .active{
            /* 高亮颜色 */
            color:var(--color-high-text);
           
        }

        .active span{
             border-bottom:3px solid var(--color-tint);
             padding:5px;
        }
</style>