/*
 * @Author: liksleep 2103713963@qq.com
 * @Date: 2022-06-18 10:34:39
 * @LastEditors: liksleep 2103713963@qq.com
 * @LastEditTime: 2022-07-05 10:36:52
 * @FilePath: \vscode\vue\supermall\src\network\requst.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";

export function requst(config) {
    //1.创建axios实例
     const instancel = axios.create({
         baseURL:'http://152.136.185.210:7878/api/hy66',  //'http://123.207.32.32:8000', 
         timeout: 5000
     })

     //2.axios的拦截器
     //请求拦截
     instancel.interceptors.request.use(config => {
            // console.log(config);
            //拦截后必须返回(参数)
            return config
    },err => {
            // console.log(err)

    })
    // 响应拦截
    instancel.interceptors.response.use(res => {
        return res.data
        // console.log(res)
    },err => {
        console.log(err)
    })
    //  3.发送真正的网络请求
     return instancel(config)
 }
 