import NoticeList from "/src/pages/cscenter/NoticeList.vue";
import NoticeDetail from "/src/pages/cscenter/NoticeDetail.vue";
import AskList from "/src/pages/cscenter/AskList.vue";
import AskEnd from "/src/pages/cscenter/AskEnd.vue";
import Ask from "/src/pages/cscenter/Ask.vue";
import Faq from "/src/pages/cscenter/Faq.vue";



export default [
    {
        path: "/cscenter/",
        children: [
            { path: "notice-list", name: 'NoticeList', component: NoticeList, meta: { title: "고객센터 - 공지사항" } },
            { path: "notice-detail", name: 'NoticeDetail', component: NoticeDetail, meta: { title: "고객센터 - 공지사항 상세" } },
            { path: "ask-list", name: 'AskList', component: AskList, meta: { title: "고객센터 - 문의하기 리스트" } },
            { path: "ask-end", name: 'AskEnd', component: AskEnd, meta: { title: "고객센터 - 문의하기 완료" } },
            { path: "ask", name: 'Ask', component: Ask, meta: { title: "고객센터 - 문의하기" } },
            { path: "faq", name: 'Faq', component: Faq, meta: { title: "고객센터 - Faq" } },
        ],
    },
];
