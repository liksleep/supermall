import vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')
const Category = () => import('@/views/category/Category')
const Detail = () => import('@/views/detail/Detail')

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
    },
    {
        path:'/detail/:iid',
        component: Detail
    }
]
const router = new VueRouter ({
    routes,
    mode: 'history'

})

//3.导出router
export default router