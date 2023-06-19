<template>
  <div id="mypage">
    <div class="content-container">
      <div class="withdraw-info-container">
       <div class="success">
         <img src="/image/mypage/success.png" />
         <p class="top">회원탈퇴가 완료되었습니다.</p>
         <p class="bottom">지금까지 FA JOB과 함께해주셔서 감사합니다.</p>
       </div>
        <span class="big-btn-type-b">홈</span>
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
