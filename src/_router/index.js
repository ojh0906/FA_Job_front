import { createRouter, createWebHistory } from 'vue-router'
import Index from "/src/pages/Index.vue";
import RegisterType from "/src/pages/RegisterType.vue";


const routes = [
    {
        path: "/",
        name: "index",
        component: Index,
        meta: { title: "" },
    },
    {
        path: "/register/registertype",
        name: "registertype",
        component: RegisterType,
        meta: { title: "회원가입구분" },
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
