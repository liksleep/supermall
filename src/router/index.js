/*
 * @Author: liksleep 2103713963@qq.com
 * @Date: 2022-06-17 16:22:44
 * @LastEditors: liksleep 2103713963@qq.com
 * @LastEditTime: 2022-06-17 22:43:02
 * @FilePath: \vscode\vue\supermall\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Category = () => import('../views/category/Category')

//1.安装插件
vue.use(VueRouter)

//创建router
const routes = [
    {
        path:'',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/category',
        component:Category
    }
]
const router = new VueRouter ({
    routes,
    mode: 'history'

})

//3.导出router
export default router