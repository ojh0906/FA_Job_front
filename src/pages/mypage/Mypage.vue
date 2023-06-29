<template>
  <div id="mypage">
    <LeftGnb/>
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">나의 프로젝트</p>
        <div class="info-tab">
          <div>
            관심 프로젝트 <strong>{{ this.commonStore.member.other_info.project_like_cnt }}건</strong>
          </div>
          <div>
            지원 프로젝트 <strong>{{ this.commonStore.member.other_info.project_apply_cnt }}건</strong>
          </div>
          <div>
            매칭 프로젝트 <strong>{{ this.commonStore.member.other_info.project_match_cnt }}건</strong>
          </div>
          <div>
            종료 프로젝트 <strong>{{ this.commonStore.member.other_info.project_end_cnt }}건</strong>
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
            <tr class="t_tr" v-for="(item,idx) in this.project_list">
              <td class="t_td">{{ idx+1 }}</td>
              <td class="t_td">{{ item.other_info.like_yn ? '관심':'지원' }}</td>
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
          <span :class="this.board_type === 0 ? 'active':''" @click="this.board_type = 0; this.getBoardList();">Know-how</span>
          <span :class="this.board_type === 1 ? 'active':''" @click="this.board_type = 1; this.getBoardList();">자유홍보</span>
          <span :class="this.board_type === 2 ? 'active':''" @click="this.board_type = 2; this.getBoardList();">블랙리스트</span>
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
              <td class="t_td" v-if="this.board_type === 0">{{ item.other_info.recommend_cnt }}/{{ item.other_info.recommend_not_cnt }}</td>
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
import { useCommonStore,useMainStore } from '@/_stores';

export default {
  components: {
    LeftGnb
  },
  setup() {
    const commonStore = useCommonStore()
    const mainStore = useMainStore()
    return {
      commonStore,
      mainStore,
    }
  },
  data() {
    return {
      board_type: 0,
      project_list:[],
      board_list:[],
    }
  },
  methods: {
    getInitList(){
      this.getProjectList();
      this.getBoardList();
    },
    getProjectList() {
      this.project_list = [];
      this.mainStore.listProject({my_member:this.commonStore.member.member},{}).then((resp) => {
        if (resp.data.code == 200) {
          this.project_list = resp.data.body;
          //console.log(resp.data.body)
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getBoardList(){
      this.board_list = [];
      if(this.board_type === 0){
        this.getKnowhowList();
      } else if(this.board_type === 1){
        this.getMarketingList();
      } else if(this.board_type === 2){
        this.getBlacklistList();
      }
    },
    getBlacklistList() {
      this.mainStore.listBlacklist({member:this.commonStore.member.member},{page:1, page_block:3}).then((resp) => {
        if (resp.data.code == 200) {
          this.board_list = resp.data.body;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getKnowhowList() {
      this.mainStore.listKnowhow({member:this.commonStore.member.member},{page:1, page_block:3}).then((resp) => {
        if (resp.data.code == 200) {
          this.board_list = resp.data.body;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getMarketingList() {
      this.mainStore.listMarketing({member:this.commonStore.member.member},{page:1, page_block:3}).then((resp) => {
        if (resp.data.code == 200) {
          this.board_list = resp.data.body;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    showAlert() { // TODO 개발시 없앨것
      alert('해당 기능은 아직 개발중입니다.');
    }
  },
  mounted() {
    this.commonStore.refresh();
    this.getInitList();
  }
}
</script>