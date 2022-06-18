import {requst} from "./requst";

export function gethomemultidata() {
    return requst ({
        url:'/home/multidata'
    })
}