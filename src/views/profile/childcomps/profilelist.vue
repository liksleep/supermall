<template>
  <div class="pro-list">
        <div v-for="(item, index) in herf" :key="index">
            <div class="list">
              {{item.info}}
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name:'profilelist',
  props:{
    herf:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{}
  }
}
</script>

<style scoped>
    .pro-list{
      
    }
    .list{
      width:100%;
      height:50px;
      line-height:50px;
      border-bottom:1px solid rgba(100,100,100,.1);
      padding-left:10px;
    }
</style>