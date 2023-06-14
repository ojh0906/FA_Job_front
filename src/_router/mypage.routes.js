import Mypage from "/src/pages/mypage/Mypage.vue";


export default [
    {
        path: "/mypage/",
        children: [
            { path: "mypage", name: 'Mypage', component: Mypage, meta: { title: "마이페이지" } },
        ],
    },
];
