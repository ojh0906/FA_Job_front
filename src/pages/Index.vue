<template>
  <section id="main-container">
    <!-- 메인 슬라이드 -->
    <MainSlider />
    <!-- 프로젝트 검색 창 -->
    <article class="search-container">
      <aside>
        <label for="search" class="search-wrap">
          <input type="text" name="search" placeholder="프로젝트 검색" />
          <img class="search-icon" src="/image/main/search.png" />
        </label>
      </aside>
    </article>

    <!-- 프로젝트 -->
    <article class="project-container max">
      <div class="title-wrap">
        <p class="title">
          프로젝트
          <span class="sub-title">견적을 의뢰한 프로젝트가 오늘까지 <b>N</b>건이 있습니다.</span>
        </p>
        <div class="more-btn" @click="goToPage('ProjectList')">
          <p>
            더보기
          </p>
          <img class="more-icon" src="/image/main/more-btn.png" />
        </div>
      </div>
      <aside class="project-box-container">
        <ProjectSlider />
      </aside>
    </article>

    <!-- 블랙 리스트 -->
    <article class="black-list-container ">
      <div class="title-wrap">
        <p class="title">
          블랙리스트
        </p>
        <div class="more-btn" @click="goToPage('BlacklistList')">
          <p>
            더보기
          </p>
          <img class="more-icon" src="/image/main/more-btn.png" />
        </div>
      </div>
      <div class="tag-wrap">
        <div class="tag" :class="this.blacklist_target === -1 ? 'tag-click':''" @click="this.blacklist_target = -1; this.getBlacklistList();">전체</div>
        <div class="tag" :class="this.blacklist_target === 0 ? 'tag-click':''" @click="this.blacklist_target = 0; this.getBlacklistList();">업체</div>
        <div class="tag" :class="this.blacklist_target === 1 ? 'tag-click':''" @click="this.blacklist_target = 1; this.getBlacklistList();">프리랜서</div>
        <div class="tag" :class="this.blacklist_target === 2 ? 'tag-click':''" @click="this.blacklist_target = 2; this.getBlacklistList();">기타</div>
      </div>
      <BlackSlider :blacklistList="this.blacklistList"/>
    </article>

    <!-- 게시판-->
    <article class="board-container max">
      <div class="board-title-box">
        <p class="title">게시판</p>
        <div class="tag-wrap">
          <div>
            <div class="tag" :class="this.board_type === 0 ? 'click' : ''" @click="this.board_type = 0">공지사항</div>
          </div>
          <div>
            <div class="tag" :class="this.board_type === 1 ? 'click' : ''" @click="this.board_type = 1">Know-how</div>
          </div>
          <div>
            <div class="tag" :class="this.board_type === 2 ? 'click' : ''" @click="this.board_type = 2">자유홍보</div>
          </div>
        </div>
        <div class="more-btn" @click="goToPage(this.board_type === 0 ? 'NoticeList' : this.board_type === 1 ? 'KnowHowList':'FreePromo')">
          <p>더보기</p>
          <img class="more-icon" src="/image/main/more-btn2.png" />
        </div>
      </div>
      <div class="board-content">
        <div class="table-head">
          <div class="row">
            <p class="title">제목</p>
            <p class="reg-date">등록일</p>
          </div>
        </div>
        <div class="table-body" v-for="item in this.noticeList" v-if="this.board_type === 0">
          <p class="title">{{ item.title }}</p>
          <p class="reg-date">{{ formattedDate(item.reg_date) }}</p>
        </div>
        <div class="table-body" v-for="item in this.knowhowList" v-if="this.board_type === 1">
          <p class="title">{{ item.title }}</p>
          <p class="reg-date">{{ formattedDate(item.reg_date) }}</p>
        </div>
        <div class="table-body" v-for="item in this.marketingList" v-if="this.board_type === 2">
          <p class="title">{{ item.title }}</p>
          <p class="reg-date">{{ formattedDate(item.reg_date) }}</p>
        </div>
      </div>
    </article>

    <!-- 광고 -->
    <article class="ad-container">
      <div class="ad-content">
        <div class="text-wrap">
          <p class="text">
            구인구직 플랫폼<br />
            <img class="logo" src="/image/common/logo-gray.png" />앱을 만나보세요.<br />
            <span>
                            쉽고 빠르게 프로젝트를 등록하고, 일자리를 구해보세요!
                        </span>
          </p>
          <div class="img-wrap">
            <img class="apple" src="/image/main/apple.png" />
            <img class="google" src="/image/main/google.png" />
          </div>
        </div>
        <img class="phone-img" src="/image/main/phone.png" />
      </div>
    </article>
  </section>
</template>

<script>
import MainSlider from '/src/components/MainSlider.vue';
import ProjectSlider from '/src/components/ProjectSlider.vue';
import BlackSlider from '/src/components/BlackSlider.vue';
import {useMainStore} from '@/_stores';

export default {
  components: {
    MainSlider,
    ProjectSlider,
    BlackSlider,
  },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore,
    }
  },
  data() {
    return {
      blacklist_target:-1,
      board_type:0,
      projectList: [],
      blacklistList: [],
      blackListEndPage:99999,
      noticeList: [],
      knowhowList: [],
      marketingList: [],
    }
  },
  methods: {
    getInitList(){
      this.getProjectList();
      this.getBlacklistList();
      this.getNoticeList();
      this.getKnowhowList();
      this.getMarketingList();
    },
    getProjectList() {
      this.projectList = [];
      // TODO {ad_yn:true} 추후에 광고한애들 불러오려면 파라미터 교체
      this.mainStore.listProject({}).then((resp) => {
        if (resp.data.code == 200) {
          this.projectList = resp.data.body;
          //console.log(resp.data.body)
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getBlacklistList() {
      this.blacklistList = [];
      let option = {

      }
      if(this.blacklist_target >= 0){
        option.target = this.blacklist_target;
      }
      this.mainStore.listBlacklist(option).then((resp) => {
        if (resp.data.code == 200) {
          this.blacklistList = resp.data.body;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getNoticeList() {
      this.noticeList = [];
      this.mainStore.listNotice().then((resp) => {
        if (resp.data.code == 200) {
          this.noticeList = resp.data.body;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getKnowhowList() {
      this.knowhowList = [];
      this.mainStore.listKnowhow().then((resp) => {
        if (resp.data.code == 200) {
          this.knowhowList = resp.data.body;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getMarketingList() {
      this.marketingList = [];
      this.mainStore.listMarketing().then((resp) => {
        if (resp.data.code == 200) {
          this.marketingList = resp.data.body;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
  },
  mounted() {
    this.getInitList();
  }
}
</script>
