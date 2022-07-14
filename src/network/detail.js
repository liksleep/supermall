import { requst } from "./requst";

export function getDetail(iid) {
    return requst ({
        url: '/detail',
        params: {
            iid
        }
    })
}