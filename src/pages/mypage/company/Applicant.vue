<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container" v-if="!this.isComplete">
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
            <div v-for="(item, idx) in this.apply_page_list" class="apply-list-wrap">
              <!-- 개인 지원자일 경우 -->
              <tr v-if="item.type === this.getField('project_apply', '개인')">
                <!-- 이름을 클릭할 경우 이력서 팝업이 뜸 -->
                <td class="name-click" @click="showSlide(item.project_apply)">{{ item.other_info.member_info.name }}</td>
                <td>{{ item.other_info.member_info.phone_number }}</td>
                <td>{{ formattedDate(item.reg_date) }}</td>
                <td :class="item.pass ? 'pass' : 'non-pass'">
                  {{ item.pass == null ? '선택대기' : item.pass ? '합격' : '불합격' }}
                </td>
                <td class="btn-wrap">
                  <div class="btn btn3" @click="showAlert">
                    <!-- 2차 개발 -->
                    공수설정
                  </div>
                </td>
              </tr>

              <!-- 팀일 경우 -->
              <tr :class="item.team_idx" v-if="item.type === this.getField('project_apply', '팀') && item.leader"
                :style="{ background: 'rgba(' + this.team_color_list[(item.team_idx - 1) % 7] + ', 0.1)' }">
                <!-- 팀 이름을 클릭할 경우 이력서 팝업이 뜸 -->
                <td class="team-name name-click" @click="showSlide(item.project_apply)">팀 이름 : {{ item.team_name }}(3)</td>
                <td></td>
                <td></td>
                <td :class="item.pass ? 'pass' : 'non-pass'">
                  {{ item.pass == null ? '선택대기' : item.pass ? '합격' : '불합격' }}
                </td>
                <td>
                </td>
              </tr>
              <tr :class="item.team_idx" v-if="item.type === this.getField('project_apply', '팀')"
                :style="{ background: 'rgba(' + this.team_color_list[(item.team_idx - 1) % 7] + ', 0.05)' }">
                <td class="">{{ item.other_info.member_info.name }}</td>
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
          <a :class="this.apply_pages.page == page ? 'active' : 'pointer'" v-for="page in this.apply_pages.pagesList"
            @click="onChangePage(page)">
            {{ page }}
          </a>
          <a v-if="this.apply_pages.end !== this.apply_pages.end_page + 1"
            @click="onChangePage(this.apply_pages.start + this.apply_pages.num_block)">
            <img src="/image/community/foward.png" alt="앞으로가기버튼입니다.">
          </a>
        </div>

        <div class="next-btn-wrap">
          <p class="people-cnt">
            합격자/모집인원 <span class="num1">{{ this.apply_list_pass }}</span><span class="num2"> / {{ this.project.people_cnt }}명</span>
          </p>
          <div class="btn btn2" @click="downloadApplicantListExcel">
            다운로드<img src="/image/mypage/download.png" />
          </div>
          <div class="btn btn1" @click="this.completePopup = true" v-if="this.project.state === this.getField('project_state','모집중')">
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
    <swiper :modules="modules" :initialSlide="this.slide_idx" :navigation="{ nextEl: '.popup-button-next', prevEl: '.popup-button-prev' }"
      :observer="true" :observe-parents="true" :loop="true" class="company-popup">
      <swiper-slide v-for="(apply, idx) in this.apply_list.filter(i=>i.leader)" :key="idx">
        <!-- 개인 지원자 -->
        <ApplicantPopup :pass="this.apply_list_pass" :cnt="this.project.people_cnt" :apply="apply"
                        @popup="onPopup"
                        @passApplicant="passApplicant"
                        @downloadApplicantExcel="downloadApplicantExcel"
                        v-if="apply.type === this.getField('project_apply', '개인')"/>
        <!-- 팀 지원자 -->
        <TeamPopup :pass="this.apply_list_pass" :cnt="this.project.people_cnt" :apply="apply"
                   @popup="onPopup"
                   @passApplicant="passApplicant"
                   v-else/>
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
          모집중에서 진행중으로 상태 변경 됩니다.
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
    const team_color_list = [
      '255, 101, 101', // 빨
      '255, 174, 18', // 주
      '255, 219, 94', // 노
      '131, 191, 148', // 초
      '88, 123, 215', // 파
      '128, 108, 187', // 남
      '222, 142, 214', // 보
    ]
    return {
      commonStore,
      projectStore,
      modules: [Pagination, Navigation],
      team_color_list
    };
  },
  data() {
    return {
      applicantPopup: false, // 지원자 이력서 팝업
      completePopup: false, // 모집 완료 팝업
      errorPopup: false, // 미선정 경고 팝업
      isComplete: false, // 모집 완료 화면
      slide_idx: 0,
      apply_list: [],
      apply_page_list: [],
      apply_list_total: 0,
      apply_list_pass: 0,
      apply_pages: {
        page: 1,
        page_block: 5,
        start: 9999,
        end: 1,
        end_page: 1,
        pagesList: [],
        num_block: 5,
      },
      project: { name: '', people_cnt: 0 },

      swiperOptions: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.popup-button-prev',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 5000,
        },
      },
    }
  },
  methods: {
    clickSelect(event) {
      if (event.target.classList.contains('company-popup')) {
        this.applicantPopup = false;
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
      if (this.apply_list.filter(i=>i.pass == null).length === 0) {
        this.projectStore.modify(this.$route.query.key, {state:this.getField('project_state','진행중')}).then((resp) => {
          if (resp.data.code == 200) {
            this.completePopup = false;
            this.isComplete = true;
          }
        }).catch(err => {
          console.log("err", err);
        });
      } else { // 프로젝트 모집중 -> 진행중
        this.completePopup = false;
        this.errorPopup = true;
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
          this.apply_list_pass = resp.data.body.filter(i => i.pass).length;
          // 팀 index 부여, 개인은 0
          let leaderList = resp.data.body.filter(a => a.leader);
          // team_idx 설정 및 지원자 목록 정렬
          let teamList = [];
          leaderList.forEach((item, index) => {
            if (item.type === this.getField('project_apply', '팀')) {
              if (team_name !== item.team_name) {
                team_name = item.team_name;
                idx++;
              }
              item.team_idx = idx;
              const teamItem = resp.data.body.filter(a => a.team_name === item.team_name && !a.leader);
              teamList.push({ idx: idx, list: teamItem });
              item.team = teamItem;
            } else {
              item.team_idx = 0;
            }
          });
          // 팀원 끼워넣기
          teamList.forEach(team => {
            // leaderList splice index
            const idx = leaderList.findIndex(item => item.team_idx === team.idx) + 1;
            team.list.forEach((teamItem, index) => {
              teamItem.team_idx = team.idx;
              leaderList.splice(idx + index, 0, teamItem)
            });
          });
          this.apply_list = leaderList;
          this.apply_list_total = this.apply_list.length;
          this.getPageNums(this.apply_list_total, this.apply_pages);
          this.setApplyListPage();
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    setApplyListPage() {
      const start = (this.apply_pages.page - 1) * this.apply_pages.page_block;
      this.apply_page_list = this.apply_list.slice(start, start + this.apply_pages.page_block);
    },
    onChangePage(page) {
      this.apply_pages.page = page;
      this.setApplyListPage();
    },
    passApplicant(apply, pass) {
      let keyList = [];
      keyList.push(apply.project_apply);
      if(apply.type === this.getField('project_apply', '팀')){
        apply.team.forEach(i=> keyList.push(i.project_apply));
      }

      if(this.apply_list_pass + keyList.length > this.project.people_cnt){
        alert('모집인원 초과입니다.');
        return;
      }
      this.projectStore.modifyApplyPass({pass:pass, keyList:keyList}).then((resp) => {
        if (resp.data.code == 200) {
          alert("처리되었습니다.");
          this.applicantPopup = false;
          this.getApplyList();
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    downloadApplicantListExcel(){
      location.href = `${import.meta.env.VITE_API_URL}/project/${this.project.project}/apply/excel`
    },
    downloadApplicantExcel(member){
      location.href = `${import.meta.env.VITE_API_URL}/member/${member}/resume/excel`
    },
    showSlide(target_project_apply){
      this.slide_idx = this.apply_list.filter(i=>i.leader).findIndex(i=> i.project_apply === target_project_apply);
      this.applicantPopup = true;
    }
  },
  mounted() {
    this.getProject();
    this.getApplyList();
  },
}
</script>
