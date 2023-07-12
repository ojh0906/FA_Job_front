<template>
  <header @click="clickSelect" :id="getCurrentRoutePath == '/' ? 'main-header' : ''"
    :class="getCurrentRoutePath == '/' ? 'main-header-none' : ''">
    <div id="header">
      <div class="logo-wrap">
        <router-link :to="{ name: 'Index', query: {} }">
          <img id="logo" :src="getCurrentRoutePath == '/' ? '/image/common/logo.png' : '/image/common/logo-gray.png'">
        </router-link>
      </div>
      <div class="gnb-wrap">
        <div class="menu-wrap">
          <a>FA JOB</a>
          <div class="submenu">
            <a>FA JOB이란?</a>
            <a>디엔지니어</a>
          </div>
        </div>
        <div class="menu-wrap">
          <router-link :to="{ name: 'ProjectList', query: {} }">
            프로젝트
          </router-link>
        </div>
        <div class="menu-wrap">
          <a>커뮤니티</a>
          <div class="submenu">
            <router-link :to="{ name: 'KnowHowList', query: {} }">
              Know-How
            </router-link>
            <router-link :to="{ name: 'FreePromo', query: {} }">
              자유홍보
            </router-link>
          </div>
        </div>
        <div class="menu-wrap">
          <router-link :to="{ name: 'BlacklistList', query: {} }">
            블랙리스트
          </router-link>
        </div>
        <div class="menu-wrap">
          <a>고객센터</a>
          <div class="submenu">
            <router-link :to="{ name: 'NoticeList', query: {} }">
              공지사항
            </router-link>
            <router-link :to="{ name: 'AskList', query: {} }">
              문의하기
            </router-link>
            <router-link :to="{ name: 'Faq', query: {} }">
              FAQ
            </router-link>
          </div>
        </div>
      </div>
      <div class="side-wrap">
        <div class="right-menu" v-if="this.commonStore.member == null">
          <router-link :to="{ name: 'RegisterType', query: {} }">
            회원가입
          </router-link>
          <router-link :to="{ name: 'Login', query: {} }">
            로그인
          </router-link>
        </div>
        <div class="right-menu" v-else>
          <!-- 알림 -->
          <div class="alarm-wrap a-item" v-if="this.commonStore.member.other_info.info_cnt !== 0">
            <div class="alarm a-item" @click="this.alarmPopup = !this.alarmPopup">
              <img class="alarm-icon a-item" src="/image/main/alarm.png" />
              <span>{{ this.commonStore.member.other_info.info_cnt }}</span>
            </div>
            <div class="alarm-popup a-item" v-if="this.alarmPopup">
              <!-- 새로운 알람 -->
              <div v-for="v in this.commonStore.member_info_list" class="a-item" :class="v.check_yn ? '':'new'">
                <p class="title a-item">
<!--                  <span class="a-item">(프로젝트명)</span>에서 알림이 도착하였습니다.-->
                  {{ v.title }}
                </p>
                <p class="text a-item">{{ v.content }}</p>
              </div>
            </div>
          </div>
          <div>
            <router-link :to="{ name: 'Mypage', query: {} }">마이페이지</router-link>
            <a @click="logout">로그아웃</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useCommonStore } from '@/_stores';

export default {
  props:['getInfoList'],
  setup() {
    const commonStore = useCommonStore()
    return {
      commonStore,
    }
  },
  components: {
  },
  data() {
    return {
      alarmPopup: false,
    }
  },
  computed: {
    getCurrentRoutePath() {
      return this.$route.path
    },
  },

  methods: {
    fixedMenu() {
      let header = document.querySelector("#main-header");
      let logo = document.querySelector("#logo");
      window.onscroll = () => {
        if (this.getCurrentRoutePath == '/') {
          if (window.scrollY >= 5) {
            logo.src = '/image/common/logo-gray.png';
            header.classList.remove("main-header-none");
          } else {
            logo.src = '/image/common/logo.png';
            header.classList.add("main-header-none");
          }
        }
      }
    },
    clickSelect(event) {
      if (!event.target.classList.contains('a-item')) {
        this.alarmPopup = false;
      }
    },
    logout() {
      this.commonStore.logout()
    }
  },
  mounted() {
    this.fixedMenu();
  }
}
</script>