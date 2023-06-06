import { createRouter, createWebHistory } from 'vue-router'
import Index from "/src/pages/Index.vue";
import RegisterType from "/src/pages/register/RegisterType.vue";
import RegisterAgree from "/src/pages/register/RegisterAgree.vue";
import RegisterLocal from "/src/pages/register/RegisterLocal.vue";
import RegisterForeigner from "/src/pages/register/RegisterForeigner.vue";
import RegisterEnd from "/src/pages/register/RegisterEnd.vue";
import RegisterEnd02 from "/src/pages/register/RegisterEnd02.vue";

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
        path: "/register/register-local",
        name: "RegisterLocal",
        component: RegisterLocal,
        meta: { title: "내국인정보입력" },
    },
    {
        path: "/register/register-foreigner",
        name: "RegisterForeigner",
        component: RegisterForeigner,
        meta: { title: "외국인정보입력" },
    },
    {
        path: "/register/register-end",
        name: "RegisterEnd",
        component: RegisterEnd,
        meta: { title: "회원가입완료" },
    },
    {
        path: "/register/register-end02",
        name: "RegisterEnd02",
        component: RegisterEnd02,
        meta: { title: "외국인 회원가입완료" },
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
