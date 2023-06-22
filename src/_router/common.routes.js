import Index from "/src/pages/Index.vue";
import Login from "/src/pages/Login.vue";
import FindId from "/src/pages/FindId.vue";
import FindPw from "/src/pages/FindPw.vue";

export default [
    { path: "/", name: "Index", component: Index, meta: { title: "홈" } },
    { path: "/login", name: 'Login', component: Login, meta: { title: "로그인" } },
    { path: "/find-id", name: 'FindId', component: FindId, meta: { title: "아이디 찾기" } },
    { path: "/find-pw", name: 'FindPw', component: FindPw, meta: { title: "비밀번호 찾기" } },
];
