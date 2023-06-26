<template>
  <section id="login">
    <article class="img-content">
      <p class="title">
        FA JOB에 오신 것을 환영합니다.
      </p>
      <img class="phone-img" src="/image/main/phone.png" />
    </article>

    <article class="input-content idpw-content">
      <div class="input-title-box">
        <p class="title check">
          <router-link :to="{ name: 'FindId' }">
            아이디 찾기
          </router-link>
        </p>
        <p class="title">
          <router-link :to="{ name: 'FindPw' }">
            비밀번호 찾기
          </router-link>
        </p>
      </div>

      <!-- 아이디 찾기 -->
      <div class="field-wrap" v-if="!this.checkId">
        <div class="field">
          <div class="input-wrap">
            <div class="field_input">
              <input class="userpw" type="text" placeholder="이름" v-model="this.name">
            </div>
          </div>
        </div>
        <div class="field">
          <div class="input-wrap">
            <div class="field_input">
              <label class="input-check">
                <input class="pw" type="phone" placeholder="휴대폰 번호" v-model="this.phone_number">
                <div class="btn btn2" v-if="false">
                  인증번호 전송
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="field" v-if="false"> <!--TODO 휴대폰인증 -->
          <div class="input-wrap">
            <div class="field_input">
              <label class="input-check">
                <input class="pw" type="phone" placeholder="인증번호">
                <div :class="true ? 'btn btn1' : 'btn btn2'">
                  {{ true ? '인증됨' : '인증하기' }}
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="btn btn1" v-if="!this.checkId" @click="this.find">아아디 찾기</div>

      <!-- 아이디 찾기 결과 -->
      <div v-if="this.checkId" class="text-box blue-box">
        회원님의 아이디는 <span>{{ this.member.email }}</span>입니다.
      </div>
      <router-link :to="{ name: 'Login' }" v-if="this.checkId">
        <div class="btn btn1">로그인하러 가기</div>
      </router-link>
    </article>
  </section>
</template>

<script>
import { useCommonStore } from '@/_stores';

export default {
  setup() {
    const commonStore = useCommonStore()
    return {
      commonStore,
    }
  },
  components: {
  },
  data() {
    return {
      searchType: 'id',
      checkId: false,
      name: '',
      phone_number: '',
      check_phone: true,
      member:{
        email:'',
      }
    }
  },
  methods: {
    find() {
      if (this.name === '') {
        alert('이름을 입력해 주세요.');
        return;
      }
      if (this.phone_number === '') {
        alert('휴대폰 번호를 입력해 주세요.');
        return;
      }

      let params = {
        searchType: this.searchType,
        name: this.name,
        phone_number: this.phone_number,
      }

      this.commonStore.find(params).then((resp) => {
        if (resp.data.code == 200) {
          this.member = resp.data.body;
          this.checkId = true;
        } else {
          alert('일치하는 회원이 없습니다.');
          this.refresh();
        }
      }).catch(err => {
        console.log("err", err);
        alert('일치하는 회원이 없습니다.');
        this.refresh();
      });
    },
    refresh(){
      this.name = '';
      this.phone_number = '';
      this.check_phone = false;
    }
  },
};
</script>