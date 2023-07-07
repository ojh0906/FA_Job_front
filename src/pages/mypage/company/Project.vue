<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">프로젝트 관리</p>
        <div class="project-tab">
          <div @click="this.tab = 0; this.onChangePage(1);" :class="this.tab === 0 ? 'click' : ''">
            전체 프로젝트 <strong>{{ this.company_project_all_cnt }}건</strong>
          </div>
          <div @click="this.tab = 1; this.onChangePage(1);" :class="this.tab === 1 ? 'click' : ''">
            광고 중 프로젝트 <strong>{{ this.company_project_ad_cnt }}건</strong>
          </div>
          <div @click="this.tab = 2; this.onChangePage(1);" :class="this.tab === 2 ? 'click' : ''">
            모집 중 프로젝트 <strong>{{ this.company_project_save_cnt }}건</strong>
          </div>
          <div @click="this.tab = 3; this.onChangePage(1);" :class="this.tab === 3 ? 'click' : ''">
            진행 중 프로젝트 <strong>{{ this.company_project_ing_cnt }}건</strong>
          </div>
          <div @click="this.tab = 4; this.onChangePage(1);" :class="this.tab === 4 ? 'click' : ''">
            종료한 프로젝트 <strong>{{ this.company_project_end_cnt }}건</strong>
          </div>
        </div>

        <!-- 프로젝트 -->
        <div class="company-project-box-wrap">
          <div v-for="(item, idx) in  this.project_list " :key="idx" id="company-project-box">
            <div class="left-box">
              <div class="state-box">
                <p class="ad-ing" v-if="item.ad_yn">광고중(2023.06.01~2023.06.30)</p> <!--TODO 광고 날짜가 있나 개발 확인-->
                <!-- 상태가 진행중 == 모집 마감 -->
                <p class="state">
                  상태
                  <span :class="[item.state === this.getField('project_state','모집중') ? 'state-ing' : item.state === item.state === this.getField('project_state','진행중') ? 'state-start' : 'state-end']">
                    {{ this.getFieldName(item.state) }}
                  </span>
                </p>
                <p class="area">
                  현장 <span>{{ this.getFieldName(item.location1) }} {{ this.getFieldName(item.location2) }}</span>
                </p>
              </div>
              <p :class="[item.state === this.getField('project_state','종료') ? 'title title-end' : '', 'title']">{{ item.name }}</p>
              <div class="btn-wrap">
                <!-- 모집 중에만 보임 -->
                <div class="btn btn3" v-if="item.state === this.getField('project_state','모집중') && !item.ad_yn" @click="showAlert">
                  광고 신청
                </div>
                <!-- TODO : 2차 개발 때 적용 - 재등록 잔여 회수 표시 (3/3), 모집중인 프로젝트리스트에 상위 노출하는 부가서비스 개념이라 상태가 모집중일때만 노출.  -->
                <div class="btn btn3" v-if="false">
                  재등록
                </div>
              </div>
            </div>
            <div class="right-box">
              <p class="applicant-wrap">
                <!-- 상태가 진행중 == 모집 마감 / 상태가 진행 중일 때 지원자가 합격된 참여인원으로 바뀜. -->
                <span :class="[item.state === this.getField('project_state','종료') ? 'applicant-color' : 'applicant']">{{ item.state === this.getField('project_state','모집중') ? '지원자' : '참여인원' }}</span>
                <span class="num" :class="item.other_info.applicant === 0 ? 'num-red' : item.state === this.getField('project_state','종료') ? 'num-thin' : 'num'">
                  {{ item.other_info.applicant }}
                </span>
              </p>

              <!-- TODO 지원자가 1명 이상일 때 - 지원자 목록 -->
              <router-link v-if="item.other_info.applicant > 0" :to="{ name: 'MypageCompanyApplicant', query: {key:item.project} }">
                <div class="btn3 btn">
                  지원자 목록
                </div>
              </router-link>
              <!-- TODO 지원자가 0명일 경우만 프로젝트 수정 가능 -->
              <router-link v-else-if="item.other_info.applicant === 0" :to="{ name: 'RegisterProject', query: {key:item.project} }">
                <div class="btn5 btn">
                  프로젝트 수정
                </div>
              </router-link>
              <!-- TODO 프로젝트가 마감되었을 때 -->
              <div class="btn5 btn" v-else-if="item.state === this.getField('project_state','진행중')" @click="showAlert">
                공수 설정
              </div>
              <!--
                            <router-link v-else-if="item.state === this.getField('project_state','진행중')" :to="{ name: '', query: {} }">
                              <div class="btn5 btn">
                                공수 설정
                              </div>
                            </router-link>
              -->
              <!-- TODO : 지원자 목록에서 공수설정이 완료되면 업무일지 결재로 바뀜. -->
              <router-link v-else-if="false" :to="{ name: '', query: {} }">
                <div class="btn5 btn">
                  업무일지 결재
                </div>
              </router-link>
              <!-- 프로젝트 종료일 때 - 업무일지 보기 -->
              <router-link v-if="item.state === this.getField('project_state','종료')" :to="{ name: '', query: {} }">
                <div class="btn4 btn">
                  업무일지 보기
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <div class="pagination">
          <a v-if="this.project_pages.start !== 1" @click="onChangePage(this.project_pages.start - 1)">
            <img src="/image/community/back.png" alt="뒤로가기버튼입니다.">
          </a>
          <a :class="this.project_pages.page == page ? 'active' : 'pointer'"
             v-for="page in this.project_pages.pagesList" @click="onChangePage(page)">
            {{ page }}
          </a>
          <a v-if="this.project_pages.end !== this.project_pages.end_page + 1"
             @click="onChangePage(this.project_pages.start + this.project_pages.num_block)">
            <img src="/image/community/foward.png" alt="앞으로가기버튼입니다.">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftGnb from "/src/components/mypage/LeftGnb.vue";
import CompanyProjectBox from "/src/components/mypage/company/ProjectBox.vue";
import { useCommonStore, useProjectStore } from '@/_stores';

export default {
  components: {
    LeftGnb,
    CompanyProjectBox
  },
  setup() {
    const commonStore = useCommonStore();
    const projectStore = useProjectStore();
    return {
      commonStore,
      projectStore,
    }
  },
  data() {
    return {
      tab: 0,
      project_list: [],
      project_list_total: 0,
      project_pages: {
        page: 1,
        page_block: 5,
        start: 9999,
        end: 1,
        end_page: 1,
        pagesList: [],
        num_block: 5,
      },
      company_project_all_cnt: 0,
      company_project_ad_cnt: 0,
      company_project_save_cnt: 0,
      company_project_ing_cnt: 0,
      company_project_end_cnt: 0,
    }
  },
  methods: {
    getProjectList() {
      this.project_list = [];
      let params = {
        member:this.commonStore.member.member,
      }

      if(this.tab === 0){
      } else if(this.tab === 1){
        params.ad_yn = true;
      } else if(this.tab === 2){
        params.state = this.getField('project_state','모집중');
      } else if(this.tab === 3){
        params.state = this.getField('project_state','진행중');
      } else if(this.tab === 4){
        params.state = this.getField('project_state','종료');
      }
      this.projectStore.list(params,this.project_pages).then((resp) => {
        if (resp.data.code == 200) {
          this.project_list = resp.data.body;
          this.project_list_total = resp.data.total;
          this.getPageNums(this.project_list_total, this.project_pages);
          //console.log(resp.data.body)
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getCompanyProjectListCntInfo(params, type) {
      params.member = this.commonStore.member.member;
      this.projectStore.listCntInfo(params).then((resp) => {
        if (resp.data.code == 200) {
          if(type === 0){
            this.company_project_all_cnt = resp.data.body.project_cnt;
          } else if(type === 1){
            this.company_project_ad_cnt = resp.data.body.project_cnt;
          } else if(type === 2){
            this.company_project_save_cnt = resp.data.body.project_cnt;
          } else if(type === 3){
            this.company_project_ing_cnt = resp.data.body.project_cnt;
          } else if(type === 3){
            this.company_project_end_cnt = resp.data.body.project_cnt;
          }
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    onChangePage(page) {
      this.project_pages.page = page;
      this.getProjectList();
    },
    showAlert() { // TODO 개발시 없앨것
      alert('해당 기능은 아직 개발중입니다.');
    },
    showDetail(item){
      window.open(`/project/project-detail?key=${item.project}`);
    }
  },
  mounted() {
    this.onChangePage(1);
    this.getCompanyProjectListCntInfo({}, 0);
    this.getCompanyProjectListCntInfo({ad_yn:true,}, 1);
    this.getCompanyProjectListCntInfo({state:this.getField('project_state','모집중'),}, 2);
    this.getCompanyProjectListCntInfo({state:this.getField('project_state','진행중'),}, 3);
    this.getCompanyProjectListCntInfo({state:this.getField('project_state','종료'),}, 4);
  }
}

</script>
