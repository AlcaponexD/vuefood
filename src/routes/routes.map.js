import Home from '@/pages/Home'
import Carrinho from '@/pages/Carrinho'
import Products from '@/pages/Products'
import Login from '@/pages/Auth/Login'
import Register from '@/pages/Auth/Register'

const routes = [
    {
        path:'/',
        //Com isso todas as rodas da children vao pegar o tema default
        component: () => import('@/layouts/defaultTemplate'),
        children:[
            {
                path:'/',
                component:Home,
                name:'home'
            },
            {
                path:'/loja',
                component:Products,
                name:'loja'
            },
            {
                path:'/carrinho',
                component:Carrinho,
                name:'carrinho'
            }
        ]
    },
    {
        path: '/',
        //Com isso todas as rodas da children vao pegar o tema auth
        component: () => import('@/layouts/AuthTemplate'),
        children : [
            {
                path:'/entrar',
                component:Login,
                name:'login'
            },
            {
                path:'/registrar',
                component:Register,
                name:'register'
            }
        ]
    }
];

export default routes;