import BlacklistList from "/src/pages/blacklist/BlackList.vue";
import BlacklistDetail from "/src/pages/blacklist/BlackDetail.vue";
import BlackRequest from "/src/pages/blacklist/BlackRequest.vue";



export default [
    {
        path: "/blacklist/",
        children: [
            { path: "blacklist-list", name: 'BlacklistList', component: BlacklistList, meta: { title: "블랙리스트 - 리스트" } },
            { path: "blacklist-detail", name: 'BlacklistDetail', component: BlacklistList, meta: { title: "블랙리스트 - 상세" } },
            { path: "black-request", name: 'BlackRequest', component: BlackRequest, meta: { title: "블랙리스트 등록요청" } }, 
        ],
    },
];
