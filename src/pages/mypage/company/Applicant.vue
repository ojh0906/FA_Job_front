<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container" v-if="!isComplete">
      <div class="mypage-info-container mypage-apply-container">
        <p class="area-title">{{ this.project.name }}</p>
        <p class="area-side">
          지원자 <span class="num">{{ this.apply_list_total }}</span> 명 <span class="line">|</span> 이름 및 팀명을 클릭하면 지원자/지원팀의 이력서를 볼 수 있습니다.
        </p>

        <table class="list-table">
          <thead>
            <tr>
              <td width="45%">이름 / 팀이름</td>
              <td width="15%">휴대폰 번호</td>
              <td width="15%">신청일자</td>
              <td width="12.5%">합격여부</td>
              <td width="12.5%">설정</td>
            </tr>
          </thead>
          <tbody>
            <div v-for="(item, idx) in this.apply_page_list">
              <!-- 개인 지원자일 경우 -->
              <tr v-if="item.type === this.getField('project_apply','개인')">
                <!-- TODO : 이름을 클릭할 경우 이력서 팝업이 뜸 -->
                <td class="name-click" @click="showResume(1, item.member)">{{ item.other_info.member_info.name }}</td>
                <td>{{ item.other_info.member_info.phone_number }}</td>
                <td>{{ formattedDate(item.reg_date) }}</td>
                <td :class="item.pass ? 'pass' : 'non-pass'">
                  {{ item.pass == null ? '선택대기': item.pass ? '합격' : '불합격' }}
                </td>
                <td class="btn-wrap">
                  <div class="btn btn3" @click="showAlert">
                    <!-- 2차 개발 -->
                    공수설정
                  </div>
                </td>
              </tr>

              <!-- 팀일 경우 -->
              <tr :class="item.team_idx" v-if="item.type === this.getField('project_apply','팀') && item.leader">
                <!-- TODO : 팀 이름을 클릭할 경우 이력서 팝업이 뜸 -->
                <td class="team-name" @click="showResume(2, item.team_idx)">팀 이름 : {{ item.team_name }}(3)</td>
                <td></td>
                <td></td>
                <td :class="item.pass ? 'pass' : 'non-pass'">
                  {{ item.pass == null ? '선택대기': item.pass ? '합격' : '불합격' }}
                </td>
                <td>
                </td>
              </tr>
              <tr :class="item.team_idx" v-if="item.type === this.getField('project_apply','팀')">
                <!-- TODO : 이름을 클릭할 경우 이력서 팝업이 뜸 -->
                <td class="name-click" @click="showResume(1, item.member)">{{ item.other_info.member_info.name }}</td>
                <td>{{ item.other_info.member_info.phone_number }}</td>
                <td>{{ formattedDate(item.reg_date) }}</td>
                <td></td>
                <td class="btn-wrap">
                  <div class="btn btn3" @click="showAlert">
                    <!-- 2차 개발 -->
                    공수설정
                  </div>
                </td>
              </tr>
            </div>
          </tbody>
        </table>

        <div class="pagination">
          <a v-if="this.apply_pages.start !== 1" @click="onChangePage(this.apply_pages.start - 1)">
            <img src="/image/community/back.png" alt="뒤로가기버튼입니다.">
          </a>
          <a :class="this.apply_pages.page == page ? 'active' : 'pointer'"
             v-for="page in this.apply_pages.pagesList" @click="onChangePage(page)">
            {{ page }}
          </a>
          <a v-if="this.apply_pages.end !== this.apply_pages.end_page + 1"
             @click="onChangePage(this.apply_pages.start + this.apply_pages.num_block)">
            <img src="/image/community/foward.png" alt="앞으로가기버튼입니다.">
          </a>
        </div>

        <div class="next-btn-wrap">
          <p class="people-cnt">
            합격자/모집인원 <span class="num1">{{ this.apply_list.filter(i => i.pass).length }}</span><span class="num2"> / {{ this.project.people_cnt }}명</span>
          </p>
          <div class="btn btn2" @click="">
            다운로드<img src="/image/mypage/download.png" />
          </div>
          <div class="btn btn1" @click="this.completePopup = true">
            모집완료
          </div>
        </div>
      </div>
    </div>

    <!-- 모집 완료 화면 -->
    <div class="complete-wrap" v-else>
      <div class="ask_box">
        <div class="box_r">
          <div class="register-complete">
            <div class="end_input_box">
              <div class="check"><img src="/image/register/Checkmark.png" alt="완료이미지입니다."></div>
              <p class="title02">
                <strong class="bold">모집마감이 완료되었습니다.</strong>
              </p>
              <p class="sub-title02">귀하의 성공적인 프로젝트를 기원합니다.</p>
            </div>

            <div class="next">
              <router-link :to="{ name: 'MypageCompanyProject' }" class="btn btn4">
                프로젝트 관리
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 지원자 이력서 팝업 -->
  <section id="popup" class="applicant-popup company-popup" v-if="this.applicantPopup" @click="this.clickSelect">
    <div class="company-popup">
      <swiper class="project-slider" :observer="true" :observe-parents="true" :navigation="{ nextEl: '.popup-button-next', prevEl: '.popup-button-prev' }"
        :loop="true" :modules="modules">
        <swiper-slide v-for="(apply, idx) in this.apply_list" :key="idx">
          <!-- 개인 지원자 -->
          <ApplicantPopup :idx="idx" @popup="onPopup"/>
        </swiper-slide>
      </swiper>
      <!--  navigation -->
      <aside class="popup-slide-btn-wrap">
        <div class="popup-button-prev">
          <img class="more-icon" src="/image/mypage/pre.png" />
        </div>
        <div class="popup-button-next">
          <img class="more-icon" src="/image/mypage/next.png" />
        </div>
      </aside>
    </div>
  </section>

  <!-- 팀정보 팝업 -->
  <section id="popup" class="applicant-popup company-popup" v-if="this.applicantTeamPopup" @click="this.clickSelect">
    <div class="company-popup">
      <swiper class="project-slider" :observer="true" :observe-parents="true" :navigation="{ nextEl: '.popup-button-next', prevEl: '.popup-button-prev' }"
              :loop="true" :modules="modules" :initialSlide="3">
        <swiper-slide v-for="(v, idx) in 3" :key="idx">
          <!-- 팀 지원자 -->
          <TeamPopup :applicantPopup="this.applicantPopup" @popup="onPopup" />
        </swiper-slide>
      </swiper>
      <!--  navigation -->
      <aside class="popup-slide-btn-wrap">
        <div class="popup-button-prev">
          <img class="more-icon" src="/image/mypage/pre.png" />
        </div>
        <div class="popup-button-next">
          <img class="more-icon" src="/image/mypage/next.png" />
        </div>
      </aside>
    </div>
  </section>

  <!-- 모집 완료 팝업 -->
  <section id="popup" class=" complete-popup" v-if="this.completePopup" @click="this.clickSelect">
    <div class="recruit-complete-popup">
      <div class="next-btn-wrap">
        <p class="title">
          프로젝트 모집을 완료 하시겠습니까?
        </p>
        <p class="sub-title">
          해당 프로젝트의 모집 공고 완료되어<br />
          모집중에서 마감으로 상태 변경 됩니다.
        </p>
        <div class="btn btn4" @click="this.completePopup = false">
          취소
        </div>
        <div class="btn btn1" @click="this.check">
          확인
        </div>
      </div>
    </div>
  </section>

  <!-- 미선정된 지원자가 있을 경우의 경고창 팝업 -->
  <section id="popup" class="error-popup" v-if="this.errorPopup" @click="this.clickSelect">
    <div class="recruit-complete-popup">
      <div class="next-btn-wrap">
        <p class="sub-title">
          현재 합격/ 불합격 선택이<br />
          안된 인원이 있습니다.
        </p>
        <div class="btn btn1" @click="this.errorPopup = false">
          확인
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LeftGnb from "/src/components/mypage/LeftGnb.vue";
import ApplicantPopup from "/src/components/mypage/company/ApplicantPopup.vue";
import TeamPopup from "/src/components/mypage/company/TeamPopup.vue";
import { useCommonStore, useProjectStore } from '@/_stores';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';

export default {
  components: {
    LeftGnb,
    ApplicantPopup,
    TeamPopup,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const commonStore = useCommonStore();
    const projectStore = useProjectStore();
    return {
      commonStore,
      projectStore,
      modules: [Pagination, Navigation],
    };
  },
  data() {
    return {
      applicantPopup: false, // 지원자 이력서 팝업
      applicantTeamPopup: false, // 팀정보 팝업
      completePopup: false, // 모집 완료 팝업
      errorPopup: false, // 미선정 경고 팝업
      isComplete: false, // 모집 완료 화면
      applicant_list: [],
      team_list: [],
      apply_list: [],
      apply_page_list: [],
      apply_list_total: 0,
      apply_pages: {
        page: 1,
        page_block: 5,
        start: 9999,
        end: 1,
        end_page: 1,
        pagesList: [],
        num_block: 5,
      },
      project:{name:'', people_cnt:0},
    }
  },
  methods: {
    clickSelect(event) {
      if (event.target.classList.contains('company-popup')) {
        this.applicantPopup = false;
        this.applicantTeamPopup = false;
      }
      if (event.target.classList.contains('complete-popup')) {
        this.completePopup = false;
      }
      if (event.target.classList.contains('error-popup')) {
        this.errorPopup = false;
      }
    },
    onPopup(param) {
      this.applicantPopup = param;
    },
    check() {
      if (true) {
        this.completePopup = false;
        this.errorPopup = true;
      } else {
        this.completePopup = false;
        this.isComplete = true;
      }
    },
    showAlert() { // TODO 개발시 없앨것
      alert('해당 기능은 아직 개발중입니다.');
    },
    getProject() {
      this.projectStore.getById(this.$route.query.key).then((resp) => {
        if (resp.data.code == 200) {
          this.project = resp.data.body;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getApplyList() {
      this.apply_list = [];
      this.projectStore.getApplyList(this.$route.query.key).then((resp) => {
        if (resp.data.code == 200) {
          let idx = 0;
          let team_name = '';
          // 팀 index 부여, 개인은 0
          let leaderList = resp.data.body.filter(a => a.leader);
          let teamList = [];
          leaderList.forEach((item,index) => {
            if(item.type === this.getField('project_apply','팀')){
              if(team_name !== item.team_name){
                team_name = item.team_name;
                idx ++;
              }
              item.team_idx = idx;
              const teamItem = resp.data.body.filter(a => a.team_name === item.team_name && !a.leader);
              teamList.push({idx:idx, list:teamItem});
            } else {
              item.team_idx = 0;
            }
          });
          // 팀원 끼워넣기
          teamList.forEach(team => {
            // leaderList splice index
            const idx = leaderList.findIndex(item => item.team_idx === team.idx) + 1;
            team.list.forEach((teamItem,index) => {
              leaderList.splice(idx+index,0, teamItem)
            });
          });
          this.apply_list = leaderList;
          console.log(this.apply_list);
          this.apply_list_total = this.apply_list.length;
          this.getPageNums(this.apply_list_total, this.apply_pages);
          this.setApplyListPage();
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    setApplyListPage(){
      const start = (this.apply_pages.page-1) * this.apply_pages.page_block;
      this.apply_page_list = this.apply_list.slice(start, start+this.apply_pages.page_block);
    },
    onChangePage(page) {
      this.apply_pages.page = page;
      this.setApplyListPage();
    },
    showResume(type, key){
      if(type === 1){ // 개인
        console.log(this.apply_list.findIndex(i => i.member === key))
        console.log(this.apply_list.slice(this.apply_list.findIndex(i => i.member === key)))
        this.applicantPopup = true;
      } else {

      }
    }
  },
  mounted() {
    this.getProject();
    this.getApplyList();
  }
}
</script>
