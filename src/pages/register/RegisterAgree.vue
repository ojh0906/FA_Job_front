<template>
  <div id="register_section" @click="clickSelect">
    <!-- 회원가입 헤더 -->
    <RegisterHeader step="2" />

    <!-- 약관동의 -->
    <div class="agree">
      <aside class="agree-wrap">
        <!-- 서비스이용약관 -->
        <div class="agree_box agree_box01">
          <div class="title">
            <ul class="agree-select">
              <div class="agree-select-wrap" @click="onSelect(1)">
                <div class="check-text">
                  <input type="checkbox" required name="service" v-model="this.agree1" @change="chkAll" />
                  <li class="h3">서비스 이용약관 (필수)</li>
                </div>
                <li class="dropdown">
                  <img class="dropdown-img" src="/image/register/down.png" alt="드롭다운아이콘입니다.">
                </li>
              </div>
              <div class="select-box" :class="this.agree_select1 ? 'select-on ' : 'select-off'">
                <TermsCompany v-if="this.type == getField('member_type', '기업')" />
                <TermsMember v-if="this.type !== getField('member_type', '기업')" />
                <Terms />
              </div>
            </ul>
          </div>
        </div>

        <!-- 개인정보처리방침 -->
        <div class="agree_box agree_box02">
          <div class="title">
            <ul class="agree-select">
              <div class="agree-select-wrap" @click="onSelect(2)">
                <div class="check-text">
                  <input type="checkbox" required name="service" v-model="this.agree2" @change="chkAll" />
                  <li class="h3">개인정보처리방침 (필수)</li>
                </div>
                <li class="dropdown">
                  <img class="dropdown-img" src="/image/register/down.png" alt="드롭다운아이콘입니다.">
                </li>
              </div>
              <div class="select-box" :class="this.agree_select2 ? 'select-on ' : 'select-off'">
                <TermsPrivacy />
              </div>
            </ul>
          </div>
        </div>

        <!-- 이벤트 정보 수집 동의 -->
        <div class="agree_box agree_box03">
          <div class="title">
            <ul class="agree-select">
              <div class="agree-select-wrap" @click="onSelect(3)">
                <div class="check-text">
                  <input type="checkbox" name="service" v-model="this.agree3" @change="chkAll" />
                  <li class="h3">이벤트 정보 수집 동의 (선택)</li>
                </div>
                <li class="dropdown">
                  <img class="dropdown-img" src="/image/register/down.png" alt="드롭다운아이콘입니다.">
                </li>
              </div>
              <div class="select-box" :class="this.agree_select3 ? 'select-on ' : 'select-off'">
              </div>
            </ul>
          </div>
        </div>

        <!-- 이벤트 정보 수집 동의 -->
        <div class="agree_box agree_box04">
          <div class="title">
            <ul>
              <div class="check-text">
                <input type="checkbox" name="service" v-model="this.all" @click="initAgree(!this.all);" />
                <li class="h3">전체동의</li>
              </div>
            </ul>
          </div>
        </div>
      </aside>

      <!-- 정보 입력 페이지 내/외국인 구분 필요(동일 페이지) -->
      <div class="agree_next">
        <a @click="next">
          <p>다음</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Terms from '@/components/register/Terms.vue';
import TermsCompany from '@/components/register/TermsCompany.vue';
import TermsMember from '@/components/register/TermsMember.vue';
import TermsPrivacy from '@//components/register/TermsPrivacy.vue';
import RegisterHeader from '@/components/register/Header.vue';


export default {
  data() {
    return {
      type: 0,
      agree_select1: false,
      agree_select2: false,
      agree_select3: false,
      agree1: false,
      agree2: false,
      agree3: false,
      all: false,
    }
  },
  components: {
    RegisterHeader,
    Terms,
    TermsCompany,
    TermsMember,
    TermsPrivacy
  },
  methods: {
    onSelect(num) {
      if (num === 1) {
        this.agree_select1 = !this.agree_select1;
        this.agree_select2 = false;
        this.agree_select3 = false;
      } else if (num === 2) {
        this.agree_select2 = !this.agree_select2;
        this.agree_select1 = false;
        this.agree_select3 = false;
      } else if (num === 3) {
        this.agree_select3 = !this.agree_select3;
        this.agree_select1 = false;
        this.agree_select2 = false;
      }
    },
    clickSelect(event) {
      if (!event.target.classList.contains('select-box') && !event.target.classList.contains('h3') && !event.target.classList.contains('dropdown-img')) {
        this.agree_select1 = false;
      }
    },
    initAgree(bool) {
      this.agree1 = bool;
      this.agree2 = bool;
      this.agree3 = bool;
      this.all = bool;
    },
    chkAll() {
      if (this.agree1 && this.agree2 && this.agree3) {
        this.all = true;
      } else {
        this.all = false;
      }
    },
    next() {
      if (this.agree1 && this.agree2) {
        this.$router.push({ name: 'RegisterInput', query: { type: this.type, event_info_yn: this.agree3 } })
      } else {
        alert('필수항목에 체크해주세요.')
      }
    }
  },
  mounted() {
    if (this.$route.query.type == null) { // 가입유형 없을 시
      alert('잘못된 접근입니다.');
      this.$router.push({ name: 'RegisterType' })
    } else {
      this.type = this.$route.query.type;
      this.initAgree(false);
    }
  }
}

</script>
