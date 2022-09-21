<template>
   <div id="category">
        <navbar class="cat-bar"><div slot="center">商品分类</div></navbar>
            
        <categoryries></categoryries>
    </div> 
</template>

<script>
import navbar from '@/components/common/nav/navbar.vue'

import categoryries from './childcomps/categoryrise.vue'

import { getCategory } from '@/network/category'

export default {
    name:'Category',
    components:{
      navbar,
      categoryries
},
    data() {
       return{}
    },
    created() {
      // 1.请求分类数据
        this._getCategory()
    },
    methods:{
        _getCategory() {
          getCategory().then(res => {
            // 1.获取分类数据
		        this.categories = res.data.category.list
              console.log(res)
          })
      }
    }
    
}
</script>

<style scoped>
   .cat-bar{
    font-weight:700;
    color:#FFF;
    background: var(--color-tint);
   }
</style>