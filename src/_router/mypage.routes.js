import Mypage from "/src/pages/mypage/Mypage.vue";
import Withdraw1 from "/src/pages/mypage/Withdraw1.vue";
import Withdraw2 from "/src/pages/mypage/Withdraw2.vue";
import Withdraw3 from "/src/pages/mypage/Withdraw3.vue";
import MypageProject from "/src/pages/mypage/Project.vue";
import ProfileInfo from "/src/pages/mypage/profile/Info.vue";
import ProfileEdit from "/src/pages/mypage/profile/Edit.vue";
import ProfileCheckPw from "/src/pages/mypage/profile/CheckPw.vue";
import EditPassword from "/src/pages/mypage/editpw/EditPw.vue";
import checkPassword from "/src/pages/mypage/editpw/checkPw.vue";

export default [
    {
        path: "/mypage/",
        children: [
            { path: "mypage", name: 'Mypage', component: Mypage, meta: { title: "마이페이지" } },
            { path: "withdraw1", name: 'Withdraw1', component: Withdraw1, meta: { title: "마이페이지 - 회원탈퇴" } },
            { path: "withdraw2", name: 'Withdraw2', component: Withdraw2, meta: { title: "마이페이지 - 회원탈퇴" } },
            { path: "withdraw3", name: 'Withdraw3', component: Withdraw3, meta: { title: "마이페이지 - 회원탈퇴" } },
            { path: "project", name: 'MypageProject', component: MypageProject, meta: { title: "마이페이지 - 프로젝트 관리" } },
            { path: "info", name: 'ProfileInfo', component: ProfileInfo, meta: { title: "마이페이지 - 회원정보" } },
            { path: "info-check-pw", name: 'ProfileCheckPw', component: ProfileCheckPw, meta: { title: "마이페이지 - 회원정보 수정 비밀번호 확인" } },
            { path: "info-edit", name: 'ProfileEdit', component: ProfileEdit, meta: { title: "마이페이지 - 회원정보 수정" } },
            { path: "edit-check-pw", name: 'checkPassword', component: checkPassword, meta: { title: "마이페이지 - 비밀번호 확인" } },
            { path: "edit-password", name: 'EditPassword', component: EditPassword, meta: { title: "마이페이지 - 비밀번호 수정" } },
        ],
    },
];
