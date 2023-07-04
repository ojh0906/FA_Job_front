<template>
  <div id="project-page">
    <article class="search-container">
      <aside>
        <label for="search" class="search-wrap">
          <input type="text" name="search" placeholder="프로젝트 검색" v-model="this.searchKeyword"
            @keypress.enter="this.searchProject" />
          <img class="search-icon" src="/image/main/search.png" @click="this.searchProject" />
        </label>
      </aside>
    </article>

    <section id="project-list" @click="clickSelect">
      <div class="project-title-wrap" v-if="!this.search">
        <div>
          <p class="project-title">프로젝트</p>
          <p class="project-sub-title">등록된 프로젝트가 <span>{{ this.project_list_total }}건</span> 있습니다.</p>
        </div>

        <!-- 기업 회원에게만 보여야 함 -->
        <router-link :to="{ name: 'RegisterProject', query: {} }" v-if="this.commonStore.member.type === this.getField('member_type','기업')">
          <div class="btn btn1">
            프로젝트 등록
          </div>
        </router-link>
      </div>
      <div class="project-title-wrap" v-else>
        <p class="project-title">"{{ this.searchKeyword }}"로 검색된 프로젝트 <span>{{ this.project_list_total }}</span>건</p>
      </div>
      <div class="project-content">
        <!-- 프로젝트 필터 설정 -->
        <Nav @setFieldFilter="setFieldFilter" />
        <article class="project">
          <!-- 프로젝트 광고 리스트 -->
          <aside v-if="this.project_ad_list.length !== 0 && !this.search">
            <div class="ad-box-title">
              AD
            </div>
            <div class="ad-project-box">
              <ProjectBox v-for="project in this.project_ad_list" :project="project" />
            </div>
          </aside>

          <!-- 프로젝트 리스트 -->
          <aside>
            <div id="project-filter-wrap">
              <!-- 필터 -->
              <div class="filter-item">
                <p class="filter-text project-radio" @click="this.projectFilter = !this.projectFilter">
                  {{ this.order_type.name }}
                  <img class="dropdown-img project-radio" src="/image/register/down.png" />
                </p>
                <div class="filter-list-wrap project-radio" :class="this.projectFilter ? 'open' : 'close'">
                  <div v-for="(item, index) in this.order_type_list" :key="index" class="filter-list project-radio">
                    <input type="radio" :name="item" v-model="order_type" :value="item" class="project-radio" />
                    <label :for="item" class="project-radio">{{ item.name }}</label>
                  </div>
                </div>
              </div>
            </div>
            <table class="t_table" id="project-table">
              <thead>
                <th class="t_title th_01">기업명</th>
                <th class="t_title th_02 th-title">제목</th>
                <th class="t_title th_03">지역/근무지</th>
                <th class="t_title th_04">필요인원</th>
                <th class="t_title th_05">마감일</th>
              </thead>
              <tbody>
                <tr class="t_tr" v-for="(item, idx) in this.project_list">
                  <router-link :to="{ name: 'ProjectDetail', query: { key: item.project } }" class="table-row">
                    <td class="t_td">{{ item.other_info.member_info.company_name }}</td>
                    <td class="t_td title-td">
                      <p class="t-title">{{ item.name }}</p>
                      <div class="info-box">
                        <div class="info">
                          <p class="info-title">
                            기간
                          </p>
                          <p class="info-text">
                            {{ this.getFieldName(item.period_type) }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="t_td">{{ this.getFieldName(item.location1) }} {{ this.getFieldName(item.location2) }}</td>
                    <td class="t_td">{{ item.people_cnt }}</td>
                    <td class="t_td">~{{ formattedDate(item.apply_end) }}</td>
                  </router-link>
                </tr>
              </tbody>
            </table>

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
          </aside>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectBox from '/src/components/ProjectBox.vue';
import Nav from '/src/components/project/Nav.vue';
import { useCommonStore, useProjectStore } from '@/_stores';

export default {
  setup() {
    const order_type_list = [
      { idx: 0, name: '최신순', value: 'reg_date_desc' },
      { idx: 0, name: '인기순', value: 'like_desc' }
    ];
    const commonStore = useCommonStore();
    const projectStore = useProjectStore();
    return {
      order_type_list,
      commonStore,
      projectStore,
    }
  },
  data() {
    return {
      search: false,
      searchKeyword: '',
      order_type: this.order_type_list[0],
      projectFilter: false,
      project_ad_list: [],
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
      fieldList: [],
    }
  },
  components: {
    Nav,
    ProjectBox,
  },
  watch: {
    order_type: {
      handler(newValue, oldValue) {
        this.onChangePage(1);
      },
    },
  },
  methods: {
    clickSelect(event) {
      if (!event.target.classList.contains('project-radio')) {
        this.projectFilter = false;
      }
    },
    getProjectList() {
      this.project_list = [];
      let params = {
        login_member: this.commonStore.member.member,
        fieldList: this.fieldList,
        orderType: this.order_type.value,
        searchType: 'project_user_search' // 모집중인것만
      }

      if (this.searchKeyword !== '') {
        params.searchKeyword = this.searchKeyword;
      }

      this.projectStore.list(params, this.project_pages).then((resp) => {
        if (resp.data.code == 200) {
          this.project_list = resp.data.body;
          this.project_list_total = resp.data.total;
          this.getPageNums(this.project_list_total, this.project_pages);
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getProjectAdList() {
      this.project_ad_list = [];
      this.project_pages.pagesList = [];
      let params = {
        login_member: this.commonStore.member.member,
        // ad_yn:true, // TODO 광고인애들
        searchType: 'project_user_search'
      }
      this.projectStore.list(params, { page: 1, page_block: 4 }).then((resp) => {
        if (resp.data.code == 200) {
          this.project_ad_list = resp.data.body;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    onChangePage(page) {
      this.project_pages.page = page;
      this.getProjectList();
    },
    setFieldFilter(fieldList) {
      this.fieldList = fieldList;
      this.onChangePage(1);
    },
    searchProject() {
      if (this.searchKeyword === '') {
        alert('검색어를 입력해주세요.');
        return;
      }
      this.search = true;
      this.onChangePage(1);
    }
  },
  mounted() {
    this.getProjectList();
    this.getProjectAdList();
  }
}
</script>

<style></style>