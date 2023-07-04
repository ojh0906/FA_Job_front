import ProjectList from "/src/pages/project/List.vue";
import ProjectSearch from "/src/pages/project/Search.vue";
import ProjectDetail from "/src/pages/project/Detail.vue";
import ProjectApplyTeam from "/src/pages/project/apply/Team.vue";
import ProjectApplyCompletion from "/src/pages/project/apply/Completion.vue";
import RegisterProject from "/src/pages/project/register/Project.vue";

export default [
    {
        path: "/project/",
        children: [
            { path: "project-list", name: 'ProjectList', component: ProjectList, meta: { title: "프로젝트 - 리스트" } },
            { path: "project-search", name: 'ProjectSearch', component: ProjectSearch, meta: { title: "프로젝트 - 검색" } },
            { path: "project-detail", name: 'ProjectDetail', component: ProjectDetail, meta: { title: "프로젝트 - 상세" } },
            { path: "project-apply/team", name: 'ProjectApplyTeam', component: ProjectApplyTeam, meta: { title: "프로젝트 - 팀 지원하기" } },
            { path: "project-apply/completion", name: 'ProjectApplyCompletion', component: ProjectApplyCompletion, meta: { title: "프로젝트 - 팀 지원하기" } },
            { path: "project-register", name: 'RegisterProject', component: RegisterProject, meta: { title: "프로젝트 - 등록" } },
        ],
    },
];
