/*
 * @Author: liksleep 2103713963@qq.com
 * @Date: 2022-07-14 15:07:24
 * @LastEditors: liksleep 2103713963@qq.com
 * @LastEditTime: 2022-07-15 22:22:27
 * @FilePath: \vscode\vue\supermall\src\network\detail.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { requst } from "./requst";

export function getDetail(iid) {
    return requst ({
        url: '/detail',
        params: {
            iid
        }
    })
}
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodCount = shopInfo.cGoods
    }
}