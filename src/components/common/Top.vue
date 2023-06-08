<template>
  <header>
    <div id="header">
      <div class="logo-wrap">
        <img src="/image/common/logo-gray.png">
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
          <a>프로젝트</a>
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

</script>
