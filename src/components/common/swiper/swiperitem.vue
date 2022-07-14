<template>
    <div class="slide">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'swiperitem'
}
</script>

<style scoped>
    .slide {
        width: 100%;
        flex-shrink: 0;
    }

    .swiper img {
        width:100%;
    }
</style>