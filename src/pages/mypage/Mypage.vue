<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">나의 프로젝트</p>
        <div class="info-tab" v-if="this.isCompany">
          <div>
            광고 중 프로젝트 <strong>{{ this.company_project_ad_cnt }}건</strong>
          </div>
          <div>
            모집 중 프로젝트 <strong>{{ this.company_project_save_cnt }}건</strong>
          </div>
          <div>
            진행 중 프로젝트 <strong>{{ this.company_project_ing_cnt }}건</strong>
          </div>
          <div>
            종료한 프로젝트 <strong>{{ this.company_project_end_cnt }}건</strong>
          </div>
        </div>
        <div class="info-tab" v-else>
          <div>
            관심 프로젝트 <strong>{{ this.project_like_cnt }}건</strong>
          </div>
          <div>
            지원 프로젝트 <strong>{{ this.project_apply_cnt }}건</strong>
          </div>
          <div>
            매칭 프로젝트 <strong>{{ this.project_match_cnt }}건</strong>
          </div>
          <div>
            종료 프로젝트 <strong>{{ this.project_end_cnt }}건</strong>
          </div>
        </div>

        <!-- 기업 - 나의 프로젝트 -->
        <!--        <CompanyProjectBox v-if="this.isCompany" class="mypage-company" />-->
        <div class="company-project-box-wrap" v-if="this.isCompany">
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
              <p :class="[item.state === this.getField('project_state','종료') ? 'title title-end' : '', 'title']">제목</p>
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
              <router-link v-if="item.other_info.applicant > 0" :to="{ name: 'MypageCompanyApplicant', query: {} }">
                <div class="btn3 btn">
                  지원자 목록
                </div>
              </router-link>
              <!-- TODO 지원자가 0명일 경우만 프로젝트 수정 가능 -->
              <router-link v-else-if="item.other_info.applicant === 0" :to="{ name: '', query: {} }">
                <div class="btn5 btn">
                  프로젝트 수정
                </div>
              </router-link>
              <!-- TODO 프로젝트가 마감되었을 때 -->
              <router-link v-else-if="item.state === this.getField('project_state','진행중')" :to="{ name: '', query: {} }">
                <div class="btn5 btn">
                  공수 설정
                </div>
              </router-link>
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

        <!-- 일반 - 나의 프로젝트 -->
        <div class="table-wrap" v-else>
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
            <tr class="t_tr" v-for="(item, idx) in this.project_list">
              <td class="t_td">{{ idx + 1 }}</td>
              <td class="t_td">{{ item.other_info.like_yn ? '관심' : '지원' }}</td>
              <td class="t_td">{{ item.other_info.member_info.company_name }}</td>
              <td class="t_td left">{{ item.name }}</td>
              <td class="t_td">{{ this.getFieldName(item.state) }}</td>
              <td class="t_td"><span class="small-btn-type-b" @click="showAlert">작성하기</span></td>
            </tr>
            </tbody>
          </table>
        </div>

        <p class="area-title">내가 쓴 글</p>
        <div class="filter-wrap">
          <span :class="this.board_type === 0 ? 'active' : ''"
                @click="this.board_type = 0; this.getBoardList();">Know-how</span>
          <span :class="this.board_type === 1 ? 'active' : ''"
                @click="this.board_type = 1; this.getBoardList();">자유홍보</span>
          <span :class="this.board_type === 2 ? 'active' : ''"
                @click="this.board_type = 2; this.getBoardList();">블랙리스트</span>
        </div>
        <div class="table-wrap">
          <table class="t_table">
            <thead>
            <tr>
              <th class="t_title" width="10%">번호</th>
              <th class="t_title">제목</th>
              <th class="t_title" width="14%" v-if="this.board_type === 0">추천/비추천</th>
              <th class="t_title" width="12%">등록일</th>
              <th class="t_title" width="12%">조회수</th>
            </tr>
            </thead>
            <tbody>
            <tr class="t_tr" v-for="(item, idx) in this.board_list">
              <td class="t_td">{{ idx + 1 }}</td>
              <td class="t_td">{{ item.title }}</td>
              <td class="t_td" v-if="this.board_type === 0">{{ item.other_info.recommend_cnt }}/{{
                  item.other_info.recommend_not_cnt }}</td>
              <td class="t_td">{{ formattedDate(item.reg_date) }}</td>
              <td class="t_td">{{ item.other_info.click_cnt }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftGnb from "/src/components/mypage/LeftGnb.vue";
import { useCommonStore, useMainStore, useProjectStore } from '@/_stores';
import CompanyProjectBox from "/src/components/mypage/company/ProjectBox.vue";

export default {
  components: {
    LeftGnb,
    CompanyProjectBox
  },
  setup() {
    const commonStore = useCommonStore()
    const mainStore = useMainStore()
    const projectStore = useProjectStore()
    return {
      commonStore,
      mainStore,
      projectStore,
    }
  },
  data() {
    return {
      board_type: 0,
      project_list: [],
      board_list: [],
      project_like_cnt: 0,
      project_apply_cnt: 0,
      project_match_cnt: 0,
      project_end_cnt: 0,
      isCompany:false,
      company_project_ad_cnt: 0,
      company_project_save_cnt: 0,
      company_project_ing_cnt: 0,
      company_project_end_cnt: 0,
      state: 0,
    }
  },
  methods: {
    getInitList() {
      if(this.isCompany){
        this.getCompanyProjectList();
      } else {
        this.getProjectList();
      }
      this.getBoardList();
    },
    getProjectList() {
      this.project_list = [];
      let params = {
        user_member: this.commonStore.member.member,
        login_member: this.commonStore.member.member,
      }
      this.mainStore.listProject(params, { page: 1, page_block: 5 }).then((resp) => {
        if (resp.data.code == 200) {
          this.project_list = resp.data.body;
          this.getProjectListCntInfo();
          //console.log(resp.data.body)
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getCompanyProjectList() {
      this.project_list = [];
      let params = {
        member: this.commonStore.member.member,
      }

      if(this.state !== 0){
        params.state = this.state;
      }

      this.mainStore.listProject(params, { page: 1, page_block: 5 }).then((resp) => {
        if (resp.data.code == 200) {
          this.project_list = resp.data.body;
          this.getCompanyProjectListCntInfo({ad_yn:true,}, 0);
          this.getCompanyProjectListCntInfo({state:this.getField('project_state','모집중'),}, 1);
          this.getCompanyProjectListCntInfo({state:this.getField('project_state','진행중'),}, 2);
          this.getCompanyProjectListCntInfo({state:this.getField('project_state','종료'),}, 3);
          //console.log(resp.data.body)
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getBoardList() {
      this.board_list = [];
      if (this.board_type === 0) {
        this.getKnowhowList();
      } else if (this.board_type === 1) {
        this.getMarketingList();
      } else if (this.board_type === 2) {
        this.getBlacklistList();
      }
    },
    getBlacklistList() {
      this.mainStore.listBlacklist({ member: this.commonStore.member.member }, { page: 1, page_block: 5 }).then((resp) => {
        if (resp.data.code == 200) {
          this.board_list = resp.data.body;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getKnowhowList() {
      this.mainStore.listKnowhow({ member: this.commonStore.member.member }, { page: 1, page_block: 5 }).then((resp) => {
        if (resp.data.code == 200) {
          this.board_list = resp.data.body;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getMarketingList() {
      this.mainStore.listMarketing({ member: this.commonStore.member.member }, { page: 1, page_block: 5 }).then((resp) => {
        if (resp.data.code == 200) {
          this.board_list = resp.data.body;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    showAlert() { // TODO 개발시 없앨것
      alert('해당 기능은 아직 개발중입니다.');
    },
    getProjectListCntInfo() {
      this.projectStore.listCntInfo({ user_member: this.commonStore.member.member }).then((resp) => {
        if (resp.data.code == 200) {
          this.project_like_cnt = resp.data.body.project_like_cnt;
          this.project_apply_cnt = resp.data.body.project_apply_cnt;
          this.project_match_cnt = resp.data.body.project_match_cnt;
          this.project_end_cnt = resp.data.body.project_end_cnt;
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
            this.company_project_ad_cnt = resp.data.body.project_cnt;
          } else if(type === 1){
            this.company_project_save_cnt = resp.data.body.project_cnt;
          } else if(type === 2){
            this.company_project_ing_cnt = resp.data.body.project_cnt;
          } else if(type === 3){
            this.company_project_end_cnt = resp.data.body.project_cnt;
          }
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
  },
  mounted() {
    this.commonStore.refresh();
    if (this.commonStore.member.type === this.getField('member_type', '기업')) {
      this.isCompany = true;
    } else {
      this.isCompany = false;
    }
    this.getInitList();
  }
}
</script>