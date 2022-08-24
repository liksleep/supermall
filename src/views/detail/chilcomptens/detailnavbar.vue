<template>
    <div>
        <navbar>
            <div slot="left" class="back" @click="backClick">
                <img src="@/assets/image/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <div v-for="(item, index) in titles" :key="index" 
                class="titles" :class="{active: index=== count}"
                @click="itemClick(index)">
                    {{item}}
                </div>
            </div>
        </navbar>
    </div>
</template>

<script>
import navbar from '@/components/common/nav/navbar'

export default {
    name: 'detailnavbar',
      components: {
        navbar
    },
    data() {
        return {
            titles:['商品','参数','评论','推荐'],
            count:0
        }
    },
    methods: {
        itemClick(index) {
            this.count = index;
            this.$emit('itemClick', index)
        },
        backClick() {
            this.$router.back()
        }
    }
}
</script>

<style scoped>
    .title{
        display:flex;
        font-size:14px;
    }

    .titles{
        flex:1;
    }

    .active{
        color:var(--color-high-text);
    }

    .back{
        margin-top:5px;
    }
</style>