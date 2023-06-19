<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">프로젝트 관리</p>
        <div class="project-tab">
          <div @click="onTab('all')" :class="this.tabAll ? 'click' : ''">
            <span>전체</span> 프로젝트
            <strong>24건</strong>
          </div>
          <div @click="onTab('interest')" :class="this.tabInterest ? 'click' : ''">
            <span>관심</span> 프로젝트
            <strong>24건</strong>
          </div>
          <div @click="onTab('apply')" :class="this.tabApply ? 'click' : ''">
            <span>지원한</span> 프로젝트
            <strong>24건</strong>
          </div>
          <div @click="onTab('match')" :class="this.tabMatch ? 'click' : ''">
            <span>매칭된</span> 프로젝트
            <strong>24건</strong>
          </div>
          <div @click="onTab('completion')" :class="this.tabCompletion ? 'click' : ''">
            <span>완료된</span> 프로젝트
            <strong>24건</strong>
          </div>
        </div>
        <div class="table-wrap">
          <table class="t_table">
            <thead>
              <tr>
                <th class="t_title" width="10%">번호</th>
                <th class="t_title" width="10%">분류</th>
                <th class="t_title" width="12%">기업명</th>
                <th class="t_title">제목</th>
                <th class="t_title" width="10%">상태</th>
                <th class="t_title" width="15%">업무일지</th>
              </tr>
            </thead>
            <tbody>
              <tr class="t_tr" v-for="v in 5">
                <td class="t_td">5</td>
                <td class="t_td">관심</td>
                <td class="t_td td_company_info" @click="this.popupCompany = true">홍신</td>
                <td class="t_td left">프로젝트 제목</td>
                <td class="t_td">대기 중</td>
                <td class="t_td"><span class="small-btn-type-b">작성하기</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pagination">
          <a href="#"><img src="/image/community/back.png" alt="뒤로가기버튼입니다."></a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#"><img src="/image/community/foward.png" alt="앞으로가기버튼입니다."></a>
        </div>
      </div>
    </div>
  </div>


  <!-- 회사 정보 팝업 -->
  <section id="popup" class="company-popup" v-if="this.popupCompany" @click="this.clickSelect">
    <article class="popup-box-wrap popup-table-wrap">
      <div class="popup-title">
        <p>
          회사이름
        </p>
        <img class="close-icon" @click="this.popupCompany = false" src="/image/project/close2.png" />
      </div>
      <div class="popup-box">
        <table class="table-color-row">
          <tr>
            <td>기업명</td>
            <td>홍길동<div class="lv">15Lv</div>
            </td>
          </tr>
          <tr>
            <td>대표자</td>
            <td>요리보고</td>
          </tr>
          <tr>
            <td>담당자</td>
            <td>고길동</td>
          </tr>
          <tr>
            <td>담당 연락처</td>
            <td>010-1111-1111</td>
          </tr>
          <tr>
            <td>기업 소재지</td>
            <td>둘리동</td>
          </tr>
          <tr>
            <td>프로젝트 완료</td>
            <td>1회</td>
          </tr>
        </table>
      </div>
    </article>
  </section>
</template>


<script>
import LeftGnb from "/src/components/mypage/LeftGnb.vue";

export default {
  components: {
    LeftGnb
  },
  data() {
    return {
      tabAll: true,
      tabInterest: false,
      tabApply: false,
      tabMatch: false,
      tabCompletion: false,
      popupCompany: false,
    }
  },
  methods: {
    onTab(selectTab) {
      if (selectTab == 'all') {
        this.tabAll = true;
        this.tabInterest = false;
        this.tabApply = false;
        this.tabMatch = false;
        this.tabCompletion = false;
      } else if (selectTab == 'interest') {
        this.tabAll = false;
        this.tabInterest = true;
        this.tabApply = false;
        this.tabMatch = false;
        this.tabCompletion = false;
      }
      else if (selectTab == 'apply') {
        this.tabAll = false;
        this.tabInterest = false;
        this.tabApply = true;
        this.tabMatch = false;
        this.tabCompletion = false;
      }
      else if (selectTab == 'match') {
        this.tabAll = false;
        this.tabInterest = false;
        this.tabApply = false;
        this.tabMatch = true;
        this.tabCompletion = false;
      }
      else if (selectTab == 'completion') {
        this.tabAll = false;
        this.tabInterest = false;
        this.tabApply = false;
        this.tabMatch = false;
        this.tabCompletion = true;
      }
    },
    clickSelect(event) {
      if (event.target.classList.contains('company-popup')) {
        this.popupCompany = false;
      }
    },
  }
}

</script>
