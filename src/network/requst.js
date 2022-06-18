import axios from "axios";

// export function requst(config) {
//    return new Promise((resolve, reject) => {
//     const instancel = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout:5000
//     })

//     instancel(config)
//     .then(res => {
//         resolve(res)
//     })
//     .catch(err => {
//         reject(err)
//     })
//  })
// }

export function requst(config) {
    //1.创建axios实例
     const instancel = axios.create({
         baseURL: 'http://123.207.32.32:8000',
         timeout:5000
     })

     //2.axios的拦截器
     //请求拦截
     instancel.interceptors.request.use(config => {
            console.log(config);
            //拦截后必须返回(参数)
            return config
    },err => {
            console.log(err)

    })
    // 响应拦截
    instancel.interceptors.response.use(res => {
        console.log(res)
    },err => {
        console.log(err)
    })
     //3.发送真正的网络请求
     return instancel(config)
 }
 