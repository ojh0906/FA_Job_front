<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">프로젝트 관리</p>
        <div class="project-tab">
          <div @click="onTab('all')" :class="this.tabAll ? 'click' : ''">
            <span>전체</span> 프로젝트
            <strong>0건</strong>
          </div>
          <div @click="onTab('interest')" :class="this.tabInterest ? 'click' : ''">
            <span>관심</span> 프로젝트
            <strong>0건</strong>
          </div>
          <div @click="onTab('apply')" :class="this.tabApply ? 'click' : ''">
            <span>지원한</span> 프로젝트
            <strong>0건</strong>
          </div>
          <div @click="onTab('match')" :class="this.tabMatch ? 'click' : ''">
            <span>매칭된</span> 프로젝트
            <strong>0건</strong>
          </div>
          <div @click="onTab('completion')" :class="this.tabCompletion ? 'click' : ''">
            <span>완료된</span> 프로젝트
            <strong>0건</strong>
          </div>
        </div>

        <!-- 프로젝트 -->
        <CompanyProjectBox />

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
</template>

<script>
import LeftGnb from "/src/components/mypage/LeftGnb.vue";
import CompanyProjectBox from "/src/components/mypage/company/ProjectBox.vue";

export default {
  components: {
    LeftGnb,
    CompanyProjectBox
  },
  data() {
    return {
      tabAll: true,
      tabInterest: false,
      tabApply: false,
      tabMatch: false,
      tabCompletion: false,
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
  }
}

</script>
