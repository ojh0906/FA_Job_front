<template>
  <div id="mypage">
    <LeftGnb/>
    <div class="content-container">
      <div class="withdraw-info-container">
        <div class="info-box">
          <p>
            <strong>고길동</strong> 님<br>
            정말로 탈퇴하시겠습니까?<br>
            <br>
            탈퇴하시기 전에 확인해주세요.
          </p>
        </div>
        <div class="box">
          <strong>회원 탈퇴 시 유의사항</strong><br>
          <br>
          회원 탈퇴 시 회원이 인지해야 하는 유의사항이 들어갈 예정입니다.<br>
          회원 탈퇴 시 회원이 인지해야 하는 유의사항이 들어갈 예정입니다.<br>
          회원 탈퇴 시 회원이 인지해야 하는 유의사항이 들어갈 예정입니다.<br>
          회원 탈퇴 시 회원이 인지해야 하는 유의사항이 들어갈 예정입니다.
        </div>
        <div class="agree-wrap">
          <label>
            <input type="checkbox">
            위 내용을 확인하고 내용에 동의합니다.
          </label>
        </div>
        <router-link :to="{name:'Withdraw2', query:{}}" class="big-btn-type-a">다음</router-link>
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
