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
        <p class="title">
          <router-link :to="{ name: 'FindId' }">
            아이디 찾기
          </router-link>
        </p>
        <p class="title check">
          <router-link :to="{ name: 'FindPw' }">
            비밀번호 찾기
          </router-link>
        </p>
      </div>

      <!-- 비밀번호 찾기 -->
      <div class="field-wrap" v-if="!this.checkPw">
        <div class="field">
          <div class="input-wrap">
            <div class="field_input">
              <input class="userpw" type="text" placeholder="아이디" v-model="this.email">
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
        <div class="field" v-if="false"><!--TODO 휴대폰인증 -->
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
      <div class="btn btn1" v-if="!this.checkPw" @click="this.find">비밀번호 찾기</div>

      <!-- 비밀번호 찾기 결과 -->
      <div v-if="this.checkPw">
        <div class="text-box text-box2 blue-box">
          비밀번호를 변경합니다.
        </div>

        <div class="field-wrap">
          <div class="field">
            <div class="input-wrap">
              <div class="field_input">
                <input class="userpw" type="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상" v-model="this.password">
              </div>
            </div>
          </div>
          <div class="field">
            <div class="input-wrap">
              <div class="field_input">
                <input class="userpw" type="password" placeholder="비밀번호 확인" v-model="this.password2">
              </div>
            </div>
            <p :class="this.password === this.password2 ? 'yes' : 'no'" v-if="this.password !== '' && this.password2 !== ''">
              {{ this.password === this.password2 ? '비밀번호가 일치합니다' : '비밀번호가 일치하지 않습니다.' }}
            </p>
          </div>
        </div>
      </div>
      <router-link :to="{ name: 'Login' }" v-if="this.checkPw">
        <div class="btn btn1" @click="this.modify">완료</div>
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
      searchType:'pw',
      checkPw: false,
      email: '',
      phone_number: '',
      check_phone: true,
      member:{},
      password:'',
      password2:'',
    }
  },
  methods: {
    find() {
      if (this.email === '') {
        alert('아이디를 입력해 주세요.');
        return;
      }
      if (this.phone_number === '') {
        alert('휴대폰 번호를 입력해 주세요.');
        return;
      }

      let params = {
        searchType: this.searchType,
        email: this.email,
        phone_number: this.phone_number,
      }

      this.commonStore.find(params).then((resp) => {
        if (resp.data.code == 200) {
          this.member = resp.data.body;
          this.checkPw = true;
          this.refresh();
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
    modify() {
      let params = {
        member: this.member.member,
        password: this.password,
      }

      this.commonStore.modifyPassword(params).then((resp) => {
        if (resp.data.code == 200) {
          alert('변경 되었습니다.');
          this.$router.push({name:'Login'});
        } else {
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    refresh(){
      this.email = '';
      this.phone_number = '';
      this.check_phone = false;
    }
  },
};
</script>