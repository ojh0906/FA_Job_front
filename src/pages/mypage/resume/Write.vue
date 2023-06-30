<template>
  <div id="mypage" @click="clickSelect">
    <LeftGnb />
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

        <table class="table-manage-row row02" id="resume">
          <tr class="t-row">
            <td>혈액형</td>
            <td class="btn-select">
              <div class="btn-wrap">
                <div class="field-wrap">
                  <label class="input-email input-blood" for="email2"
                    @click="this.select_list.selectBlood = !this.select_list.selectBlood">
                    <p v-if="this.blood_type == 0" class="default input-blood">선택</p>
                    <p v-else>{{ this.blood_type }}</p>
                    <img class="down-icon input-blood" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectBlood"
                    :class="[this.select_list.selectBlood ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx" v-for="(v, idx) in 4"
                      @click="this.blood_type = v; this.select_list.selectBlood = false;">{{ v }}
                    </p>
                  </div>
                </div>
              </div>
            </td>
            <td>자차여부</td>
            <td>
              <div class="btn-wrap">
                <div :class="this.car_yn ? 'check-radio-btn' : 'radio-btn'">
                  <input id="car_radio1" type="radio" v-model="this.car_yn" value="true" />
                  <label for="car_radio1">
                    <img class="on" src="/image/resume/check.png" />
                    <img class="off" src="/image/resume/unchecked.png" />
                    <p>있음</p>
                  </label>
                </div>
                <div :class="!this.car_yn ? 'check-radio-btn' : 'radio-btn'">
                  <input id="car_radio2" type="radio" v-model="this.car_yn" value="false" />
                  <label for="car_radio2">
                    <img class="on" src="/image/resume/check.png" />
                    <img class="off" src="/image/resume/unchecked.png" />
                    <p>없음</p>
                  </label>
                </div>
              </div>
            </td>
            <td>여권발권여부</td>
            <td>
              <div class="btn-wrap">
                <div :class="this.passport_yn ? 'check-radio-btn' : 'radio-btn'">
                  <input id="passport_radio1" type="radio" v-model="this.passport_yn" value="true" />
                  <label for="passport_radio1">
                    <img class="on" src="/image/resume/check.png" />
                    <img class="off" src="/image/resume/unchecked.png" />
                    <p>있음</p>
                  </label>
                </div>
                <div :class="!this.passport_yn ? 'check-radio-btn' : 'radio-btn'">
                  <input id="passport_radio2" type="radio" v-model="this.passport_yn" value="false" />
                  <label for="passport_radio2">
                    <img class="on" src="/image/resume/check.png" />
                    <img class="off" src="/image/resume/unchecked.png" />
                    <p>없음</p>
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>방진복</td>
            <td>
              <div class="btn-wrap">
                <div :class="this.dustproof_clothes_yn ? 'check-radio-btn' : 'radio-btn'">
                  <input id="dustproof_clothes_radio1" type="radio" v-model="this.dustproof_clothes_yn" value="true" />
                  <label for="dustproof_clothes_radio1">
                    <img class="on" src="/image/resume/check.png" />
                    <img class="off" src="/image/resume/unchecked.png" />
                    <p>있음</p>
                  </label>
                </div>
                <div :class="!this.dustproof_clothes_yn ? 'check-radio-btn' : 'radio-btn'">
                  <input id="dustproof_clothes_radio2" type="radio" v-model="this.dustproof_clothes_yn" value="false" />
                  <label for="dustproof_clothes_radio2">
                    <img class="on" src="/image/resume/check.png" />
                    <img class="off" src="/image/resume/unchecked.png" />
                    <p>없음</p>
                  </label>
                </div>

                <div class="mini-select-wrap">
                  <div class="field-wrap mini-select">
                    <label class="input-email input-dust-clothes" for="email2"
                      @click="this.select_list.selectDustClothes = !this.select_list.selectDustClothes">
                      <p v-if="this.dustproof_clothes == 0" class="default input-dust-clothes">선택</p>
                      <p v-else>{{ this.dustproof_clothes }}</p>
                      <img class="down-icon input-dust-clothes" src="/image/input/down.png" />
                    </label>
                    <div v-if="this.select_list.selectDustClothes"
                      :class="[this.select_list.selectDustClothes ? 'select-on' : 'select-off', 'select-email']">
                      <p class="email-option" :key="idx" v-for="(v, idx) in 4"
                        @click="this.dustproof_clothes = v; this.select_list.selectDustClothes = false;">
                        {{ v }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </td>

            <td>방진두건</td>
            <td class="btn-wrap">
              <div :class="this.dustproof_hat_yn ? 'check-radio-btn' : 'radio-btn'">
                <input id="dustproof_hat_radio1" type="radio" v-model="this.dustproof_hat_yn" value="true" />
                <label for="dustproof_hat_radio1">
                  <img class="on" src="/image/resume/check.png" />
                  <img class="off" src="/image/resume/unchecked.png" />
                  <p>있음</p>
                </label>
              </div>
              <div :class="!this.dustproof_hat_yn ? 'check-radio-btn' : 'radio-btn'">
                <input id="dustproof_hat_radio2" type="radio" v-model="this.dustproof_hat_yn" value="false" />
                <label for="dustproof_hat_radio2">
                  <img class="on" src="/image/resume/check.png" />
                  <img class="off" src="/image/resume/unchecked.png" />
                  <p>없음</p>
                </label>
              </div>

              <div class="mini-select-wrap">
                <div class="field-wrap mini-select">
                  <label class="input-email input-dust-hat" for="email2"
                    @click="this.select_list.selectDustHat = !this.select_list.selectDustHat">
                    <p v-if="this.dustproof_hat == 0" class="default input-dust-hat">선택</p>
                    <p v-else>{{ this.dustproof_hat }}</p>
                    <img class="down-icon input-dust-hat" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectDustHat"
                    :class="[this.select_list.selectDustHat ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx" v-for="(v, idx) in 4"
                      @click="this.dustproof_hat = v; this.select_list.selectDustHat = false;">
                      {{ v }}
                    </p>
                  </div>
                </div>
              </div>
            </td>

            <td>방진화</td>
            <td class="btn-wrap">
              <div :class="this.dustproof_shoes_yn ? 'check-radio-btn' : 'radio-btn'">
                <input id="dustproof_shoes_radio1" type="radio" v-model="this.dustproof_shoes_yn" value="true" />
                <label for="dustproof_shoes_radio1">
                  <img class="on" src="/image/resume/check.png" />
                  <img class="off" src="/image/resume/unchecked.png" />
                  <p>있음</p>
                </label>
              </div>
              <div :class="!this.dustproof_shoes_yn ? 'check-radio-btn' : 'radio-btn'">
                <input id="dustproof_shoes_radio2" type="radio" v-model="this.dustproof_shoes_yn" value="false" />
                <label for="dustproof_shoes_radio2">
                  <img class="on" src="/image/resume/check.png" />
                  <img class="off" src="/image/resume/unchecked.png" />
                  <p>없음</p>
                </label>
              </div>
              <div class="mini-select-wrap">
                <div class="field-wrap mini-select">
                  <label class="input-email input-dust-shoes" for="email2"
                    @click="this.select_list.selectDustShoes = !this.select_list.selectDustShoes">
                    <p v-if="this.dustproof_shoes == 0" class="default input-dust-shoes">선택</p>
                    <p v-else>{{ this.dustproof_shoes }}</p>
                    <img class="down-icon input-dust-shoes" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectDustShoes"
                    :class="[this.select_list.selectDustShoes ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx" v-for="(v, idx) in 4"
                      @click="this.dustproof_shoes = v; this.select_list.selectDustShoes = false;">
                      {{ v }}
                    </p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>안전화</td>
            <td class="btn-wrap">
              <div :class="this.safe_shoes_yn ? 'check-radio-btn' : 'radio-btn'">
                <input id="safe_shoes_radio1" type="radio" v-model="this.safe_shoes_yn" value="true" />
                <label for="safe_shoes_radio1">
                  <img class="on" src="/image/resume/check.png" />
                  <img class="off" src="/image/resume/unchecked.png" />
                  <p>있음</p>
                </label>
              </div>
              <div :class="!this.safe_shoes_yn ? 'check-radio-btn' : 'radio-btn'">
                <input id="safe_shoes_radio2" type="radio" v-model="this.safe_shoes_yn" value="false" />
                <label for="safe_shoes_radio2">
                  <img class="on" src="/image/resume/check.png" />
                  <img class="off" src="/image/resume/unchecked.png" />
                  <p>없음</p>
                </label>
              </div>

              <div class="mini-select-wrap">
                <div class="field-wrap mini-select">
                  <label class="input-email input-safe-shoes" for="email2"
                    @click="this.select_list.selectSafeShoes = !this.select_list.selectSafeShoes">
                    <p v-if="this.safe_shoes == 0" class="default input-safe-shoes">선택</p>
                    <p v-else>{{ this.safe_shoes }}</p>
                    <img class="down-icon input-safe-shoes" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectSafeShoes"
                    :class="[this.select_list.selectSafeShoes ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx" v-for="(v, idx) in 4"
                      @click="this.safe_shoes = v; this.select_list.selectSafeShoes = false;">
                      {{ v }}
                    </p>
                  </div>
                </div>
              </div>
            </td>
            <td>개인공구</td>
            <td class="btn-wrap">
              <div :class="this.personal_equipment ? 'check-radio-btn' : 'radio-btn'">
                <input id="personal_equipment_radio1" type="radio" v-model="this.personal_equipment" value="true" />
                <label for="personal_equipment_radio1">
                  <img class="on" src="/image/resume/check.png" />
                  <img class="off" src="/image/resume/unchecked.png" />
                  <p>있음</p>
                </label>
              </div>
              <div :class="!this.personal_equipment ? 'check-radio-btn' : 'radio-btn'">
                <input id="personal_equipment_radio2" type="radio" v-model="this.personal_equipment" value="false" />
                <label for="personal_equipment_radio2">
                  <img class="on" src="/image/resume/check.png" />
                  <img class="off" src="/image/resume/unchecked.png" />
                  <p>없음</p>
                </label>
              </div>
            </td>
            <td class="line02">건설업 기초 안전보건교육</td>
            <td class="btn-wrap">
              <div :class="this.safe_education_yn ? 'check-radio-btn' : 'radio-btn'">
                <input id="safe_education_radio1" type="radio" v-model="this.safe_education_yn" value="true" />
                <label for="safe_education_radio1">
                  <img class="on" src="/image/resume/check.png" />
                  <img class="off" src="/image/resume/unchecked.png" />
                  <p>있음</p>
                </label>
              </div>
              <div :class="!this.safe_education_yn ? 'check-radio-btn' : 'radio-btn'">
                <input id="safe_education_radio2" type="radio" v-model="this.safe_education_yn" value="false" />
                <label for="safe_education_radio2">
                  <img class="on" src="/image/resume/check.png" />
                  <img class="off" src="/image/resume/unchecked.png" />
                  <p>없음</p>
                </label>
              </div>
            </td>
          </tr>
        </table>
        <table class="table-manage-row row03" id="resume">
          <tr>
            <td class="p-small">분야</td>
            <td class="p-small">
              <div class="career-select-wrap">
                <div class="field-wrap career-select">
                  <label class="input-email input-area" for="email2"
                    @click="this.select_list.selectArea = !this.select_list.selectArea">
                    <p v-if="this.area == 0" class="default input-area">선택</p>
                    <p v-else>{{ this.area }}</p>
                    <img class="down-icon input-area" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectArea"
                    :class="[this.select_list.selectArea ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx" v-for="(v, idx) in 4"
                      @click="this.area = v; this.select_list.selectArea = false;">
                      {{ v }}
                    </p>
                  </div>
                </div>
              </div>
            </td>
            <td colspan="4" class="cols4 p-small">
              <input class="input-wrap3" type="text" v-model="this.area_input" />
            </td>
          </tr>
          <tr>
            <td class="p-small">경력</td>
            <td class="p-small">
              <input class="input-wrap2" type="number" v-model="this.career" />년
            </td>
            <td class="p-small">희망단가</td>
            <td class="p-small">
              <input class="input-wrap" type="number" v-model="this.hope_price" />
            </td>
            <td class="p-small">설계</td>
            <td class="p-small">
              <div class="career-select-wrap">
                <div class="field-wrap career-select">
                  <label class="input-email input-design" for="email2"
                    @click="this.select_list.selectDesign = !this.select_list.selectDesign">
                    <p v-if="this.design == 0" class="default input-design">해당없음</p>
                    <p v-else>{{ this.design }}</p>
                    <img class="down-icon input-design" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectDesign"
                    :class="[this.select_list.selectDesign ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx" v-for="(v, idx) in 4"
                      @click="this.design = v; this.select_list.selectDesign = false;">
                      {{ v }}
                    </p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>전기</td>
            <td class="p-small">
              <div class="career-select-wrap">
                <div class="field-wrap career-select">
                  <label class="input-email input-electricity" for="email2"
                    @click="this.select_list.selectElectricity = !this.select_list.selectElectricity">
                    <p v-if="this.electricity == 0" class="default input-electricity">해당없음</p>
                    <p v-else>{{ this.electricity }}</p>
                    <img class="down-icon input-electricity" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectElectricity"
                    :class="[this.select_list.selectElectricity ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx" v-for="(v, idx) in 4"
                      @click="this.electricity = v; this.select_list.selectElectricity = false;">
                      {{ v }}
                    </p>
                  </div>
                </div>
              </div>
            </td>
            <td>제어</td>
            <td class="p-small">
              <div class="career-select-wrap">
                <div class="field-wrap career-select">
                  <label class="input-email input-control" for="email2"
                    @click="this.select_list.selectControl = !this.select_list.selectControl">
                    <p v-if="this.control == 0" class="default input-control">해당없음</p>
                    <p v-else>{{ this.control }}</p>
                    <img class="down-icon input-control" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectControl"
                    :class="[this.select_list.selectControl ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx" v-for="(v, idx) in 4"
                      @click="this.control = v; this.select_list.selectControl = false;">
                      {{ v }}
                    </p>
                  </div>
                </div>
              </div>
            </td>
            <td>비전</td>
            <td class="p-small">
              <div class="career-select-wrap">
                <div class="field-wrap career-select">
                  <label class="input-email input-vision" for="email2"
                    @click="this.select_list.selectVision = !this.select_list.selectVision">
                    <p v-if="this.vision == 0" class="default input-vision">해당없음</p>
                    <p v-else>{{ this.vision }}</p>
                    <img class="down-icon input-vision" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectVision"
                    :class="[this.select_list.selectVision ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx" v-for="(v, idx) in 4"
                      @click="this.vision = v; this.select_list.selectVision = false;">
                      {{ v }}
                    </p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>기구</td>
            <td class="p-small">
              <div class="career-select-wrap">
                <div class="field-wrap career-select">
                  <label class="input-email input-instrument" for="email2"
                    @click="this.select_list.selectInstrument = !this.select_list.selectInstrument">
                    <p v-if="this.instrument == 0" class="default input-instrument">해당없음</p>
                    <p v-else>{{ this.instrument }}</p>
                    <img class="down-icon input-instrument" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectInstrument"
                    :class="[this.select_list.selectInstrument ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx" v-for="(v, idx) in 4"
                      @click="this.instrument = v; this.select_list.selectInstrument = false;">
                      {{ v }}
                    </p>
                  </div>
                </div>
              </div>
            </td>
            <td>도면해석(2D)</td>
            <td class="p-small">
              <div class="career-select-wrap">
                <div class="field-wrap career-select">
                  <label class="input-email input-plan-2d" for="email2"
                    @click="this.select_list.selectplan2d = !this.select_list.selectplan2d">
                    <p v-if="this.plan_analysis_2d == 0" class="default input-plan-2d">해당없음</p>
                    <p v-else>{{ this.plan_analysis_2d }}</p>
                    <img class="down-icon input-plan-2d" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectplan2d"
                    :class="[this.select_list.selectplan2d ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx" v-for="(v, idx) in 4"
                      @click="this.plan_analysis_2d = v; this.select_list.selectplan2d = false;">
                      {{ v }}
                    </p>
                  </div>
                </div>
              </div>
            </td>
            <td>도면해석(3D)</td>
            <td class="p-small">
              <div class="career-select-wrap">
                <div class="field-wrap career-select">
                  <label class="input-email input-plan-3d" for="email2"
                    @click="this.select_list.selectplan3d = !this.select_list.selectplan3d">
                    <p v-if="this.plan_analysis_3d == 0" class="default input-plan-3d">해당없음</p>
                    <p v-else>{{ this.plan_analysis_3d }}</p>
                    <img class="down-icon input-plan-3d" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectplan3d"
                    :class="[this.select_list.selectplan3d ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx" v-for="(v, idx) in 4"
                      @click="this.plan_analysis_3d = v; this.select_list.selectplan3d = false;">
                      {{ v }}
                    </p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>경력사항</td>
            <td colspan="5" class="w01 textarea-wrap">
              <textarea type="text" class="textarea" placeholder="경력사항을 입력하세요."></textarea>
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
  data() {
    return {
      blood_type: '', // 혈액형
      car_yn: false, // 자차
      passport_yn: false, // 여권
      dustproof_clothes_yn: false, // 방진복
      dustproof_clothes: '', // 사이즈
      dustproof_hat_yn: false, // 방진두건
      dustproof_hat: '',
      dustproof_shoes_yn: false, // 방진화
      dustproof_shoes: '',
      safe_shoes_yn: false, // 안전화
      safe_shoes: '',
      personal_equipment: false, // 개인공구
      safe_education_yn: false, // 안전보건교육
      area: '', // 분야
      area_input: '', // 분야 직접 입력
      career: '', // 경력
      career_detail: '', // 경력 상세
      hope_price: '', // 희망 단가
      design: 0, // 설계
      electricity: 0, // 전기
      control: 0, // 제어
      vision: 0, // 비전
      instrument: 0, // 기구
      plan_analysis_2d: 0, // 도면 해석 2d
      plan_analysis_3d: 0, // 도면 해석 3d

      /* 셀렉트 리스트 */
      select_list: {
        selectBlood: false,
        selectDustClothes: false,
        selectDustHat: false,
        selectDustShoes: false,
        selectSafeShoes: false,
        selectArea: false,
        selectDesign: false,
        selectElectricity: false,
        selectControl: false,
        selectVision: false,
        selectInstrument: false,
        selectplan2d: false,
        selectplan3d: false,
      }
    }
  },
  methods: {
    clickSelect(event) {
      if (!event.target.classList.contains('input-blood')) { this.select_list.selectBlood = false; }
      if (!event.target.classList.contains('input-dust-clothes')) { this.select_list.selectDustClothes = false; }
      if (!event.target.classList.contains('input-dust-hat')) { this.select_list.selectDustHat = false; }
      if (!event.target.classList.contains('input-dust-shoes')) { this.select_list.selectDustShoes = false; }
      if (!event.target.classList.contains('input-safe-shoes')) { this.select_list.selectSafeShoes = false; }
      if (!event.target.classList.contains('input-area')) { this.select_list.selectArea = false; }
      if (!event.target.classList.contains('input-design')) { this.select_list.selectDesign = false; }
      if (!event.target.classList.contains('input-electricity')) { this.select_list.selectElectricity = false; }
      if (!event.target.classList.contains('input-control')) { this.select_list.selectControl = false; }
      if (!event.target.classList.contains('input-vision')) { this.select_list.selectVision = false; }
      if (!event.target.classList.contains('input-instrument')) { this.select_list.selectInstrument = false; }
      if (!event.target.classList.contains('input-plan-2d')) { this.select_list.selectplan2d = false; }
      if (!event.target.classList.contains('input-plan-3d')) { this.select_list.selectplan3d = false; }
    },
  }
}

</script>
  