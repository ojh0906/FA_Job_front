<template>
  <section id="project-regist-wrap" @click="clickSelect">
    <div class="project-regist">
      <!--회원가입 순서-->
      <ProjectHeader :step="this.step" />

      <!-- 첫 번째 페이지 -->
      <div class="project-regist-field" v-if="this.step === 1">
        <div class="left-container">
          <div class="field-wrap ">
            <div class="field">
              <p class="input-title">분야</p>
              <label class="input-email input-area" for="email2"
                     @click="this.select_list.selectArea = !this.select_list.selectArea">
                <p v-if="this.area === -1" class="default input-area">분야 선택</p>
                <p v-else>{{ this.getFieldName(this.area) }}</p>
                <img class="down-icon input-area" src="/image/input/down.png" />
              </label>
              <div v-if="this.select_list.selectArea"
                   :class="[this.select_list.selectArea ? 'select-on' : 'select-off', 'select-email']">
                <p class="email-option" :key="idx"
                   v-for="(v, idx) in this.getFieldList('project_area').sort((a, b) => a.field - b.field)"
                   @click="this.area = v.field; this.select_list.selectArea = false;">
                  {{ v.name }}
                </p>
              </div>
            </div>
            <div class="field">
              <p class="input-title">산업</p>
              <label class="input-email input-industry" for="email2"
                     @click="this.select_list.selectIndustry = !this.select_list.selectIndustry">
                <p v-if="this.industry === -1" class="default input-industry">산업 선택</p>
                <p v-else>{{ this.getFieldName(this.industry) }}</p>
                <img class="down-icon input-industry" src="/image/input/down.png" />
              </label>
              <div v-if="this.select_list.selectIndustry"
                   :class="[this.select_list.selectIndustry ? 'select-on' : 'select-off', 'select-email']">
                <p class="email-option" :key="idx"
                   v-for="(v, idx) in this.getFieldList('project_industry').sort((a, b) => a.field - b.field)"
                   @click="this.industry = v.field; this.select_list.selectIndustry = false;">
                  {{ v.name }}
                </p>
              </div>
            </div>
            <div class="field">
              <p class="input-title">국가</p>
              <label class="input-email input-country" for="email2"
                     @click="this.select_list.selectCountry = !this.select_list.selectCountry">
                <p v-if="this.country === -1" class="default input-country">국가 선택</p>
                <p v-else>{{ this.getFieldName(this.country) }}</p>
                <img class="down-icon input-country" src="/image/input/down.png" />
              </label>
              <div v-if="this.select_list.selectCountry"
                   :class="[this.select_list.selectCountry ? 'select-on' : 'select-off', 'select-email']">
                <p class="email-option" :key="idx"
                   v-for="(v, idx) in this.getFieldList('project_country').sort((a, b) => a.field - b.field)"
                   @click="this.country = v.field; this.select_list.selectCountry = false;">
                  {{ v.name }}
                </p>
              </div>
            </div>
            <div class="field">
              <p class="input-title">지역</p>
              <div class="two-select-wrap">
                <div class="two-select">
                  <label class="input-email input-location1" for="email2"
                         @click="this.select_list.selectLocation1 = !this.select_list.selectLocation1">
                    <p v-if="this.location1 === -1" class="default input-location1">지역 선택</p>
                    <p v-else>{{ this.getFieldName(this.location1) }}</p>
                    <img class="down-icon input-location1" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectLocation1"
                       :class="[this.select_list.selectLocation1 ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx"
                       v-for="(v, idx) in this.getFieldList('project_location1').sort((a, b) => a.field - b.field)"
                       @click="this.location1 = v.field; this.select_list.selectLocation1 = false;">
                      {{ v.name }}
                    </p>
                  </div>
                </div>
                <div class="two-select">
                  <label class="input-email input-location2" for="email2"
                         @click="this.select_list.selectLocation2 = !this.select_list.selectLocation2">
                    <p v-if="this.location2 === -1" class="default input-location2">지역 선택</p>
                    <p v-else>{{ this.getFieldName(this.location2) }}</p>
                    <img class="down-icon input-location2" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectLocation2"
                       :class="[this.select_list.selectLocation2 ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx"
                       v-for="(v, idx) in this.getFieldList('project_location2').filter(i => i.field_index === this.location1).sort((a, b) => a.field - b.field)"
                       @click="this.location2 = v.field; this.select_list.selectLocation2 = false;">
                      {{ v.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <p class="input-title">근무지 위치</p>
              <div class="input-wrap">
                <div class="field_input">
                  <input class="" type="text" placeholder="근무지 위치 입력" v-model="this.work_location">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="field-wrap">
            <div class="field">
              <p class="input-title">프로젝트 이름</p>
              <div class="input-wrap">
                <div class="field_input">
                  <input type="text" placeholder="프로젝트 이름 입력" v-model="this.name">
                </div>
              </div>
            </div>
            <div class="field">
              <p class="input-title">공사 기간</p>
              <div class="btn-wrap">
                <div :class="this.period_type === v.field ? 'check-radio-btn' : 'radio-btn'"
                     v-for="(v, idx) in this.getFieldList('project_period_type').sort((a, b) => a.field - b.field)">
                  <input :id="'period_type_radio'+idx" type="radio" v-model="this.period_type" :value="v.field" @change="setPeriod"/>
                  <label :for="'period_type_radio'+idx">
                    <img class="on" src="/image/resume/check.png" />
                    <img class="off" src="/image/resume/unchecked.png" />
                    <p>{{ v.name }}</p>
                  </label>
                </div>
              </div>
              <div class="input-wrap date-input-wrap" v-if="this.period_type === this.getField('project_period_type','일정선택')">
                <div class="field_input">
                  <input type="date" placeholder="날짜 선택" v-model="this.period_start">
                  ~
                  <input type="date" placeholder="날짜 선택" v-model="this.period_end">
                </div>
              </div>
            </div>
            <div class="field">
              <p class="input-title">프로젝트 모집일정</p>
              <div class="btn-wrap">
                <div :class="this.apply_type === v.field ? 'check-radio-btn' : 'radio-btn'"
                     v-for="(v, idx) in this.getFieldList('project_apply_type').sort((a, b) => a.field - b.field)">
                  <input :id="'apply_type_radio'+idx" type="radio" v-model="this.apply_type" :value="v.field" @change="setApply"/>
                  <label :for="'apply_type_radio'+idx">
                    <img class="on" src="/image/resume/check.png" />
                    <img class="off" src="/image/resume/unchecked.png" />
                    <p>{{ v.name }}</p>
                  </label>
                </div>
              </div>
              <div class="input-wrap date-input-wrap" v-if="this.apply_type === this.getField('project_apply_type','일정선택')">
                <div class="field_input">
                  <input type="date" placeholder="날짜 선택" v-model="this.apply_start">
                  ~
                  <input type="date" placeholder="날짜 선택" v-model="this.apply_end">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 두 번째 페이지 -->
      <div class="project-regist-field project-regist-field2" v-if="this.step === 2">
        <div class="left-container">
          <div class="field-wrap ">
            <div class="field">
              <p class="input-title">근무 시간</p>
              <div class="two-select-wrap two-select-wrap2">
                <div class="two-select">
                  <label class="input-email input-work-time1" for="email2"
                         @click="this.select_list.selectWorkTime1 = !this.select_list.selectWorkTime1">
                    <p v-if="this.work_time_start === ''" class="default input-work-time1">선택</p>
                    <p v-else>{{ this.work_time_list[this.work_time_list.findIndex(i => i.value ===
                        this.work_time_start)].name }}</p>
                    <img class="down-icon input-work-time1" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectWorkTime1"
                       :class="[this.select_list.selectWorkTime1 ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx" v-for="(v, idx) in this.work_time_list"
                       @click="this.work_time_start = v.value; this.select_list.selectWorkTime1 = false;">
                      {{ v.name }}
                    </p>
                  </div>
                </div>
                ~
                <div class="two-select">
                  <label class="input-email input-work-time2" for="email2"
                         @click="this.select_list.selectWorkTime2 = !this.select_list.selectWorkTime2">
                    <p v-if="this.work_time_end === ''" class="default input-work-time2">선택</p>
                    <p v-else>{{ this.work_time_list[this.work_time_list.findIndex(i => i.value ===
                        this.work_time_end)].name }}</p>
                    <img class="down-icon input-work-time2" src="/image/input/down.png" />
                  </label>
                  <div v-if="this.select_list.selectWorkTime2"
                       :class="[this.select_list.selectWorkTime2 ? 'select-on' : 'select-off', 'select-email']">
                    <p class="email-option" :key="idx" v-for="(v, idx) in this.work_time_list"
                       @click="this.work_time_end = v.value; this.select_list.selectWorkTime2 = false;">
                      {{ v.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <p class="input-title">설비명</p>
              <div class="input-wrap">
                <div class="field_input">
                  <input class="" type="text" placeholder="설비명 입력" v-model="this.equipment">
                </div>
              </div>
            </div>
            <div class="field">
              <p class="input-title">팀 참여 가능 여부</p>
              <div class="btn-wrap">
                <div :class="this.team_yn ? 'radio-btn' : 'check-radio-btn'">
                  <input id="team_yn_radio1" type="radio" v-model="this.team_yn" :value="false" />
                  <label for="team_yn_radio1">
                    <img class="on" src="/image/resume/check.png" />
                    <img class="off" src="/image/resume/unchecked.png" />
                    <p>불가능</p>
                  </label>
                </div>
                <div :class="this.team_yn ? 'check-radio-btn' : 'radio-btn'">
                  <input id="team_yn_radio2" type="radio" v-model="this.team_yn" :value="true" />
                  <label for="team_yn_radio2">
                    <img class="on" src="/image/resume/check.png" />
                    <img class="off" src="/image/resume/unchecked.png" />
                    <p>가능</p>
                  </label>
                </div>
              </div>
            </div>
            <div class="field">
              <p class="input-title">근무스킬(1개 이상 필수 선택)</p>
              <div class="radio-border">
                <div class="input-wrap radio-input-wrap"
                     :class="this.skill_checked1 ? 'click_checkbox' : 'nonClick_checkbox'">
                  <label>
                    <input type="checkbox" v-model="this.skill_checked1">
                    초보
                  </label>
                  <div class="field_input">
                    <input type="number" placeholder="공수단가 입력" v-model="this.skill1" @change="this.skill1 !== 0 ? this.skill_checked1 = true:this.skill_checked1 = false;">
                    <p class="side-text">원</p>
                  </div>
                </div>
                <div class="input-wrap radio-input-wrap"
                     :class="this.skill_checked2 ? 'click_checkbox' : 'nonClick_checkbox'">
                  <label>
                    <input type="checkbox" v-model="this.skill_checked2">
                    준공
                  </label>
                  <div class="field_input">
                    <input type="number" placeholder="공수단가 입력" v-model="this.skill2" @change="this.skill2 !== 0 ? this.skill_checked2 = true:this.skill_checked2 = false;">
                    <p class="side-text">원</p>
                  </div>
                </div>
                <div class="input-wrap radio-input-wrap"
                     :class="this.skill_checked3 ? 'click_checkbox' : 'nonClick_checkbox'">
                  <label>
                    <input type="checkbox" v-model="this.skill_checked3">
                    준기공
                  </label>
                  <div class="field_input">
                    <input type="number" placeholder="공수단가 입력" v-model="this.skill3" @change="this.skill3 !== 0 ? this.skill_checked3 = true:this.skill_checked3 = false;">
                    <p class="side-text">원</p>
                  </div>
                </div>
                <div class="input-wrap radio-input-wrap"
                     :class="this.skill_checked4 ? 'click_checkbox' : 'nonClick_checkbox'">
                  <label>
                    <input type="checkbox" v-model="this.skill_checked4">
                    기공
                  </label>
                  <div class="field_input">
                    <input type="number" placeholder="공수단가 입력" v-model="this.skill4" @change="this.skill4 !== 0 ? this.skill_checked4 = true:this.skill_checked4 = false;">
                    <p class="side-text">원</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="field-wrap">
            <div class="field">
              <p class="input-title">필요인원</p>
              <div class="input-wrap">
                <div class="field_input">
                  <input type="number" placeholder="필요 인원 입력" v-model="this.people_cnt">
                  <p class="side-text">명</p>
                </div>
              </div>
            </div>
            <div class="field two-radio-field">
              <div>
                <p class="input-title">숙소제공 여부</p>
                <td class="btn-wrap">
                  <div :class="this.lodge_yn ? 'radio-btn' : 'check-radio-btn'">
                    <input id="lodge_yn_radio1" type="radio" v-model="this.lodge_yn" value="false" />
                    <label for="lodge_yn_radio1">
                      <img class="on" src="/image/resume/check.png" />
                      <img class="off" src="/image/resume/unchecked.png" />
                      <p>없음</p>
                    </label>
                  </div>
                  <div :class="this.lodge_yn ? 'check-radio-btn' : 'radio-btn'">
                    <input id="lodge_yn_radio2" type="radio" v-model="this.lodge_yn" value="true" />
                    <label for="lodge_yn_radio2">
                      <img class="on" src="/image/resume/check.png" />
                      <img class="off" src="/image/resume/unchecked.png" />
                      <p>제공</p>
                    </label>
                  </div>
                </td>
              </div>
              <div>
                <p class="input-title">식사제공 여부</p>
                <td class="btn-wrap">
                  <div :class="this.meal_yn ? 'radio-btn' : 'check-radio-btn'">
                    <input id="meal_yn_radio1" type="radio" v-model="this.meal_yn" value="false" />
                    <label for="meal_yn_radio1">
                      <img class="on" src="/image/resume/check.png" />
                      <img class="off" src="/image/resume/unchecked.png" />
                      <p>없음</p>
                    </label>
                  </div>
                  <div :class="this.meal_yn ? 'check-radio-btn' : 'radio-btn'">
                    <input id="meal_yn_radio2" type="radio" v-model="this.meal_yn" value="true" />
                    <label for="meal_yn_radio2">
                      <img class="on" src="/image/resume/check.png" />
                      <img class="off" src="/image/resume/unchecked.png" />
                      <p>제공</p>
                    </label>
                  </div>
                </td>
              </div>
            </div>
            <div class="field">
              <p class="input-title">잔업수당</p>
              <div class="input-wrap">
                <div class="field_input">
                  <input type="number" placeholder="잔업 수당 입력" v-model="this.extra_work_price">
                  <p class="side-text">원</p>
                </div>
              </div>
            </div>
            <div class="field">
              <p class="input-title">결제일</p>
              <div class="input-wrap">
                <div class="field_input">
                  <input type="number" placeholder="결제일 입력 (1~28)" v-model="this.payment_day" @change="this.payment_day > 28 ? this.payment_day = 1:''">
                  <p class="side-text">일</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 세 번째 페이지 -->
      <div class="project-regist-field" v-if="this.step === 3">
        <table class="">
          <tr class="tr_com">
            <td class="fw_com01 td_01">업무 상세 내용</td>
            <td class="fw_com02 td_02">
              <textarea type="text" placeholder="제목을 입력해주세요." v-model="this.detail"></textarea>
            </td>
          </tr>

          <tr class="tr_com">
            <td class="fa_com01">이미지</td>
            <td class="fw_com02 fw_02">
              <input id="files_new" name="files_new" ref="files_new" class="hidden" type="file"
                     @change="handleChange($event)" />
              <a href="#" class="btn2 fw_01" @click.prevent="addFiles('files_new')">
                <i class="i_icon"></i>파일올리기
              </a>
              <p class="file01" v-for="(item, idx) in this.files_new" :key="idx">
                {{ item.name }}
                <a @click="removeFile(idx, 'files_new')">
                  <i class="i_icon"></i>
                </a>
              </p>
            </td>
          </tr>
        </table>
      </div>
      <div class="next">
        <div class="btn btn4" @click="this.step -= 1" v-if="this.step > 1">이전</div>
        <div class="btn btn1" @click="this.nextStep">다음</div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectHeader from '/src/components/project/Header.vue';
import { useCommonStore,useProjectStore } from '@/_stores';
import dayjs from "dayjs";

export default {
  components: {
    ProjectHeader
  },
  setup() {
    const work_time_list = [
      { idx: 1, name: '01:00', value: '01:00', },
      { idx: 2, name: '02:00', value: '02:00', },
      { idx: 3, name: '03:00', value: '03:00', },
      { idx: 4, name: '04:00', value: '04:00', },
      { idx: 5, name: '05:00', value: '05:00', },
      { idx: 6, name: '06:00', value: '06:00', },
      { idx: 7, name: '07:00', value: '07:00', },
      { idx: 8, name: '08:00', value: '08:00', },
      { idx: 9, name: '09:00', value: '09:00', },
      { idx: 10, name: '10:00', value: '10:00', },
      { idx: 11, name: '11:00', value: '11:00', },
      { idx: 12, name: '12:00', value: '12:00', },
      { idx: 13, name: '13:00', value: '13:00', },
      { idx: 14, name: '14:00', value: '14:00', },
      { idx: 15, name: '15:00', value: '15:00', },
      { idx: 16, name: '16:00', value: '16:00', },
      { idx: 17, name: '17:00', value: '17:00', },
      { idx: 18, name: '18:00', value: '18:00', },
      { idx: 19, name: '19:00', value: '19:00', },
      { idx: 20, name: '20:00', value: '20:00', },
      { idx: 21, name: '21:00', value: '21:00', },
      { idx: 22, name: '22:00', value: '22:00', },
      { idx: 23, name: '23:00', value: '23:00', },
      { idx: 24, name: '24:00', value: '24:00', },
    ]
    const commonStore = useCommonStore()
    const projectStore = useProjectStore()
    return {
      commonStore,
      projectStore,
      work_time_list
    };
  },
  data() {
    return {
      project: 0,
      name: '', // 프로젝트 이름
      area: -1, // 분야
      industry: -1, // 산업
      country: -1, // 국가
      period_type: 0, // 공사 기간 타입
      period_start: '', // 공사 기간 시작
      period_end: '', // 공사 기간 종료
      apply_type: 0, // 모집일정 타입
      apply_start: '', // 모집일정 시작
      apply_end: '', // 모집일정 종료
      location1: -1, // 지역1
      location2: -1, // 지역2
      work_location: '', // 근무지 위치
      work_time_start: '', // 근무시간 시작
      work_time_end: '', // 근무시간 종료
      equipment: '', // 설비명
      team_yn: false, // 팀 참여 가능 여부
      people_cnt: 0, // 필요 인원
      meal_yn: false, // 식사 제공 여부
      lodge_yn: false, // 숙소 제공 여부
      extra_work_price: 0, // 잔업 수당
      payment_day: 1, // 결제일
      detail: '', // 업무 상세
      files_new: [], // 파일
      skill_checked1: false, // 초보 단가
      skill_checked2: false, // 준공 단가
      skill_checked3: false, // 준기공 단가
      skill_checked4: false, // 기공 단가
      skill1: 0, // 초보 단가
      skill2: 0, // 준공 단가
      skill3: 0, // 준기공 단가
      skill4: 0, // 기공 단가

      step: 1, // 단계

      /* 셀렉트 리스트 */
      select_list: {
        selectArea: false,
        selectIndustry: false,
        selectCountry: false,
        selectLocation1: false,
        selectLocation2: false,
        selectWorkTime1: false,
        selectWorkTime2: false,
      },
    }
  },
  methods: {
    clickSelect(event) {
      if (!event.target.classList.contains('input-area')) { this.select_list.selectArea = false; }
      if (!event.target.classList.contains('input-industry')) { this.select_list.selectIndustry = false; }
      if (!event.target.classList.contains('input-country')) { this.select_list.selectCountry = false; }
      if (!event.target.classList.contains('input-location1')) { this.select_list.selectLocation1 = false; }
      if (!event.target.classList.contains('input-location2')) { this.select_list.selectLocation2 = false; }
      if (!event.target.classList.contains('input-work-time1')) { this.select_list.selectWorkTime1 = false; }
      if (!event.target.classList.contains('input-work-time2')) { this.select_list.selectWorkTime2 = false; }
    },
    nextStep() {
      if (this.step >= 3) {
        this.saveProject();
      } else {
        if(this.step === 1){
          if(this.area < 0 || this.industry < 0 || this.country < 0 || this.location1 < 0 || this.location2 < 0 || this.work_location === '' || this.name === ''){
            alert('필수값을 입력해주세요.');
            return;
          }
          if(this.period_type === this.getField('project_period_type','일정선택')){
            if(this.period_start === '' || this.period_end === ''){
              alert('공사기간을 입력해주세요.');
              return;
            }
          }
          if(this.apply_type === this.getField('project_apply_type','일정선택')){
            if(this.apply_start === '' || this.apply_end === ''){
              alert('모집기간을 입력해주세요.');
              return;
            }
          }
        } else if(this.step === 2){
          if(this.work_time_start === '' || this.work_time_end === '' || this.equipment === '' || this.payment_day === ''){
            alert('필수값을 입력해주세요.');
            return;
          }

          if(this.people_cnt === 0 || this.extra_work_price === 0){
            alert('필수값을 입력해주세요.');
            return;
          }

          if(this.skill_checked1 || this.skill_checked2 || this.skill_checked3 || this.skill_checked4){
            if(this.skill_checked1){
              if(this.skill1 === 0){
                alert('필수값을 입력해주세요.');
                return;
              }
            }
            if(this.skill_checked2){
              if(this.skill2 === 0){
                alert('필수값을 입력해주세요.');
                return;
              }
            }
            if(this.skill_checked3){
              if(this.skill3 === 0){
                alert('필수값을 입력해주세요.');
                return;
              }
            }
            if(this.skill_checked4){
              if(this.skill4 === 0){
                alert('필수값을 입력해주세요.');
                return;
              }
            }
          } else {
            alert('근무스킬은 반드시 1개이상 선택해야합니다.');
            return;
          }
        }
        this.step += 1;
      }
    },
    addFiles(obj) {
      if (obj == "files_new" && Object.keys(this.files_new).length >= 3) {
        alert("파일은 3개까지 등록할 수 있습니다.");
        return false;
      }
      this.$refs[obj].click();
    },
    handleChange(event) {
      let uploadedFiles = event.target.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        this[event.target.id].push(uploadedFiles[i]);
      }
    },
    removeFile(key, target_files) {
      this[target_files].splice(key, 1);
    },
    setPeriod(){
      this.period_start = '';
      this.period_end = '';
    },
    setApply(){
      this.apply_start = dayjs(new Date()).format('YYYY-MM-DD')
      if(this.apply_type === this.getField('project_apply_type','일정선택')){
        this.apply_start = '';
        this.apply_end = '';
      } else if(this.apply_type === this.getField('project_apply_type','긴급(1일)')){
        this.apply_end = dayjs(new Date()).add(1,'d').format('YYYY-MM-DD')
      } else if(this.apply_type === this.getField('project_apply_type','1주(7일)')){
        this.apply_end = dayjs(new Date()).add(7,'d').format('YYYY-MM-DD')
      } else if(this.apply_type === this.getField('project_apply_type','2주(14일)')){
        this.apply_end = dayjs(new Date()).add(14,'d').format('YYYY-MM-DD')
      } else if(this.apply_type === this.getField('project_apply_type','3주(21일)')){
        this.apply_end = dayjs(new Date()).add(21,'d').format('YYYY-MM-DD')
      }
    },
    saveProject(){
      let paramData = new FormData();
      paramData.append("member", this.commonStore.member.member);
      paramData.append("name", this.name);
      paramData.append("area", this.area);
      paramData.append("industry", this.industry);
      paramData.append("country", this.country);
      paramData.append("period_type", this.period_type);
      if(this.period_type === this.getField('project_period_type','일정선택')){
        paramData.append("period_start", this.period_start + ' 00:00:00');
        paramData.append("period_end", this.period_end + ' 23:59:59');
      }
      paramData.append("apply_type", this.apply_type);
      paramData.append("apply_start", this.apply_start + ' 00:00:00');
      paramData.append("apply_end", this.apply_end + ' 23:59:59');
      paramData.append("location1", this.location1);
      paramData.append("location2", this.location2);
      paramData.append("work_location", this.work_location);
      paramData.append("work_time_start", this.work_time_start);
      paramData.append("work_time_end", this.work_time_end);
      paramData.append("equipment", this.equipment);
      paramData.append("team_yn", this.team_yn);
      paramData.append("people_cnt", this.people_cnt);
      paramData.append("meal_yn", this.meal_yn);
      paramData.append("lodge_yn", this.lodge_yn);
      paramData.append("extra_work_price", this.extra_work_price);
      paramData.append("payment_day", this.payment_day);
      paramData.append("skill1", this.skill1);
      paramData.append("skill2", this.skill2);
      paramData.append("skill3", this.skill3);
      paramData.append("skill4", this.skill4);
      paramData.append("detail", this.detail);
      paramData.append("state", this.getField('project_state','모집중'));

      if (this.files_new.length > 0) {
        this.files_new.forEach((element, index) => {
          paramData.append(`files_new`, element);
        });
      }

      for (const pair of paramData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }

      this.projectStore.save(paramData).then((resp) => {
        if (resp.data.code == 200) {
          alert('저장되었습니다.');
          this.$router.push({name:'ProjectList'});
        }
      }).catch(err => {
        console.log("err", err);
      });
    }
  },
  mounted() {
    // if (this.$route.query.type == null || this.$route.query.event_info_yn == null) {
    //     alert('잘못된 접근입니다.');
    //     this.$router.push({ name: 'RegisterType' })
    // } else {
    //     this.type = this.$route.query.type;
    //     if (this.type == this.getField('member_type', '기업')) {
    //         this.isCompany = true;
    //     } else if (this.type == this.getField('member_type', '외국인')) {
    //         this.isForeigner = true;
    //     }
    //     this.event_info_yn = this.$route.query.event_info_yn;
    // }
  }
}
</script>