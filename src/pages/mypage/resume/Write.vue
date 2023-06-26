<template>
    <div id="mypage">
      <LeftGnb/>
      <div class="content-container">
        <div class="resumew-container">
          <p class="area-title">이력서 작성</p>
          <table class="table-manage-row">
            <tr>
              <td>이름</td>
              <td>고길동</td>
              <td>나이 (만)</td>
              <td>49세</td>
              <td>생년월일</td>
              <td>1972년 12월 13일</td>
            </tr>
            <tr>
              <td>국적/성별</td>
              <td>내국인/남</td>
              <td>휴대폰번호</td>
              <td>010-1234-5678</td>
              <td>이메일</td>
              <td>gildong@javer.com</td>
            </tr>
            <tr>
              <td>주소</td>
              <td colspan="5">서울시 강남구 일원1동 이이동 삼아파트 101호</td>
            </tr>
          </table>

          <table class="table-manage-row row02">
            <tr>
              <td>자차여부</td>
              <td>
                <a href="#" class="btn6 fw_01">없음</a>
                <a href="#" class="btn7 fw_01">있음</a>
              </td>
              <td>여권발권여부</td>
              <td>
                <a href="#" class="btn6 fw_01">없음</a>
                <a href="#" class="btn7 fw_01">있음</a>
              </td>
              <td>생년월일</td>
              <td>1972년 12월 13일</td>
            </tr>
            <tr>
              <td>방진복</td>
              <td>
                <a href="#" class="btn6 fw_01">없음</a>
                <a href="#" class="btn7 fw_01">있음</a>
                <a href="#" class="btn6 fw_01">사이즈<i class="i_icon"></i></a>
              </td>
              <td>방진두건</td>
              <td>
                <a href="#" class="btn6 fw_01">없음</a>
                <a href="#" class="btn7 fw_01">있음</a>
              </td>
              <td>방진화</td>
              <td>
                <a href="#" class="btn6 fw_01">없음</a>
                <a href="#" class="btn7 fw_01">있음</a>
              </td>
            </tr>
            <tr>
              <td>안전화</td>
              <td>
                <a href="#" class="btn6 fw_01">없음</a>
                <a href="#" class="btn7 fw_01">있음</a>
              </td>
              <td>개인공구</td>
              <td>
                <a href="#" class="btn6 fw_01">없음</a>
                <a href="#" class="btn7 fw_01">있음</a>

              </td>
              <td class="line02">건설업 기초안전보건교육</td>
              <td>
                <a href="#" class="btn6 fw_01">없음</a>
                <a href="#" class="btn7 fw_01">있음</a>
              </td>
            </tr>
          </table>

          <table class="table-manage-row row03">
            <tr>
              <td>생년월일</td>
              <td colspan="5">1972년 12월 13일</td>
            </tr>
            <tr>
              <td>경력</td>
              <td>18년</td>
              <td>희망단가</td>
              <td></td>
              <td>설계</td>
              <td>해당없음<i class="i_icon"></i></td>
            </tr>
            <tr>
              <td>전기</td>
              <td>해당없음<i class="i_icon"></i></td>
              <td>제어</td>
              <td>해당없음<i class="i_icon"></i></td>
              <td>비전</td>
              <td>해당없음<i class="i_icon"></i></td>
            </tr>
            <tr>
              <td>기구</td>
              <td>해당없음<i class="i_icon"></i></td>
              <td>도면해석(2D)</td>
              <td>해당없음<i class="i_icon"></i></td>
              <td>도면해석(3D)</td>
              <td>해당없음<i class="i_icon"></i></td>
            </tr>
            <tr>
              <td>경력사항</td>
              <td colspan="5" class="w01">
                <div class="field_input">
                    <input type="text" placeholder="경력사항을 입력하세요.">
                </div>
              </td>
            </tr>
          </table>


          <div class="fw_next">
                <router-link :to="{ name: 'RegisterEnd' }">
                    <div class="btn btn1">작성 완료</div>
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
  