<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">회원정보 수정</p>

        <div class="profile-edit">
          <div class="profile-info">
            <img src="/image/mypage/temp/image.png" class="profile-img" />
            <img src="/image/mypage/camerabtn.png" class="camera-icon" />
          </div>

          <div class="field-wrap">
            <!-- 닉네임 -->
            <div class="field">
              <p class="input-title">닉네임</p>
              <div class="input-wrap">
                <div class="field_input">
                  <input type="text" placeholder="닉네임을 입력해주세요.">
                </div>
                <div class="check-btn btn btn3">중복확인</div>
              </div>
              <p :class="true ? 'yes' : 'no'">{{ true ? '사용 가능한 닉네임입니다.' : '사용 불가능한 닉네임입니다.' }}</p>
            </div>


            <!-- 휴대폰 번호 -->
            <div class="field">
              <p class="input-title">휴대폰번호</p>
              <div class="input-wrap">
                <div class="field_input">
                  <input type="phone" placeholder="휴대폰 번호">
                </div>
                <div class="check-btn btn btn3">
                  인증번호 전송
                </div>
              </div>
              <p class="time">남은시간 01:44</p>
              <div class="input-wrap check-phone">
                <div class="field_input">
                  <input type="number" placeholder="인증번호">
                </div>
                <div class="check-btn btn" :class="true ? 'btn2' : 'btn3'">{{ true ? '인증됨' : '인증번호 확인' }}</div>
              </div>
            </div>

            <!-- 주소 -->
            <div class="field">
              <p class="input-title">주소</p>
              <div class="input-wrap">
                <div class="field_input">
                  <input type="address" name="address" placeholder="주소 입력">
                </div>
                <div class="check-btn btn btn3">
                  주소 찾기
                </div>
              </div>
              <div class="input-wrap">
                <div class="field_input">
                  <input type="addredd" name="address-detail" placeholder="상세주소 입력">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="next-btn-wrap">
          <div class="btn btn1">
            완료
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
