import { createRouter, createWebHistory } from 'vue-router'
import MemberRoutes from "./register.routes.js";
import CommunityRoutes from "./community.routes.js";
import CSCenterRoutes from "./cscenter.routes.js";
import ProjectRoutes from "./project.routes.js";
import MypageRoutes from "./mypage.routes.js";

import Index from "/src/pages/Index.vue";
import Login from "/src/pages/Login.vue";
import FindId from "/src/pages/FindId.vue";
import FindPw from "/src/pages/FindPw.vue";

const routes = [
    { path: "/", name: "Index", component: Index, meta: { title: "홈" } },
    { path: "/login", name: 'Login', component: Login, meta: { title: "로그인" } },
    { path: "/find-id", name: 'FindId', component: FindId, meta: { title: "아이디 찾기" } },
    { path: "/find-pw", name: 'FindPw', component: FindPw, meta: { title: "비밀번호 찾기" } },

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
