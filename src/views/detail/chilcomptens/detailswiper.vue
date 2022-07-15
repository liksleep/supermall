<template>
    <div class="detail-swiper">
        <swiper>
            <swiperitem v-for="(item, index) in topImages" :key="index">
                <img :src="item" alt="">
            </swiperitem>
        </swiper>
    </div>
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
        width:100%;
        /* position:relative; */
    }
    .detail-swiper img {
        width:100%;
        height:300px;
    }
</style>