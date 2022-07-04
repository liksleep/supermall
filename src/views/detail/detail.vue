<template>
    <div id="detail">
        <detailnavbar></detailnavbar>
    </div>
</template>

<script>
import detailnavbar from './chilcomptens/detailnavbar'

import { getDetail } from '@/network/detail'

export default {
    name:'detail',
    components: {
        detailnavbar,
    },
    data() {
        return{
            iid: null
        }
    },
    created() {
        // 1.保存idd位置
        this.iid = this.$route.params.iid

        //2. 获取idd请求的数据
        getDetail(this.iid).then(res => {
            console.log(res);
        })
    }
}
</script>

<style>

</style>