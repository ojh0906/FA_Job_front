<template>
  <header :id="getCurrentRoutePath == '/' ? 'main-header' : ''"
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
        <router-link :to="{ name: 'RegisterType', query: {} }">
          회원가입
        </router-link>
        <!-- <a>마이페이지</a> -->
        <!-- <a>로그아웃</a> -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {
  },
  computed: {
    getCurrentRoutePath() {
      return this.$route.path
    },
  },
  date() {
    return {
    }
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
  },
  mounted() {
    this.fixedMenu();
  }
}
</script>