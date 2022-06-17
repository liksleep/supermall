import vue from 'vue'
import vuerouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Category = () => import('../views/category/Category')

//1.安装插件
vue.use(vuerouter)

//创建router
const routers = [
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
const router = new vuerouter ({
    routers,
    mode: 'history'

})

//3.导出router
export default router