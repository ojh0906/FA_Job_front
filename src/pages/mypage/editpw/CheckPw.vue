<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">비밀번호 변경</p>
        <div class="check-pw-container">
          <div :class="[this.check ? 'blue-box' : 'red-box', 'text-box']">
            {{ this.check ? '회원님의 정보를 안전하게 보호하기 위해 아래의 정보를 입력해주세요.' : '비밀번호가 일치하지 않습니다.' }}
          </div>
          <div class="check-pw">
            <div class="field-wrap">
              <div class="field">
                <p class="input-title">현재 비밀번호</p>
                <div class="input-wrap">
                  <div class="field_input">
                    <input class="userpw" type="password" placeholder="비밀번호 입력해주세요." v-model="this.password" @keypress.enter="this.checkPassword">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="next-btn-wrap">
          <div class="btn btn1" @click="this.checkPassword">
            비밀번호 확인
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
      check_request:false,
      check:true,
    }
  },
  methods: {
    checkPassword(){
      if(this.password === ''){
        alert('비밀번호를 입력해주세요.');
        return;
      }
      this.memberStore.matchPassword(this.commonStore.member.member, {password:this.password}).then((resp) => {
        if (resp.data.body) {
          this.goToPage('EditPassword');
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
