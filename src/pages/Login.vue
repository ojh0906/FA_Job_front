<template>
  <section id="login">
    <article class="img-content">
      <p class="title">
        FA JOB에 오신 것을 환영합니다.
      </p>
      <img class="phone-img" src="/image/main/phone.png" />

    </article>

    <article class="input-content">
      <p class="input-title">로그인</p>
      <div class="field-wrap">
        <div class="field">
          <div class="input-wrap">
            <div class="field_input">
              <input class="userpw" type="text" placeholder="아이디를 입력해주세요." v-model="this.email">
            </div>
          </div>

        </div>
        <div class="field">
          <div class="input-wrap">
            <div class="field_input">
              <label class="input-password">
                <input class="pw" type="password" placeholder="비밀번호를 입력해주세요." v-model="this.password" @keyup="this.commonStore.loginCheck = false;" @keypress.enter="onSubmit">
                <img class="eye-img" src="/image/login/eye.png" />
              </label>
            </div>
          </div>
          <p class="no" v-if="this.commonStore.loginCheck">잘못된 정보 입니다. 다시 입력해 주세요.</p>
        </div>
        <div class="field-checkbox">
          <label>
            <img class="check-img" src="/image/login/check.png" />
            <input class="check-box" type="checkbox" v-model="this.auto_login">
          </label>
          <p>자동 로그인</p>
        </div>

      </div>

      <div class="btn btn1" @click="onSubmit">로그인</div>
      <div class="btn btn2">회원가입</div>

      <div class="find-id-pw">
        <router-link :to="{ name: 'FindId' }">
          <p class="">아이디 찾기</p>
        </router-link>
        <p class="line">|</p>
        <router-link :to="{ name: 'FindPw' }">
          <p class="">비밀번호 찾기</p>
        </router-link>
      </div>

      <div class="login-box-wrap">
        <div class="login-box">
          <img class="login-img" src="/image/login/kakao.png" />
          <p>카카오 로그인</p>
        </div>
        <div class="login-box">
          <img class="login-img" src="/image/login/naver.png" />
          <p>네이버 로그인</p>
        </div>
        <div class="login-box">
          <img class="login-img" src="/image/login/google.png" />
          <p>구글 로그인</p>
        </div>
      </div>


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
      auto_login: false,
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      if (this.email === '') {
        alert('아이디를 입력해 주세요.');
        return;
      }
      if (this.password === '') {
        alert('비밀번호를 입력해 주세요.');
        return;
      }

      this.commonStore.login(this.email, this.password, this.auto_login);
    },
  },
};
</script>