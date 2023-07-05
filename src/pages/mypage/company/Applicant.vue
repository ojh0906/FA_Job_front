<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container" v-if="!isComplete">
      <div class="mypage-info-container mypage-apply-container">
        <p class="area-title">제목</p>
        <p class="area-side">
          지원자 <span class="num">4</span> 명 <span class="line">|</span> 이름 및 팀명을 클릭하면 지원자/지원팀의 이력서를 볼 수 있습니다.
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
            <!-- 개인 지원자일 경우 -->
            <tr v-for="(item, idx) in 5" :key="idx">
              <!-- TODO : 이름을 클릭할 경우 이력서 팝업이 뜸 -->
              <td class="name-click" @click="this.applicantPopup = true">둘리</td>
              <td>010-1234-1244</td>
              <td>2023</td>
              <td :class="true ? 'pass' : false ? 'non-pass' : ''">
                {{ true ? '합격' : false ? '불합격' : '선택대기' }}
              </td>
              <td class="btn-wrap">
                <div class="btn btn3">
                  <!-- 2차 개발 -->
                  공수설정
                </div>
              </td>
            </tr>

            <!-- 팀일 경우 -->
            <div class="team-color-wrap">
              <div class="team-wrap" v-for="(v, idx) in 2" :key="idx">
                <tr>
                  <!-- TODO : 팀 이름을 클릭할 경우 이력서 팝업이 뜸 -->
                  <td class="team-name" @click="this.applicantPopup = true">팀 이름 : 둘리팀(3)</td>
                  <td></td>
                  <td></td>
                  <td :class="true ? 'pass' : false ? 'non-pass' : ''">
                    {{ true ? '합격' : false ? '불합격' : '선택대기' }}
                  </td>
                  <td>
                  </td>
                </tr>
                <tr v-for="(item, idx) in 3" :key="idx" :class="true ? 'pass' : 'non-pass'">
                  <td>고길동</td>
                  <td>010-1234-1244</td>
                  <td>2023</td>
                  <td></td>
                  <td class="btn-wrap">
                    <div class="btn btn3">
                      <!-- 2차 개발 -->
                      공수설정
                    </div>
                  </td>
                </tr>
              </div>
            </div>
          </tbody>
        </table>

        <div class="pagination">
          <a href="#"><img src="/image/community/back.png" alt="뒤로가기버튼입니다."></a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#"><img src="/image/community/foward.png" alt="앞으로가기버튼입니다."></a>
        </div>

        <div class="next-btn-wrap">
          <p class="people-cnt">
            합격자/모집인원 <span class="num1">8</span><span class="num2"> / 10명</span>
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
      <swiper class="project-slider" :navigation="{ nextEl: '.popup-button-next', prevEl: '.popup-button-prev' }"
        :loop="true" :modules="modules">
        <swiper-slide v-for="(v, idx) in 2" :key="idx">
          <!-- 개인 지원자 -->
          <ApplicantPopup :applicantPopup="this.applicantPopup" @popup="onPopup" v-if="true" />
          <!-- 팀 지원자 -->
          <TeamPopup :applicantPopup="this.applicantPopup" @popup="onPopup" v-else />
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
    return {
      modules: [Pagination, Navigation],
    };
  },
  data() {
    return {
      applicantPopup: false, // 지원자 이력서 팝업
      completePopup: false, // 모집 완료 팝업
      errorPopup: false, // 미선정 경고 팝업
      isComplete: false, // 모집 완료 화면
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
      if (true) {
        this.completePopup = false;
        this.errorPopup = true;
      } else {
        this.completePopup = false;
        this.isComplete = true;
      }
    }
  }
}

</script>
