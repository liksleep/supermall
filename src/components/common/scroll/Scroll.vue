<template>
        <!-- ref -->
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
    data() {
        return {
            scroll: null
        }
    },
    // 组件创建完后调用
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {

        })
        this.scroll.scrollTo(0,0)
    },
    methods:{
        scrollTo(x, y, time=1000) {
            this.scroll.scrollTo(x, y, time)
        }
    }
}
</script>

<style scoped>

</style>