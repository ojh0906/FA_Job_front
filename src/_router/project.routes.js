import ProjectList from "/src/pages/project/List.vue";
import ProjectSearch from "/src/pages/project/Search.vue";
import ProjectDetail from "/src/pages/project/Detail.vue";


export default [
    {
        path: "/project/",
        children: [
            { path: "project-list", name: 'ProjectList', component: ProjectList, meta: { title: "프로젝트 - 리스트" } },
            { path: "project-search", name: 'ProjectSearch', component: ProjectSearch, meta: { title: "프로젝트 - 검색" } },
            { path: "project-detail", name: 'ProjectDetail', component: ProjectDetail, meta: { title: "프로젝트 - 상세" } },
          ],
    },
];
