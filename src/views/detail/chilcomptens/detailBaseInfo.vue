<template>
    <div v-if="Object.keys(goods).length !== 0" class="Base-info">
        <div>{{goods.title}}</div>
    </div>
</template>

<script>
export default {
    name:'detailBaseInfo',
    props: {
        goods: {
            type: Object,
            default() {
                return{}
            }
        }
    }
}
</script>

<style scoped>

</style>