<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">비밀번호 변경</p>
        <div class="check-pw-container">
          <div class="blue-box text-box">
            변경하실 비밀번호를 입력해주세요.
          </div>
          <div class="check-pw edit-pw">
            <div class="field-wrap">
              <div class="field">
                <p class="input-title">신규 비밀번호</p>
                <div class="input-wrap">
                  <div class="field_input">
                    <input class="userpw" type="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상" v-model="this.password">
                  </div>
                </div>
                <p :class="this.check_password ? 'yes' : 'no'">{{ this.check_password ? '' : '비밀번호는 영문, 숫자, 특수문자 포함 8자 이상입니다.' }}</p> <!--TODO 비밀번호 정규식 체크 -->
              </div>
            </div>
            <div class="field-wrap">
              <div class="field">
                <p class="input-title">신규 비밀번호 확인</p>
                <div class="input-wrap">
                  <div class="field_input">
                    <input class="userpw" type="password" placeholder="비밀번호 입력해주세요." v-model="this.password2">
                  </div>
                </div>
                <p :class="this.password === this.password2 ? 'yes' : 'no'" v-if="this.password !== '' && this.password2">
                  {{ this.password === this.password2 ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.' }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="next-btn-wrap">
          <div class="btn btn1" @click="modifyPassword">
            비밀번호 변경
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import LeftGnb from "/src/components/mypage/LeftGnb.vue";
import { useCommonStore,useMemberStore } from '@/_stores';

export default {
  components: {
    LeftGnb
  },
  setup() {
    const commonStore = useCommonStore();
    const memberStore = useMemberStore();
    return {
      commonStore,
      memberStore,
    }
  },
  data() {
    return {
      password:'',
      password2:'',
      check_password:true,
    }
  },
  methods: {
    modifyPassword(){
      if(this.password === '' || this.password2 === ''){
        alert('비밀번호를 입력해주세요.');
        return;
      }
      if(this.password !== this.password2){
        alert('비밀번호가 일치하지않습니다.');
        return;
      }
      this.memberStore.modifyPassword(this.commonStore.member.member, {password:this.password}).then((resp) => {
        if (resp.data.body) {
          alert('변경되었습니다. 다시 로그인해주세요.');
          this.commonStore.logout();
        } else {
          this.check = false;
        }
      }).catch(err => {
        console.log("err", err);
      });
    }
  },
  mounted() {
  }
}
</script>
