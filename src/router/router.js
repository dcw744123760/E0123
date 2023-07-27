
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../pages/index.vue'
import FreeCRM from '../components/freeCRMPage/freeCRM.vue'
import IndexMain from '../components/indexMain/indexMain.vue'
import Wxpay from '../components/wxpayPage/wxpay.vue'; 
import YxintroducePage from '../components/yxintroducePage/yxintroduce.vue'; 
import Aboutus from '../pages/aboutus.vue'
import PAD_assist from '../pages/PAD_assist.vue'

import Prical from '../pages/prical.vue'
const routes = [
    { 
        path: '/index',
        component: Index,
        alias: '/1',
        children:[
            {
                path:'',
                component:IndexMain,
            },
            {
                path: 'freeCRM',
                component: FreeCRM
            },
            {
                path: 'wxpay',
                component: Wxpay
            },
            {
                path: 'yxintroduce',
                component: YxintroducePage
            },
            {
                path: '',
                redirect: 'indexmain'
            },
        ]
        
    },
    {
        path: '/aboutus',
        component: Aboutus,
    },
    {
        path: '/prical',
        component: Prical,
    },
    {
        path: '/PAD_assist',
        component: false,
    },
    {
        path: '/',
        redirect:'/index'
    }
    
]


const router = new VueRouter({
    linkExactActiveClass: 'active',
    routes // (缩写) 相当于 routes: routes
})



export default router;