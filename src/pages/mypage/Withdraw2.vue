<template>
  <div id="mypage">
    <LeftGnb/>
    <div class="content-container">
      <div class="withdraw-info-container withdraw2">
        <div class="info-box">
          <p>
            회원탈퇴 완료를 위해 비밀번호를 입력해주세요.
          </p>
        </div>
        <div class="input-wrap">
          <p class="label">비밀번호</p>
          <input type="password" placeholder="비밀번호 입력">
        </div>
        <span class="big-btn-type-a-red">탈퇴하기</span>
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
