<template>
  <div id="project-page">
    <article class="search-container">
      <aside>
        <label for="search" class="search-wrap">
          <input type="text" name="search" placeholder="프로젝트 검색" />
          <img class="search-icon" src="/image/main/search.png" />
        </label>
      </aside>
    </article>

    <section id="project-list" @click="clickSelect">
      <div class="project-title-wrap">
        <p class="project-title">프로젝트</p>
        <p class="project-sub-title">등록된 프로젝트가 <span>{{ this.project_list_total }}건</span> 있습니다.</p>
      </div>
      <div class="project-content">
        <!-- 프로젝트 필터 설정 -->
        <Nav />
        <article class="project">
          <!-- 프로젝트 광고 리스트 -->
          <aside v-if="this.project_ad_list.length !== 0">
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
                  {{ filter }}
                  <img class="dropdown-img project-radio" src="/image/register/down.png" />
                </p>
                <div class="filter-list-wrap project-radio" :class="this.projectFilter ? 'open' : 'close'">
                  <div v-for="(item, index) in 4" :key="index" class="filter-list project-radio">
                    <input type="radio" :name="item" v-model="filter" :value="item"
                           class="project-radio" />
                    <label :for="item" class="project-radio">{{ item }}</label>
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
              <tr class="t_tr" v-for="(item,idx) in this.project_list">
                <router-link :to="{ name: 'ProjectDetail', query: {} }" class="table-row">
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
                      <div class="info">
                        <p class="info-title">
                          분야
                        </p>
                        <p class="info-text">
                          {{ this.getFieldName(item.area) }}
                        </p>
                      </div>
                      <div class="info">
                        <p class="info-title">
                          산업
                        </p>
                        <p class="info-text">
                          {{ this.getFieldName(item.industry) }}
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
              <a :class="this.project_pages.page == page ? 'active' : 'pointer'" v-for="page in this.project_pages.pagesList"
                 @click="onChangePage(page)">
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
import {useCommonStore,useProjectStore} from '@/_stores';

export default {
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
      filter: '',
      projectFilter: false,
      project_ad_list:[],
      project_list:[],
      project_list_total:0,
      project_pages: {
        page: 1,
        page_block: 5,
        start: 9999,
        end: 1,
        end_page: 1,
        pagesList: [],
        num_block: 5,
      },
    }
  },
  components: {
    Nav,
    ProjectBox,
  },
  methods: {
    clickSelect(event) {
      if (!event.target.classList.contains('project-radio')) {
        this.projectFilter = false;
      }
    },
    getProjectList() {
      this.project_list = [];
      // TODO {ad_yn:true} 추후에 광고한애들 불러오려면 파라미터 교체
      this.projectStore.list({},this.project_pages).then((resp) => {
        console.log(resp)
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
      this.projectStore.list({ad_yn:true}, {page:1, page_block: 4}).then((resp) => {
        if (resp.data.code == 200) {
          this.project_ad_list = resp.data.body;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    onChangePage(page){
      this.project_pages.page = page;
      this.getProjectList();
    },
  },
  mounted() {
    this.filter = '최신순';
    this.getProjectList();
    this.getProjectAdList();
  }
}
</script>

<style></style>