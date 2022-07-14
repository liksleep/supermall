<template>
    <swiper>
        <!-- 使用接口 -->
            <swiperitem v-for="(item, id) in banners" :key="id">
                <a :href="item.link">
                    <img :src="item.image" alt="" @load="imageLoad">
                </a>
            </swiperitem>
        </swiper>
</template>

<script>

import {swiper,swiperitem} from '@/components/common/swiper'

export default {
    name:'homeswiper',
    props: {
        banners:{
            type:Array,
            default() {
                return []
            }
        }
    },
    components:{
        swiper,
        swiperitem
    },
    data() {
        return {
            isLoad: false
        }
    },
    methods: {
        imageLoad() {
            if(!this.isLoad) {
            this.$emit('swiperImageLoad')
            this.isLoad = true
            }
        }
    }
}
</script>

<style>

</style>