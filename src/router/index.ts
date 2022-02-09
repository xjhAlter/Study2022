import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false })

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('~/views/home/index.vue'),
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('~/views/404/index.vue'),
        meta: {
            title: '404',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    if (to.meta?.title) {
        document.title = to.meta?.title as string
    } else {
        document.title = 'study-2022'
    }
    next()
})

router.afterEach((to, from) => {
    NProgress.done()
})

export default router
