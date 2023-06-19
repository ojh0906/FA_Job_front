<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">프로젝트 관리</p>
        <table class="table-color-row">
          <tr>
            <td>국적</td>
            <td>한국인</td>
          </tr>
          <tr>
            <td>닉네임</td>
            <td>요리보고</td>
          </tr>
          <tr>
            <td>이름</td>
            <td>고길동</td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>hong@gmail.com</td>
          </tr>
          <tr>
            <td>생년월일</td>
            <td>2024.06.19</td>
          </tr>
          <tr>
            <td>휴대폰 번호</td>
            <td>010-1111-1111</td>
          </tr>
          <tr>
            <td>주소</td>
            <td>둘리동</td>
          </tr>
          <tr>
            <td>외국인등록번호</td>
            <td>111111</td>
          </tr>
          <tr>
            <td>외국인등록증</td>
            <td>1.png</td>
          </tr>
        </table>

        <div class="next-btn-wrap">
          <router-link :to="{ name: 'ProfileCheckPw', query: {} }">
            <div class="btn btn1">
              수정하기
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
