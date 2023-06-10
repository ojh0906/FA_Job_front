import { createRouter, createWebHistory } from 'vue-router'
import Index from "/src/pages/Index.vue";
import RegisterType from "/src/pages/register/RegisterType.vue";
import RegisterAgree from "/src/pages/register/RegisterAgree.vue";
import RegisterInput from "/src/pages/register/RegisterInput.vue";
import RegisterEnd from "/src/pages/register/RegisterEnd.vue";
import KnowHow from "/src/pages/community/KnowHow.vue";
import KnowHow02 from "/src/pages/community/KnowHow02.vue";


const routes = [
    {
        path: "/",
        name: "index",
        component: Index,
        meta: { title: "" },
    },
    {
        path: "/register/register-type",
        name: "RegisterType",
        component: RegisterType,
        meta: { title: "회원가입구분" },
    },
    {
        path: "/register/register-agree",
        name: "RegisterAgree",
        component: RegisterAgree,
        meta: { title: "약관동의" },
    },
    {
        path: "/register/input",
        name: "RegisterInput",
        component: RegisterInput,
        meta: { title: "정보입력" },
    },
    {
        path: "/register/register-end",
        name: "RegisterEnd",
        component: RegisterEnd,
        meta: { title: "회원가입완료" },
    },
    {
        path: "/community/know-how",
        name: "KnowHow",
        component: KnowHow,
        meta: { title: "커뮤니티 노하우" },
    },
    {
        path: "/community/know-how02",
        name: "KnowHow02",
        component: KnowHow02,
        meta: { title: "커뮤니티 노하우 상세" },
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
