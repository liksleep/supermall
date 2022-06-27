<!--
 * @Author: liksleep 2103713963@qq.com
 * @Date: 2022-06-21 16:57:29
 * @LastEditors: liksleep 2103713963@qq.com
 * @LastEditTime: 2022-06-26 14:30:53
 * @FilePath: \vscode\vue\supermall\src\components\common\scroll\Scroll.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
        <!-- ref 指定该元素-->
        <div class="wrapper" ref="wrapper">
            <div class="content">
            <slot></slot>
            </div>
        </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'Scroll',
    props: {
        probeType: {
            type:Number,
            default:0
        }, 
        // pullUpLoad: {
        //      type: Boolean,
        //     default: true
        // }
    },
    data() {
        return {
            scroll: null
        }
    },
    // 组件创建完后调用
    mounted() {
        //创建Bscroll对象
        // $refs获取ref元素
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })
        // 2.监听滚动位置
        this.scroll.on('scroll', (position) =>{
            // console.log(position)
            // $emit()传出数据
            this.$emit('scroll', position)
        })

        //监听上拉事件
        // this.scroll.on('pullingUp', () => {
        //         this.$emit('pullingUp')
        // })

        //3.监听scroll滚动到底部
        if (this.pullUpLoad) {
            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUp')
            })
        }
    },
    methods:{
        scrollTo(x, y, time=1000) {
            this.scroll.scrollTo(x, y, time)
        },
        // finishPullUp() {
        //     this.scroll.finishPullUp()
        // }
    }
}
</script>

<style scoped>

</style>