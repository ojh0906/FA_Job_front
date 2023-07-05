<template>
  <div class="left">
    <div class="menu-container">
      <div class="box">
        <div class="profile-wrap">
          <div class="profile-info">
            <div class="profile" style="background: url('/image/mypage/temp/image.png')"
              v-if="this.commonStore.member.profile_file === '[]'"></div>
            <div class="profile"
              :style="'background: url(' + this.getFirstImagePath(this.commonStore.member.profile_file) + ')'" v-else></div>
          </div>
          <div class="info-wrap">
            <p class="name">{{ this.commonStore.member.nick_name }}</p>
            <span class="type">{{ this.getFieldName(this.commonStore.member.type) }}회원</span>
            <span class="lv" @click="this.popupLv = true">{{ this.commonStore.member.other_info.member_level }}Lv</span>
            <span class="residual">월정액 잔여일수 D-15</span>
          </div>
        </div>
        <div class="lv-bar">
          <div class="lv-status" :style="'width: ' + this.commonStore.member.other_info.member_percent + '%'">{{
            this.commonStore.member.other_info.member_level }}Lv</div>
        </div>
        <p class="lv-info">다음레벨까지 남은 경험치 : {{ this.commonStore.member.other_info.member_required }}exp</p>
        <div class="setting-wrap">
          <router-link :to="{ name: 'ProfileInfo', query: {} }" class="btn">
            회원정보 관리
          </router-link>
          <router-link :to="{ name: 'CheckPassword', query: {} }" class="btn">
            비밀번호 변경
          </router-link>
        </div>
      </div>
      <div class="menu-wrap">
        <a class="menu" @click="checkResume">이력서 관리</a>
      </div>
      <!-- TODO : 일반과 기업 프로젝트 관리 페이지 다름  -->
      <router-link :to="{ name: this.commonStore.member.type === this.getField('member_type','기업') ? 'MypageCompanyProject' : 'MypageProject', query: {} }">
        <div class="menu-wrap">
          <a class="menu">프로젝트 관리</a>
        </div>
      </router-link>
      <router-link :to="{ name: 'ContactList', query: {} }">
        <div class="menu-wrap">
          <a class="menu">문의 내역</a>
        </div>
      </router-link>
      <router-link :to="{ name: 'MypageList', query: {} }">
        <div class="menu-wrap">
          <a class="menu">내가 쓴 글</a>
        </div>
      </router-link>
      <div class="menu-wrap">
        <a class="menu" @click="showAlert">업무일지 관리</a>
      </div>
      <div class="menu-wrap">
        <a class="menu" @click="showAlert">서비스 결제</a>
      </div>
    </div>
    <div class="sub-menu-wrap">
      <a class="menu" @click="this.commonStore.logout()">로그아웃</a>
      <a class="menu" @click="removeMember">회원탈퇴</a>
    </div>
  </div>


  <!-- 회사 정보 팝업 -->
  <section id="popup" class="company-popup" v-if="this.popupLv" @click="this.clickSelect">
    <article class="popup-box-wrap popup-lv-wrap">
      <div class="popup-title">
        <p>
          활동 점수
        </p>
        <img class="close-icon" @click="this.popupLv = false" src="/image/project/close2.png" />
      </div>
      <div class="popup-box">
        <p class="my-lv">나의 레벨 <span>15Lv</span></p>
        <div class="lv-bar">
          <div class="lv-status" style="width: 60%">15Lv</div>
        </div>
        <p class="lv-text">다음레벨까지 남은 경험치 : 500exp</p>
        <div class="lv-box">
          <div class="lv-info-box">
            <div class="lv-detail">
              <p class="num">-10 Lv ~ -1 Lv</p>
              <p class="text">레벨업 필요 경험치: 1,200EXP</p>
            </div>
            <div class="lv-detail">
              <p class="num">0 Lv ~ 40 Lv</p>
              <p class="text">레벨업 필요 경험치: 1,200EXP</p>
            </div>
            <div class="lv-detail">
              <p class="num">41 Lv ~ 80 Lv</p>
              <p class="text">레벨업 필요 경험치: 3,600EXP</p>
            </div>
            <div class="lv-detail">
              <p class="num">81 Lv ~ 100 Lv</p>
              <p class="text">레벨업 필요 경험치: 9,600EXP</p>
            </div>
          </div>

          <div class="lv-info">
            <div>
              <p class="title">경험치 획등방법</p>
              <p class="text">
                로그인 (하루 1번) : 10EXP<br />
                기업회원/프로젝트 완료 시 : 300EXP<br />
                Know-how 게시판 “좋아요” 획득 1개당 : 3EXP
              </p>
            </div>
            <div>
              <p class="title">경험치 손실 경우</p>
              <p class="text">
                프로젝트 매칭 후 문제 발생으로 신고 : -1,200EX<br />
                악의적인 신고 기능 사용 : -1,200EXP
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { useCommonStore, useMemberStore } from '@/_stores';

export default {
  components: {
  },
  setup() {
    const commonStore = useCommonStore()
    const memberStore = useMemberStore()
    return {
      commonStore,
      memberStore,
    }
  },
  data() {
    return {
      popupLv: false,
    }
  },

  methods: {
    clickSelect(event) {
      if (event.target.classList.contains('company-popup')) {
        this.popupLv = false;
      }
    },
    removeMember() {
      if (confirm('이 회원과 관련된 데이터가 전부 삭제됩니다.\n정말 탈퇴하시겠습니까?')) {
        this.memberStore.remove(this.commonStore.member.member).then((resp) => {
          if (resp.data.code == 200) {
            alert('탈퇴되었습니다.');
            this.commonStore.logout();
          }
        }).catch(err => {
          console.log("err", err);
        });
      }
    },
    checkResume() {
      if (this.commonStore.member.other_info.member_resume == null) {
        this.$router.push({ name: 'ResumeNone' });
      } else {
        this.$router.push({ name: 'ResumeWrite' });
      }
    },
    showAlert() { // TODO 개발시 없앨것
      alert('해당 기능은 아직 개발중입니다.');
    }
  }
}
</script>