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

<style>

</style>