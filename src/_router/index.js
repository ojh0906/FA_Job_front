import { createRouter, createWebHistory } from 'vue-router'
import MemberRoutes from "./register.routes";
import CommunityRoutes from "./community.routes";
import CScenterRoutes from "./community.routes";
import ProjectRoutes from "./project.routes";


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
    ...CScenterRoutes,
    ...ProjectRoutes,
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
