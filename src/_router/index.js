import { createRouter, createWebHistory } from 'vue-router'
import Index from "/src/pages/Index.vue";


const routes = [
    {
        path: "/",
        name: "index",
        component: Index,
        meta: { title: "" },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router
