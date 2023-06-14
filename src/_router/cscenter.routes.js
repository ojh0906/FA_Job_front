import NoticeList from "/src/pages/notice/NoticeList.vue";
import AskList from "/src/pages/notice/AskList.vue";


export default [
    {
        path: "/cscenter/",
        children: [
            { path: "notice-list", name: 'NoticeList', component: NoticeList, meta: { title: "고객센터 - 공지사항" } },
            { path: "ask-list", name: 'AskList', component: AskList, meta: { title: "고객센터 - 문의하기" } },
          ],
    },
];
