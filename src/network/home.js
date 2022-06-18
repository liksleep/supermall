import { requst} from "./requst";

export function gethomeMultidata() {
    return requst ({
        url:'/home/multidata'
    })
}