import { createRouter, createWebHistory } from 'vue-router'
import CommonRoutes from "./common.routes.js";
import MemberRoutes from "./register.routes.js";
import CommunityRoutes from "./community.routes.js";
import CSCenterRoutes from "./cscenter.routes.js";
import ProjectRoutes from "./project.routes.js";
import MypageRoutes from "./mypage.routes.js";
import BlackRoutes from "./blacklist.routes.js";
import {useCommonStore} from '@/_stores';
import dayjs from 'dayjs';

const routes = [
    ...CommonRoutes,
    ...MemberRoutes,
    ...CommunityRoutes,
    ...CSCenterRoutes,
    ...ProjectRoutes,
    ...MypageRoutes,
    ...BlackRoutes,
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

router.beforeEach(async (to) => {
    // console.log(to)
    // // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ["/", // 홈
        "/login", "/find-id", "/find-pw", "/register/type", "/register/agree", "/register/input", "/register/end"  // 로그인, 회원가입
    ];
    const authRequired = !publicPages.includes(to.path);
    const commonStore = useCommonStore();
    // console.log("before router auth", authStore.member, authStore.isAuthenticated, authStore.auth_token);
    if (authRequired && !commonStore.isAuthenticated) {
        commonStore.setReturnUrl(to.fullPath);
        alert("로그인이 필요합니다.");
        return "/login";
    }
});

// save history stack
router.afterEach((to, from, failure) => {
    const title = to.meta.title
    if (title) {
        document.title = title
    }
    const commonStore = useCommonStore();
    const isExpiryAuth = dayjs().isAfter(commonStore.expiryTime);

    if (isExpiryAuth) {
        alert("로그인이 만료되었습니다.");
        commonStore.logout();
    }
});
