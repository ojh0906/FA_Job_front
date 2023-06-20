<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">비밀번호 변경</p>
        <div class="check-pw-container">
          <div class="blue-box text-box">
            변경하실 비밀번호를 입력해주세요.
          </div>
          <div class="check-pw edit-pw">
            <div class="field-wrap">
              <div class="field">
                <p class="input-title">신규 비밀번호</p>
                <div class="input-wrap">
                  <div class="field_input">
                    <input class="userpw" type="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상">
                  </div>
                </div>
                <p :class="false ? 'yes' : 'no'">{{ false ? '' : '비밀번호는 영문, 숫자, 특수문자 포함 8자 이상입니다.' }}</p>
              </div>
            </div>
            <div class="field-wrap">
              <div class="field">
                <p class="input-title">신규 비밀번호 확인</p>
                <div class="input-wrap">
                  <div class="field_input">
                    <input class="userpw" type="password" placeholder="비밀번호 입력해주세요.">
                  </div>
                </div>
                <p :class="true ? 'yes' : 'no'">{{ true ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.' }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="next-btn-wrap">
          <div class="btn btn1">
            비밀번호 변경
          </div>
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
