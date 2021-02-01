import Vue from 'vue'
import Error404 from '@/pages/error/Error404'
import Layout from '@/layouts/Layout'

import BlogMain from '@/pages/Index.vue'
import BlogAdd from '@/pages/blog/Add'
import BlogEdit from '@/pages/blog/Edit'
import BlogDetails from '@/pages/blog/Details'
import Newest from '@/pages/Newest.vue'
import Social from '@/pages/Social.vue'
import Project from '@/pages/Project.vue'
import Helper from '@/pages/Helper.vue'
import Readme from '@/pages/Readme.vue'


export const constantRouterMap = [
    {
        path: '/newest',
        component: Newest,
        meta: {
            type: "user",
            icon: 'el-icon-star-off',
            title: '最新动态'
        },
    },
    {
        path: '/social',
        component: Social,
        meta: {
            type: "user",
            icon: 'el-icon-mobile-phone',
            title: '社交圈'
        },
    },
    {
        path: '/',
        component: BlogMain,
        meta: {
            type: "user",
            icon: 'el-icon-edit-outline',
            title: '博客列表'
        }
    },

    {
        path: '/project',
        component: Project,
        meta: {
            type: "user",
            icon: 'el-icon-service',
            title: '开源项目'
        },
    },
    {
        path: '/helper',
        component: Helper,
        meta: {
            type: "user",
            icon: 'el-icon-printer',
            title: '使用帮助'
        },
    },
    {
        path: '/readme',
        component: Readme,
        meta: {
            type: "user",
            icon: 'el-icon-document',
            title: 'REAdME'
        },
    },
    {
        path: "/404",
        component: Error404
    },
    {
        path: '/',
        redirect: '/user/new',
    },
    {
        path: "*",
        redirect: "/404"
    },
]




// const router = new Router({
//     routes: constantRouterMap,
//     scrollBehavior(to, from, savedPosition) {
//         if (to.meta.scrollTop) {
//             return { x: 0, y: 0 }
//         }
//     }
// })

// router.beforeEach((to, from, next) => {
//     Vue.prototype.$setTitle(to.meta.title)
//     next()
// })



// export default router