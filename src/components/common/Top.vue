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
            <a>프로젝트</a>
          </router-link>
        </div>
        <div class="menu-wrap">
          <a>커뮤니티</a>
          <div class="submenu">
            <a>Know-How</a>
            <a>자유홍보</a>
          </div>
        </div>
        <div class="menu-wrap">
          <a>블랙리스트</a>
        </div>
        <div class="menu-wrap">
          <a>고객센터</a>
          <div class="submenu">
            <a>공지사항</a>
            <a>문의하기</a>
            <a>FAQ</a>
          </div>
        </div>
      </div>
      <div class="side-wrap">
        <div class="right-menu" v-if="true">
          <router-link :to="{ name: 'RegisterType', query: {} }">
            회원가입
          </router-link>
          <router-link :to="{ name: 'Login', query: {} }">
            로그인
          </router-link>
        </div>
        <div class="right-menu" v-if="false">
          <!-- 알림 -->
          <div class="alarm-wrap a-item">
            <div class="alarm a-item" @click="this.alarmPopup = !this.alarmPopup">
              <img class="alarm-icon a-item" src="/image/main/alarm.png" />
              <span>4</span>
            </div>
            <div class="alarm-popup a-item" v-if="this.alarmPopup">
              <!-- 새로운 알람 -->
              <div v-for="v in 3" class="new a-item">
                <p class="title a-item">
                  <span class="a-item">(프로젝트명)</span>에서 알림이 도착하였습니다.
                </p>
                <p class="text a-item">프로젝트에 매칭이 성사되었습니다.</p>
              </div>
              <!-- 기존 알람 -->
              <div v-for="v in 1" class="a-item">
                <p class="title a-item">
                  <span class="a-item">(프로젝트명)</span>에서 알림이 도착하였습니다.
                </p>
                <p class="text a-item">프로젝트에 매칭이 성사되었습니다.</p>
              </div>
            </div>
          </div>
          <div>
            <router-link :to="{ name: 'Mypage', query: {} }">마이페이지</router-link>
            <a>로그아웃
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
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
  },
  mounted() {
    this.fixedMenu();
  }
}
</script>