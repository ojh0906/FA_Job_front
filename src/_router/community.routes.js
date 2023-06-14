import KnowHowList from "/src/pages/community/KnowHowList.vue";
import KnowHowDetail from "/src/pages/community/KnowHowDetail.vue";

export default [
    {
        path: "/community/",
        children: [
            { path: "knowhow-list", name: 'KnowHowList', component: KnowHowList, meta: { title: "커뮤니티 - 노히우" } },
            { path: "knowhow-detail", name: 'KnowHowDetail', component: KnowHowDetail, meta: { title: "커뮤니티 - 노히우 상세" } },
          ],
    },
];
