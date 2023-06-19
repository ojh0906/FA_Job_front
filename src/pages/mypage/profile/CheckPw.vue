<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">회원정보 수정</p>
        <div class="check-pw-container">
          <div class="text-box">
            회원님의 정보를 안전하게 보호하기 위해 아래의 정보를 입력해주세요.
          </div>
          <div class="check-pw">
            <div class="field-wrap">
              <div class="field">
                <p class="input-title">비밀번호</p>
                <div class="input-wrap">
                  <div class="field_input">
                    <input class="userpw" type="password" placeholder="비밀번호 입력해주세요.">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="next-btn-wrap">
          <router-link :to="{ name: 'ProfileEdit', query: {} }">
            <div class="btn btn1">
              비밀번호 확인
            </div>
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
  data() {
    return {
    }
  },
  methods: {
  }
}

</script>
