<!--
 * @Author: liksleep 2103713963@qq.com
 * @Date: 2022-07-06 11:18:03
 * @LastEditors: liksleep 2103713963@qq.com
 * @LastEditTime: 2022-07-06 15:14:10
 * @FilePath: \vscode\vue\supermall\src\views\detail\chilcomptens\detailswiper.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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