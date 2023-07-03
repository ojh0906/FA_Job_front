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

    <div id="project-detail">
      <div class="title-box">
        <p class="title-box-title">사람 구함</p>
        <div class="info-box-wrap">
          <div class="info-box">
            <div class="info">
              <p class="title">모집기간</p>
              <p class="text">{{ formattedDate(this.project.apply_start) }}~{{ formattedDate(this.project.apply_end) }}</p>
            </div>
            <div class="info">
              <p class="title">지역</p>
              <p class="text">{{ getFieldName(this.project.location1) }} {{ getFieldName(this.project.location2) }}</p>
            </div>
            <div class="info">
              <p class="title">업체명</p>
              <p class="text">{{ this.project.other_info.member_info.company_name }}</p>
            </div>
          </div>
          <div class="date">
            <p class="title">등록일자</p>
            <p class="text">{{ formattedDate(this.project.reg_date) }}</p>
            <div class="line">|</div>
            <p class="title">최근 7일 조회</p>
            <p class="text">{{ this.project.other_info.click_cnt }}회</p>
          </div>
        </div>
      </div>

      <article class="project-detail-content">
        <div class="project-content">
          <p class="summary-title">요약</p>
          <table class="project-detail-table">
            <tr>
              <td class="td-title">분야</td>
              <td>{{ getFieldName(this.project.area) }}</td>
              <td class="td-title">산업</td>
              <td>{{ getFieldName(this.project.industry) }}</td>
            </tr>
            <tr>
              <td class="td-title">근무시간</td>
              <td>{{ this.project.work_time_start }} ~ {{ this.project.work_time_end }}</td>
              <td class="td-title">필요 인원</td>
              <td>{{ this.project.people_cnt }}</td>
            </tr>
            <tr>
              <td class="td-title">근무지 위치</td>
              <td>{{ this.project.work_location }}</td>
              <td class="td-title">잔업수당</td>
              <td>{{ this.project.extra_work_price }}</td>
            </tr>
            <tr>
              <td class="td-title">설비명</td>
              <td>{{ this.project.equipment }}</td>
              <td class="td-title">식사제공여부</td>
              <td>{{ this.project.meal_yn ? '제공 O':'제공 X' }}</td>
            </tr>
            <tr>
              <td class="td-title">공사기간</td>
              <td v-if="this.project.period_type !== getField('project_period_type','일정선택')">{{ getFieldName(this.project.period_type) }}</td>
              <td v-else>{{ this.project.period_start }} ~ {{ this.project.period_end }}</td>
              <td class="td-title">숙소제공여부</td>
              <td>{{ this.project.lodge_yn ? '제공 O':'제공 X' }}</td>
            </tr>
            <tr>
              <td class="td-title" rowspan="2">근무스킬</td>
              <td rowspan="2">
                <p v-if="this.project.skill1 !== 0">초보 / {{ addComma(this.project.skill1) }}원</p>
                <p v-if="this.project.skill2 !== 0">준공 / {{ addComma(this.project.skill2) }}원</p>
                <p v-if="this.project.skill3 !== 0">준기공 / {{ addComma(this.project.skill3) }}원</p>
                <p v-if="this.project.skill4 !== 0">기공 / {{ addComma(this.project.skill4) }}원</p>
              </td>
              <td class="td-title">결제일</td>
              <td>{{ this.project.payment_day }}일</td>
            </tr>
            <tr>
              <td class="td-title">팀 참여 가능 여부</td>
              <td>{{ this.project.lodge_yn ? '가능':'불가능' }}</td>
            </tr>
          </table>

          <p class="summary-title content-title">업무내용</p>
          <div class="content-text" v-html="this.project.detail"></div>
        </div>
        <aside class="project-etc">
          <div>

            <p class="like-text"><img class="text-like-icon" src='/image/project/like.png' /> {{ this.project.other_info.like_cnt }}명이 관심을 갖고 있습니다.
            </p>
            <div class="like-project-btn btn btn4" @click="saveLike">
              <img class="like-icon" :src="this.like_yn ? '/image/project/like.png' : '/image/project/unlike.png'" />
              {{ this.like_yn ? '관심 프로젝트 제거':'관심 프로젝트 추가' }}
            </div>
            <div class="share-btn btn btn2">
              <img class="share-icon" src='/image/project/share.png' />
              공유하기
            </div>
          </div>

          <div class="apply-btn-wrap">
            <div class="apply-btn btn btn1">
              <img class="share-icon" src='/image/project/person.png' />
              개인 지원하기
            </div>
            <router-link :to="{ name: 'ProjectApplyTeam', query: {} }" v-if="this.project.team_yn">
              <div class="team-apply-btn btn btn1">
                <img class="share-icon" src='/image/project/team.png' />
                팀 지원하기
              </div>
            </router-link>
          </div>
        </aside>
      </article>
    </div>
  </div>

  <!-- 모집 중인 다른 프로젝트 -->
  <div id="main-container" v-if="this.project_list.length !== 0">
    <article class="project-slide-container project-container max">
      <div class="title-wrap">
        <p class="title">
          모집중인 다른 프로젝트
        </p>
      </div>
      <aside class="project-box-container">
        <swiper :navigation="{ nextEl: '.project-button-next', prevEl: '.project-button-prev' }" :loop="true"
                :modules="modules" class="project-slider">
          <swiper-slide>
            <ProjectBox v-for="project in this.project_list.slice(0,2)" :project="project" />
          </swiper-slide>
          <swiper-slide v-if="this.project_list.length > 2">
            <ProjectBox v-for="project in this.project_list.slice(2,4)" :project="project" />
          </swiper-slide>
        </swiper>
        <!--  navigation -->
        <aside class="project-slide-btn-wrap">
          <div class="project-button-prev">
            <img class="more-icon" src="/image/main/next.png" />
          </div>
          <div class="project-button-next">
            <img class="more-icon" src="/image/main/next.png" />
          </div>
        </aside>
      </aside>
    </article>
  </div>
</template>

<script>
import ProjectBox from '/src/components/ProjectBox.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';
import {useCommonStore,useProjectStore} from '@/_stores';

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProjectBox
  },
  setup() {
    const commonStore = useCommonStore();
    const projectStore = useProjectStore();
    return {
      commonStore,
      projectStore,
      modules: [Pagination, Navigation],
    }
  },
  data() {
    return {
      project:{
        project: 0,
        name: '',
        area: 0,
        industry: 0,
        country: 0,
        period_type: 0,
        period_start: '',
        period_end: '',
        apply_type: 0,
        apply_start: '',
        apply_end: '',
        location1: 0,
        location2: 0,
        work_location: '',
        work_time_start: '',
        work_time_end: '',
        equipment: '',
        team_yn: false,
        people_cnt: 0,
        meal_yn: false,
        lodge_yn: false,
        extra_work_price: 0,
        payment_day: '',
        detail: '',
        files: '',
        state: 0,
        other_info:{
          member_info:{company_name:''},
          click_cnt:0,
          lick_cnt:0,
        }
      },
      like_yn:false,
      project_list:[],
    }
  },
  watch:{

  },
  methods: {
    get() {
      this.projectStore.getById(this.$route.query.key).then((resp) => {
        if (resp.data.code == 200) {
          this.project = resp.data.body;
          this.getLike();
          console.log(this.project)
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getLike() {
      this.projectStore.getLike(this.$route.query.key, this.commonStore.member.member).then((resp) => {
        if (resp.data.code == 200) {
          this.like_yn = resp.data.body == 0 ? false:true;
          console.log(this.like_yn)
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    saveLike(){
      this.projectStore.saveLike(this.project.project, { member:this.commonStore.member.member,} ).then((resp) => {
        if (resp.data.code == 200) {
          this.get();
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getProjectList() {
      this.project_list = [];
      let params = {
        login_member: this.commonStore.member.member,
        searchType:'project_user_search' // 모집중인것만
      }

      this.projectStore.list(params, {page:1, page_block:4}).then((resp) => {
        if (resp.data.code == 200) {
          this.project_list = resp.data.body;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
  },
  mounted() {
    if(this.$route.query.key == null){
      alert('잘못된 접근입니다.');
      this.$router.push({name:'ProjectList'});
    } else {
      this.get();
      this.getProjectList();
      this.projectStore.saveClick(this.$route.query.key,{member:this.commonStore.member.member}); // 조회수 증가
    }
  }
}
</script>
