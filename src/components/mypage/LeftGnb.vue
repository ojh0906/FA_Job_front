<template>
  <div class="left">
    <div class="menu-container">
      <div class="box">
        <div class="profile-wrap">
          <div class="profile-info">
            <div class="profile" style="background: url('/image/mypage/temp/image.png')"></div>
          </div>
          <div class="info-wrap">
            <p class="name">고길동 (닉네임)</p>
            <span class="type">일반회원</span>
            <span class="lv">15Lv</span>
            <span class="residual">월정액 잔여일수 D-15</span>
          </div>
        </div>
        <div class="lv-bar">
          <div class="lv-status" style="width: 60%">15Lv</div>
        </div>
        <p class="lv-info">다음레벨까지 남은 경험치 : 500exp</p>
        <div class="setting-wrap">
          <router-link :to="{ name: 'ProfileInfo', query: {} }" class="btn">
            회원정보 관리
          </router-link>
          <router-link :to="{ name: 'checkPassword', query: {} }" class="btn">
            비밀번호 변경
          </router-link>
        </div>
      </div>
      <div class="menu-wrap">
        <a class="menu">이력서 관리</a>
      </div>
      <router-link :to="{ name: 'MypageProject', query: {} }">
        <div class="menu-wrap">
          <a class="menu">프로젝트 관리</a>
        </div>
      </router-link>
       <router-link :to="{ name: 'ContactList', query: {} }">
        <div class="menu-wrap">
          <a class="menu">문의 내역</a>
        </div>
      </router-link>
      <div class="menu-wrap">
        <a class="menu">내가 쓴글</a>
      </div>
      <div class="menu-wrap">
        <a class="menu">업무일지 관리</a>
      </div>
      <div class="menu-wrap">
        <a class="menu">서비스 결제</a>
      </div>
    </div>
    <div class="sub-menu-wrap">
      <a class="menu">로그아웃</a>
      <a class="menu">회원탈퇴</a>
    </div>
  </div>
</template>
