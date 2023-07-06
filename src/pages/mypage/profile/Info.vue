<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">회원정보 관리</p>
        <table class="table-color-row">
          <tr>
            <td>국적</td>
            <td>{{ this.commonStore.member.type === this.getField('member_type','외국인') ? '외국인':'내국인' }}</td>
          </tr>
          <tr>
            <td v-if="!this.isCompany">닉네임</td>
            <td>{{ this.commonStore.member.nick_name }}</td>
          </tr>
          <tr>
            <td>이름</td>
            <td>{{ this.commonStore.member.name }}</td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>{{ this.commonStore.member.email }}</td>
          </tr>
          <tr>
            <td>생년월일</td>
            <td>{{ formattedDate(this.commonStore.member.birth) }}</td>
          </tr>
          <tr>
            <td>휴대폰 번호</td>
            <td>{{ this.commonStore.member.phone_number }}</td>
          </tr>
          <tr>
            <td>주소</td>
            <td>{{ this.commonStore.member.address }} / {{ this.commonStore.member.address_detail }}</td>
          </tr>
          <tr v-if="this.isForeigner">
            <td>외국인등록번호</td>
            <td>{{ this.commonStore.member.foreigner_number }}</td>
          </tr>
          <tr v-if="this.isForeigner">
            <td>외국인등록증</td>
            <td>{{ this.files[0].name }}</td>
          </tr>
          <tr v-if="this.isCompany">
            <td>회사명</td>
            <td>{{ this.commonStore.member.company_name }}</td>
          </tr>
          <tr v-if="this.isCompany">
            <td>대표자명</td>
            <td>{{ this.commonStore.member.company_owner_name }}</td>
          </tr>
          <tr v-if="this.isCompany">
            <td>회사 연락처</td>
            <td>{{ this.commonStore.member.company_phone_number }}</td>
          </tr>
          <tr v-if="this.isCompany">
            <td>사업자등록번호</td>
            <td>{{ this.commonStore.member.company_number }}</td>
          </tr>
          <tr v-if="this.isCompany">
            <td>사업자등록증</td>
            <td>{{ this.files[0].name }}</td>
          </tr>
        </table>

        <div class="next-btn-wrap">
          <router-link :to="{ name: 'ProfileCheckPw', query: {} }">
            <div class="btn btn1">
              수정하기
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftGnb from "/src/components/mypage/LeftGnb.vue";
import { useCommonStore } from '@/_stores';

export default {
  components: {
    LeftGnb
  },
  setup() {
    const commonStore = useCommonStore();
    return {
      commonStore,
    }
  },
  data() {
    return {
      isCompany:false,
      isForeigner: false,
      files:[{
        name:'',
      }],
    }
  },
  methods: {

  },
  mounted() {
    if(this.commonStore.member.type === this.getField('member_type','외국인')){
      this.isForeigner = true;
      this.files = JSON.parse(this.commonStore.member.foreigner_file);
    }
    if(this.commonStore.member.type === this.getField('member_type','기업')){
      this.isCompany = true;
      this.files = JSON.parse(this.commonStore.member.company_file);
    }
  }
}
</script>
