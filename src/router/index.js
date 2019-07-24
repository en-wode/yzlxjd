import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import contact from '@/components/contact'
import productlist from '@/components/product_list'
import newslist from '@/components/news_list'
import anli from '@/components/anli'
import anlidetail from '@/components/anlidetail'
import news from '@/components/news'
import product from '@/components/product'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        },
        {
            path: '/productlist',
            name: 'productlist',
            component: productlist
        },
        {
            path: '/newslist',
            name: 'newslist',
            component: newslist
        },
        {
            path: '/news',
            name: 'news',
            component: news
        },
        {
            path: '/anlidetail',
            name: 'anlidetail',
            component: anlidetail
        },
        {
            path: '/product',
            name: 'product',
            component: product
        },
        {
            path: '/anli',
            name: 'anli',
            component: anli
        }
    ]
})
