import BlacklistList from "/src/pages/blacklist/BlackList.vue";
import BlacklistDetail from "/src/pages/blacklist/BlackDetail.vue";

export default [
    {
        path: "/blacklist/",
        children: [
            { path: "blacklist-list", name: 'BlacklistList', component: BlacklistList, meta: { title: "블랙리스트 - 리스트" } },
            { path: "blacklist-detail", name: 'BlacklistDetail', component: BlacklistList, meta: { title: "블랙리스트 - 상세" } },
        ],
    },
];
