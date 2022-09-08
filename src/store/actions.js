
export default {
    addCart(context, payload) {
        // 1.查找之前数组中是否有该商品
        return new Promise((resolve, reject) => {
            let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)

        // 2.判断是否有值
        if(oldproduct) {
            // oldproduct.count += 1
            context.commit('addcounter', oldproduct)
            resolve('当前商品数量+1')
        } else {
            payload.count = 1
            // context.state.cartList.push(payload)
            context.commit('addToCart', payload)
            resolve('添加了新的商品')
        } 
        })
    }
}