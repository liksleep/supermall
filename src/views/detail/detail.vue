<template>
    <div id="detail">
        <detailnavbar/>
        <detailswiper :topImages="topImages"/>
    </div>
</template>

<script>
import detailnavbar from './chilcomptens/detailnavbar'
import detailswiper from './chilcomptens/detailswiper'

import {getDetail} from '@/network/detail'

export default {
    name:'Detail',
    components: {
        detailnavbar,
        detailswiper


    },
    data() {
        return {
            iid: null,
            // res: null,
            topImages: []
        }
    },
    activated() {
        // 1.保存idd位置
        // console.log(this.$route.params.iid);
        this.iid = this.$route.params.iid

        // //2. 获取idd请求的数据
         getDetail(this.iid).then(res => {
            console.log(res);

            this.topImages = res.result.itemInfo.topImages
        })
     },
    created() {
        // 1.保存idd位置
        // console.log(this.$route.params.iid);
        this.iid = this.$route.params.iid

        // //2. 获取idd请求的数据
         getDetail(this.iid).then(res => {
            console.log(res);

            this.topImages = res.result.itemInfo.topImages
        })
    }
}  
</script>

<style>

</style>