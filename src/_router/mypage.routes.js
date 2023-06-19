import Mypage from "/src/pages/mypage/Mypage.vue";
import Withdraw1 from "/src/pages/mypage/Withdraw1.vue";
import Withdraw2 from "/src/pages/mypage/Withdraw2.vue";
import Withdraw3 from "/src/pages/mypage/Withdraw3.vue";


export default [
    {
        path: "/mypage/",
        children: [
            { path: "mypage", name: 'Mypage', component: Mypage, meta: { title: "마이페이지" } },
            { path: "withdraw1", name: 'Withdraw1', component: Withdraw1, meta: { title: "마이페이지 - 회원탈퇴" } },
            { path: "withdraw2", name: 'Withdraw2', component: Withdraw2, meta: { title: "마이페이지 - 회원탈퇴" } },
            { path: "withdraw3", name: 'Withdraw3', component: Withdraw3, meta: { title: "마이페이지 - 회원탈퇴" } },
        ],
    },
];
