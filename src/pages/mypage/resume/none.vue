<template>
  <div id="mypage">
    <LeftGnb/>
    <div class="content-container">
      <div class="resume-container">
        <p class="area-title">이력서 관리</p>
        <div class="not-inputbox">
          <div class="not">
            <img src="/image/mypage/nothing.png" alt="이력서없음이미지입니다.">
          </div>
          <p>등록되어 있는 이력서가 없습니다.</p>
          <router-link class="big-btn-type-a" :to="{ name: 'ResumeWrite' }">
            작성하기
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import LeftGnb from "/src/components/mypage/LeftGnb.vue";

export default {
  components: {
    LeftGnb
  },
}

</script>
