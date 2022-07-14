<template>
     <div class="goods">
        <good-list-item v-for="(item, index) in goods" :goodsitem="item" :key="index"/>
     </div>
</template>

<script>
import GoodListItem from './GoodListItem'

export default {
    name:'GoodList',
    components: {
        GoodListItem
    },
    props: {
        goods: {
        type:Array,
        default() {
            return []
         }
        }
    }
}
</script>

<style scoped>
    .goods{
        display:flex;
        /* 实现一列排布  多余分行排布*/
        flex-wrap:wrap;
        /* 实行均等分 */
        /* justify-content:space-around; */
         /* 完全均等分 */
        justify-content:space-evenly;
        padding:3px;
    }

    
</style>