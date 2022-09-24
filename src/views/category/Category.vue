<template>
    <div id="cate-gory">
        <navbar class="nav-bar"><div slot="center">分类</div></navbar>
    </div>
</template>

<script>
import navbar from '@/components/common/nav/navbar.vue';

export default {
    name: "Category",
    components: {
        navbar
    }
}
</script>

<style scoped>
    .nav-bar{
        font-weight:700 ;
        color:#fff;
        background:var(--color-tint);
    }

</style>