import KnowHowList from "/src/pages/community/KnowHowList.vue";
import KnowHowDetail from "/src/pages/community/KnowHowDetail.vue";
import FreePromo from "/src/pages/community/FreePromo.vue";
import FreePromoDetail from "/src/pages/community/FreePromoDetail.vue";
import FreePromoWrite from "/src/pages/community/FreePromoWrite.vue";

export default [
    {
        path: "/community/",
        children: [
            { path: "knowhow-list", name: 'KnowHowList', component: KnowHowList, meta: { title: "커뮤니티 - 노히우" } },
            { path: "knowhow-detail", name: 'KnowHowDetail', component: KnowHowDetail, meta: { title: "커뮤니티 - 노히우 상세" } },
            { path: "free-promo", name: 'FreePromo', component: FreePromo, meta: { title: "커뮤니티 - 자유홍보" } },
            { path: "free-promo-detail", name: 'FreePromoDetail', component: FreePromoDetail, meta: { title: "커뮤니티 - 자유홍보 상세" } },
            { path: "free-promo-write", name: 'FreePromoWrite', component: FreePromoWrite, meta: { title: "커뮤니티 - 자유홍보 글쓰기" } },
        ],
    },

];
