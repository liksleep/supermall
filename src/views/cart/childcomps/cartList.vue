<template>
        <div id="cartlist">  
            <cartListitem v-for="(item,index) in cartList" :key="index" :product="item"/>
        </div>
</template>

<script>
import cartListitem from './cartListitem';

import { mapGetters } from 'vuex';

export default {  
    name:'cartList',
    components:{
    cartListitem
},
    computed: {
        ...mapGetters(['cartList'])
    }
}
</script>

<style scoped>
    
</style>