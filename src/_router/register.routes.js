import RegisterType from "/src/pages/register/RegisterType.vue";
import RegisterAgree from "/src/pages/register/RegisterAgree.vue";
import RegisterInput from "/src/pages/register/RegisterInput.vue";
import RegisterEnd from "/src/pages/register/RegisterEnd.vue";

export default [
    {
        path: "/register/",
        children: [
            { path: "type", name: 'RegisterType', component: RegisterType, meta: { title: "회원가입 - 구분" } },
            { path: "agree", name: 'RegisterAgree', component: RegisterAgree, meta: { title: "회원가입 - 약관동의" } },
            { path: "input", name: 'RegisterInput', component: RegisterInput, meta: { title: "회원가입 - 정보입력" } },
            { path: "end", name: 'RegisterEnd', component: RegisterEnd, meta: { title: "회원가입 - 완료" } },
        ],
    },
];
