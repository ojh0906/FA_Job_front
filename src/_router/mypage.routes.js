import Mypage from "/src/pages/mypage/Mypage.vue";
import Withdraw1 from "/src/pages/mypage/Withdraw1.vue";
import Withdraw2 from "/src/pages/mypage/Withdraw2.vue";
import Withdraw3 from "/src/pages/mypage/Withdraw3.vue";

import MypageProject from "/src/pages/mypage/Project.vue";
import MypageCompanyProject from "/src/pages/mypage/company/Project.vue";
import MypageCompanyApplicant from "/src/pages/mypage/company/Applicant.vue";

import ProfileInfo from "/src/pages/mypage/profile/Info.vue";
import ProfileEdit from "/src/pages/mypage/profile/Edit.vue";
import ProfileCheckPw from "/src/pages/mypage/profile/CheckPw.vue";
import EditPassword from "/src/pages/mypage/editpw/EditPw.vue";
import CheckPassword from "/src/pages/mypage/editpw/checkPw.vue";
import ContactList from "/src/pages/mypage/contact/List.vue";
import ContactWrite from "/src/pages/mypage/contact/Write.vue";
import ContactDetail from "/src/pages/mypage/contact/Detail.vue";
import MypageList from "/src/pages/mypage/List.vue";

import MypagePay1 from "/src/pages/mypage/payment/Step1.vue";
import MypagePay2 from "/src/pages/mypage/payment/Step2.vue";

/*피그마 기준 화면 작업입니다. -남원-*/
import Step01 from "/src/pages/mypage/payment/Step01.vue";


import ResumeManage from "/src/pages/mypage/resume/Manage.vue";
import ResumeNone from "/src/pages/mypage/resume/None.vue";
import ResumeWrite from "/src/pages/mypage/resume/Write.vue";



export default [
    {
        path: "/mypage/",
        children: [
            { path: "mypage", name: 'Mypage', component: Mypage, meta: { title: "마이페이지" } },
            { path: "withdraw1", name: 'Withdraw1', component: Withdraw1, meta: { title: "마이페이지 - 회원탈퇴" } },
            { path: "withdraw2", name: 'Withdraw2', component: Withdraw2, meta: { title: "마이페이지 - 회원탈퇴" } },
            { path: "withdraw3", name: 'Withdraw3', component: Withdraw3, meta: { title: "마이페이지 - 회원탈퇴" } },
            { path: "project", name: 'MypageProject', component: MypageProject, meta: { title: "마이페이지 - 일반 프로젝트 관리" } },
            { path: "company-project", name: 'MypageCompanyProject', component: MypageCompanyProject, meta: { title: "마이페이지 - 기업 프로젝트 관리" } },
            { path: "info", name: 'ProfileInfo', component: ProfileInfo, meta: { title: "마이페이지 - 회원정보" } },
            { path: "info-check-pw", name: 'ProfileCheckPw', component: ProfileCheckPw, meta: { title: "마이페이지 - 회원정보 수정 비밀번호 확인" } },
            { path: "info-edit", name: 'ProfileEdit', component: ProfileEdit, meta: { title: "마이페이지 - 회원정보 수정" } },
            { path: "edit-check-pw", name: 'CheckPassword', component: CheckPassword, meta: { title: "마이페이지 - 비밀번호 확인" } },
            { path: "edit-password", name: 'EditPassword', component: EditPassword, meta: { title: "마이페이지 - 비밀번호 수정" } },
            { path: "contact", name: 'ContactList', component: ContactList, meta: { title: "문의하기 - 문의내역" } },
            { path: "contact-write", name: 'ContactWrite', component: ContactWrite, meta: { title: "문의하기 - 작성" } },
            { path: "contact-detail", name: 'ContactDetail', component: ContactDetail, meta: { title: "문의하기 - 상세" } },
            { path: "list", name: 'MypageList', component: MypageList, meta: { title: "내가 쓴 글" } },
            { path: "payment-step1", name: 'MypagePay1', component: MypagePay1, meta: { title: "서비스 결제 안내" } },
            { path: "payment-step2", name: 'MypagePay2', component: MypagePay2, meta: { title: "서비스 결제" } },
            { path: "resume-none", name: 'ResumeNone', component: ResumeNone, meta: { title: "이력서 없음" } },
            { path: "resume-management", name: 'ResumeManage', component: ResumeManage, meta: { title: "이력서 관리" } },
            { path: "resume-write", name: 'ResumeWrite', component: ResumeWrite, meta: { title: "이력서 작성 및 수정" } },
            { path: "company-project/applicant-list", name: 'MypageCompanyApplicant', component: MypageCompanyApplicant, meta: { title: "마이페이지 - 기업 프로젝트 관리 - 지원자 목록" } },
            /*남원*/
            { path: "Step01", name: 'Step01', component: Step01, meta: { title: "서비스 결제 안내" } },
        ],
    },
];
