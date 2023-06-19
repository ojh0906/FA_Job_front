import { createRouter, createWebHistory } from 'vue-router'
import MemberRoutes from "./register.routes.js";
import CommunityRoutes from "./community.routes.js";
import CSCenterRoutes from "./cscenter.routes.js";
import ProjectRoutes from "./project.routes.js";
import MypageRoutes from "./mypage.routes.js";


import Index from "/src/pages/Index.vue";




const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
        meta: { title: "" },
    },

    ...MemberRoutes,
    ...CommunityRoutes,
    ...CSCenterRoutes,
    ...ProjectRoutes,
    ...MypageRoutes,
    { path: "/:pathMatch(.*)*", redirect: "/" },
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
