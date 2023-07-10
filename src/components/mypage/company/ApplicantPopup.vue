<template>
  <!-- 개별 지원자 팝업 -->
  <article class="popup-box-wrap popup-applicant-wrap">
    <div class="popup-title">
      <p>
        {{ this.apply.other_info.member_info.name }}
      </p>
      <img class="close-icon" @click="this.$emit('popup', false)" src="/image/project/close2.png" />
    </div>
    <div class="popup-box popup-people-box">
      <div class="btn-wrap">
        <div class="btn btn2" @click="this.$emit('downloadApplicantExcel', this.apply.member)">
          다운로드<img src="/image/mypage/download.png" />
        </div>
      </div>
      <div id="mypage">
        <div class="content-container">
          <div class="resume-container">
            <table class="table-manage-row">
              <tr>
                <td>이름</td>
                <td>{{ this.apply.other_info.member_info.name }}</td>
                <td>나이 (만)</td>
                <td>{{ calAge(this.apply.other_info.member_info.birth) }}세</td>
                <td>생년월일</td>
                <td>{{ formattedDate(this.apply.other_info.member_info.birth,'YYYY년 MM월 DD일') }}</td>
              </tr>
              <tr>
                <td>국적/성별</td>
                <td>{{ this.apply.other_info.member_info.type === this.getField('member_type','외국인') ? '외국인':'내국인' }}</td>
                <td>휴대폰번호</td>
                <td>{{ this.apply.other_info.member_info.phone_number }}</td>
                <td>이메일</td>
                <td>{{ this.apply.other_info.member_info.email }}</td>
              </tr>
              <tr>
                <td>주소</td>
                <td colspan="5">{{ this.apply.other_info.member_info.address }} / {{ this.apply.other_info.member_info.address_detail }}</td>
              </tr>
            </table>

            <table class="table-manage-row row02">
              <tr>
                <td>혈액형</td>
                <td>{{ this.apply.other_info.member_resume.blood_type }}</td>
                <td>자차여부</td>
                <td>{{ this.apply.other_info.member_resume.car_yn ? '있음':'없음' }}</td>
                <td>여권발급여부</td>
                <td>{{ this.apply.other_info.member_resume.passport_yn ? '있음':'없음' }}</td>
              </tr>
              <tr>
                <td>방진복</td>
                <td>
                  {{ this.apply.other_info.member_resume.dustproof_clothes_yn ? '있음':'없음' }} / {{ this.apply.other_info.member_resume.dustproof_clothes }}
                </td>
                <td>방진두건</td>
                <td>
                  {{ this.apply.other_info.member_resume.dustproof_hat_yn ? '있음':'없음' }} / {{ this.apply.other_info.member_resume.dustproof_hat }}
                </td>
                <td>방진화</td>
                <td>
                  {{ this.apply.other_info.member_resume.dustproof_shoes_yn ? '있음':'없음' }} / {{ this.apply.other_info.member_resume.dustproof_shoes }}
                </td>
              </tr>
              <tr>
                <td>안전화</td>
                <td>
                  {{ this.apply.other_info.member_resume.safe_shoes_yn ? '있음':'없음' }} / {{ this.apply.other_info.member_resume.safe_shoes }}
                </td>
                <td>개인공구</td>
                <td>{{ this.apply.other_info.member_resume.personal_equipment ? '있음':'없음' }}</td>
                <td class="line02">건설업 기초안전보건교육</td>
                <td>{{ this.apply.other_info.member_resume.safe_education_yn ? '있음':'없음' }}</td>
              </tr>
            </table>

            <table class="table-manage-row row03">
              <tr>
                <td>분야</td>
                <td colspan="5">{{ this.getFieldName(this.apply.other_info.member_resume.area) }}</td>
              </tr>
              <tr>
                <td>경력</td>
                <td>{{ this.apply.other_info.member_resume.career }}년</td>
                <td>희망단가</td>
                <td>{{ this.apply.other_info.member_resume.hope_price }}</td>
                <td>설계</td>
                <td>{{ this.getFieldName(this.apply.other_info.member_resume.design) }}</td>
              </tr>
              <tr>
                <td>전기</td>
                <td>{{ this.getFieldName(this.apply.other_info.member_resume.electricity) }}</td>
                <td>제어</td>
                <td>{{ this.getFieldName(this.apply.other_info.member_resume.control) }}</td>
                <td>비전</td>
                <td>{{ this.getFieldName(this.apply.other_info.member_resume.vision) }}</td>
              </tr>
              <tr>
                <td>기구</td>
                <td>{{ this.getFieldName(this.apply.other_info.member_resume.instrument) }}</td>
                <td>도면해석(2D)</td>
                <td>{{ this.getFieldName(this.apply.other_info.member_resume.plan_analysis_2d) }}</td>
                <td>도면해석(3D)</td>
                <td>{{ this.getFieldName(this.apply.other_info.member_resume.plan_analysis_3d) }}</td>
              </tr>
              <tr>
                <td>경력사항</td>
                <td colspan="5">{{ this.apply.other_info.member_resume.career_detail }}</td>
              </tr>
            </table>

            <table class="table-manage-row row04">
              <tr>
                <th rowspan="5" class="line01">프로젝트<br>완료내역</th>
              </tr>
              <tr>
                <th>기업명</th>
                <th>제목</th>
                <th>기간</th>
              </tr>
              <tr>
                <td>일신산업</td>
                <td>프로젝트 제목이 노출됩니다.</td>
                <td>2023.05.25~2023.05.31</td>
              </tr>
              <tr>
                <td>일신산업</td>
                <td>프로젝트 제목이 노출됩니다.</td>
                <td>2023.05.25~2023.05.31</td>
              </tr>
              <tr>
                <td>일신산업</td>
                <td>프로젝트 제목이 노출됩니다.</td>
                <td>2023.05.25~2023.05.31</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="next-btn-wrap">
      <p class="people-cnt">
        합격자/모집인원 <span class="num1">{{ this.pass }}</span><span class="num2"> / {{ this.cnt }}명</span>
      </p>
      <div v-if="this.apply.pass == null || this.isPass" class="pass-text-wrap">
        <div class="btn btn6" @click="this.$emit('passApplicant', this.apply, false)">
          불합격
        </div>
        <div class="btn btn7" @click="this.$emit('passApplicant', this.apply, true)">
          합격
        </div>
      </div>
      <div v-else-if="this.apply.pass" class="pass-text-wrap">
        <p class="pass-text">합격</p>
        <div class="choose-again" @click="this.isPass = true;">다시 선택</div>
      </div>
      <div v-else class="pass-text-wrap">
        <p class="nonpass-text">불합격</p>
        <div class="choose-again" @click="this.isPass = true;">다시 선택</div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['pass','cnt','apply'],
  components: {
  },
  data() {
    return {
      isPass: false, // true:초기화
    }
  },
  methods: {
    offPopup() {
    }
  },
  mounted() {
    console.log(this.apply)
  }
}
</script>