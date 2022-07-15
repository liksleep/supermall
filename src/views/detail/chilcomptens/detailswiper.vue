<template>
        <swiper class="detail-swiper">
            <swiperitem v-for="(item, index) in topImages" :key="index">
                <img :src="item" alt="">
            </swiperitem>
        </swiper>
</template>

<script>
import { swiper, swiperitem } from '@/components/common/swiper'

export default {
    name:'detailswiper',
    components: {
        swiper,
        swiperitem
    },
    props:{
        topImages: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .detail-swiper{
        height:300px;
        overflow:hidden;
    }
    /* .detail-swiper img {
        width:100%;
        height:300px;
    } */
</style>