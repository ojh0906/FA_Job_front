<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">프로젝트 관리</p>
        <div class="project-tab">
          <div @click="this.tab = 0; this.onChangePage(1);" :class="this.tab === 0 ? 'click' : ''">
            <span>전체</span> 프로젝트
            <strong>{{ this.project_all_cnt }}건</strong>
          </div>
          <div @click="this.tab = 1; this.onChangePage(1);" :class="this.tab === 1 ? 'click' : ''">
            <span>관심</span> 프로젝트
            <strong>{{ this.project_like_cnt }}건</strong>
          </div>
          <div @click="this.tab = 2; this.onChangePage(1);" :class="this.tab === 2 ? 'click' : ''">
            <span>지원한</span> 프로젝트
            <strong>{{ this.project_apply_cnt }}건</strong>
          </div>
          <div @click="this.tab = 3; this.onChangePage(1);" :class="this.tab === 3 ? 'click' : ''">
            <span>매칭된</span> 프로젝트
            <strong>{{ this.project_match_cnt }}건</strong>
          </div>
          <div @click="this.tab = 4; this.onChangePage(1);" :class="this.tab === 4 ? 'click' : ''">
            <span>완료된</span> 프로젝트
            <strong>{{ this.project_end_cnt }}건</strong>
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
                <td class="t_td td_company_info" @click="showCompany(item.other_info);">홍신</td>
                <td class="t_td left" @click="showDetail(item)">{{ item.name }}</td>
                <td class="t_td">{{ this.getFieldName(item.state) }}</td>
                <td class="t_td"><span class="small-btn-type-b" @click="showAlert">작성하기</span></td>
              </tr>
            </tbody>
          </table>
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
            <td>{{ this.company_name }}<div class="lv">{{ this.member_point }}Lv</div>
            </td>
          </tr>
          <tr>
            <td>대표자</td>
            <td>{{ this.company_owner_name }}</td>
          </tr>
          <tr>
            <td>담당자</td>
            <td>{{ this.name }}</td>
          </tr>
          <tr>
            <td>담당 연락처</td>
            <td>{{ this.company_phone_number }}</td>
          </tr>
          <tr>
            <td>기업 소재지</td>
            <td>{{ this.address }} / {{ this.address_detail }}</td>
          </tr>
          <tr>
            <td>프로젝트 완료</td>
            <td>{{ this.member_project_end }}회</td>
          </tr>
        </table>
      </div>
    </article>
  </section>
</template>


<script>
import LeftGnb from "/src/components/mypage/LeftGnb.vue";
import { useCommonStore, useProjectStore } from '@/_stores';

export default {
  components: {
    LeftGnb
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
      popupCompany: false,
      project_all_cnt: 0,
      project_like_cnt: 0,
      project_apply_cnt: 0,
      project_match_cnt: 0,
      project_end_cnt: 0,
      company_name: '',
      company_owner_name: '',
      name: '',
      company_phone_number: '',
      address: '',
      address_detail: '',
      member_point: 0,
      member_project_end: 0,
    }
  },
  methods: {
    clickSelect(event) {
      if (event.target.classList.contains('company-popup')) {
        this.popupCompany = false;
      }
    },
    getProjectList() {
      this.project_list = [];
      let params = {
        user_member:this.commonStore.member.member,
        login_member:this.commonStore.member.member,
      }

      if(this.tab === 0){
        params.user_member = this.commonStore.member.member;
      } else if(this.tab === 1){
        params.searchType = 'project_like_cnt';
      } else if(this.tab === 2){
        params.searchType = 'project_apply_cnt';
      } else if(this.tab === 3){
        params.searchType = 'project_match_cnt';
      } else if(this.tab === 4){
        params.searchType = 'project_end_cnt';
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
    getProjectListCntInfo() {
      this.projectStore.listCntInfo({user_member:this.commonStore.member.member}).then((resp) => {
        if (resp.data.code == 200) {
          this.project_all_cnt = resp.data.body.project_all_cnt;
          this.project_like_cnt = resp.data.body.project_like_cnt;
          this.project_apply_cnt = resp.data.body.project_apply_cnt;
          this.project_match_cnt = resp.data.body.project_match_cnt;
          this.project_end_cnt = resp.data.body.project_end_cnt;
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
    showCompany(other_info){
      this.company_name = other_info.member_info.company_name;
      this.company_owner_name = other_info.member_info.company_owner_name;
      this.name = other_info.member_info.name;
      this.company_phone_number = other_info.member_info.company_phone_number;
      this.address = other_info.member_info.address;
      this.address_detail = other_info.member_info.address_detail;
      this.member_point = this.commonStore.getLevel(other_info.member_point);

      let params = {
        member: other_info.member_info.member,
        state: this.getField('project_state','종료')
      }
      this.projectStore.list(params).then((resp) => {
        console.log(resp)
        if (resp.data.code == 200) {
          this.member_project_end = resp.data.total;
          this.popupCompany = true;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    showDetail(item){
      window.open(`/project/project-detail?key=${item.project}`);
    }
  },
  mounted() {
    this.onChangePage(1);
    this.getProjectListCntInfo();
  }
}

</script>
