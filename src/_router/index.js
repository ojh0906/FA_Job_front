import { createRouter, createWebHistory } from 'vue-router'
import Index from "/src/pages/Index.vue";
import RegisterType from "/src/pages/register/RegisterType.vue";
import RegisterAgree from "/src/pages/register/RegisterAgree.vue";
import RegisterInput from "/src/pages/register/RegisterInput.vue";
import RegisterEnd from "/src/pages/register/RegisterEnd.vue";
import KnowHow from "/src/pages/community/KnowHow.vue";
import KnowHow02 from "/src/pages/community/KnowHow02.vue";
import NoticeList from "/src/pages/notice/NoticeList.vue";
import AskList from "/src/pages/notice/AskList.vue";

/* 프로젝트 */
import ProjectList from "/src/pages/project/List.vue";
import ProjectSearch from "/src/pages/project/Search.vue";
import ProjectDetail from "/src/pages/project/Detail.vue";

const routes = [
    {
        path: "/",
        name: "Index",
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
    {
        path: "/notice/notice-list",
        name: "NoticeList",
        component: NoticeList,
        meta: { title: "공지사항 리스트" },
    },
    {
        path: "/notice/ask-list",
        name: "AskList",
        component: AskList,
        meta: { title: "문의하기 리스트" },
    },
    {
        path: "/project",
        name: "AskList",
        children: [
            {
                path: "list",
                name: 'ProjectList',
                component: ProjectList,
                meta: { title: "프로젝트 리스트" },
            },
            {
                path: "search",
                name: 'ProjectSearch',
                component: ProjectSearch,
                meta: { title: "프로젝트 검색 결과" },
            },
            {
                path: "detail",
                name: 'ProjectDetail',
                component: ProjectDetail,
                meta: { title: "프로젝트 상세" },
            },
        ]
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
