import {requst} from "./requst";

export function gethomemultidata() {
    return requst ({
        url:'/home/multidata'
    })
}

// 请求数据
export function getHomeGoods(type, page) {
    return requst({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}