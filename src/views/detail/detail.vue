<!--
 * @Author: liksleep 2103713963@qq.com
 * @Date: 2022-07-14 15:07:24
 * @LastEditors: liksleep 2103713963@qq.com
 * @LastEditTime: 2022-07-14 16:29:44
 * @FilePath: \vscode\vue\supermall\src\views\detail\detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div id="detail">
        <detailnavbar></detailnavbar>
        <detailswiper></detailswiper>
    </div>
</template>

<script>
import detailnavbar from './chilcomptens/detailnavbar'
import detailswiper from './chilcomptens/detailswiper'

import { getDetail } from '@/network/detail'

export default {
    name:'Detail',
    components: {
        detailnavbar,
        detailswiper
    },
    data() {
        return {
            // iid: null
            // res: null
            // topImages: []
        }
    },
    created() {
        // 1.保存idd位置
        // console.log(this.$route.params);
        this.iid = this.$route.params.iid

        //2. 获取idd请求的数据
         getDetail(this.iid).then(res => {
            console.log(res);

            // this.topImages = res.result.itemInfo.topImages
        })
    }
    // activaed() {
    //     getDetail(this.iid).then(res => {
    //         console.log(res);

    //         // this.topImages = res.result.itemInfo.topImages
    //     })
    // }
}  
</script>

<style>

</style>