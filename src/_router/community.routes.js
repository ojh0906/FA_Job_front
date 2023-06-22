import KnowHowList from "/src/pages/community/KnowHowList.vue";
import KnowHowDetail from "/src/pages/community/KnowHowDetail.vue";
import FreePromo from "/src/pages/community/FreePromo.vue";
import FreePromoDetail from "/src/pages/community/FreePromoDetail.vue";
import FreePromoWrite from "/src/pages/community/FreePromoWrite.vue";
import BlackList from "/src/pages/blacklist/BlackList.vue";
import BlackDetail from "/src/pages/blacklist/BlackDetail.vue";
import BlackRequest from "/src/pages/blacklist/BlackRequest.vue";

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
    {
        path: "/blacklist/",
        children: [
            { path: "black-list", name: 'BlackList', component: BlackList, meta: { title: "블랙리스트" } },
            { path: "black-detail", name: 'BlackDetail', component: BlackDetail, meta: { title: "블랙리스트 상세" } },
            { path: "black-request", name: 'BlackRequest', component: BlackRequest, meta: { title: "블랙리스트 등록요청" } },          ],
    },
];
