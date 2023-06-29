<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">회원정보 수정</p>

        <div class="profile-edit">
          <div class="profile-info">
            <img src="/image/mypage/temp/image.png" class="profile-img" v-if="this.profile_file.length === 0 && this.profile_file_new.length === 0"/>
            <img :src="this.getImagePath(this.profile_file[0].path)" class="profile-img" v-else-if="this.profile_file_new.length === 0" />
            <img :src="this.profile_file_new[0].preview" class="profile-img" v-else />
            <img src="/image/mypage/camerabtn.png" class="camera-icon" @click.prevent="addFiles('profile_file_new')"/>
            <input id="profile_file_new" name="profile_file_new" ref="profile_file_new" class="hidden" type="file" @change="handleChange($event)" accept="image/*" />
          </div>

          <div class="field-wrap">
            <!-- 닉네임 -->
            <div class="field" v-if="!this.isCompany">
              <p class="input-title">닉네임</p>
              <div class="input-wrap">
                <div class="field_input">
                  <input type="text" placeholder="닉네임을 입력해주세요." v-model="this.nick_name">
                </div>
                <div class="check-btn btn btn3" @click="checkDupleNickName">중복확인</div>
              </div>
              <p :class="this.nick_name_check ? 'yes' : 'no'" v-if="this.nick_name_request">
                {{ this.nick_name_check ? '사용 가능한 닉네임입니다.' : '사용 불가능한 닉네임입니다.' }}
              </p>
            </div>

            <!-- 휴대폰 번호 -->
            <div class="field">
              <p class="input-title">휴대폰번호</p>
              <div class="input-wrap">
                <div class="field_input">
                  <input type="phone" placeholder="휴대폰 번호" v-model="this.phone_number">
                </div>
                <div class="check-btn btn btn3" v-if="false"> <!--TODO 휴대폰인증-->
                  인증번호 전송
                </div>
              </div>
              <p class="time" v-if="false">남은시간 01:44</p>
              <div class="input-wrap check-phone" v-if="false">
                <div class="field_input">
                  <input type="number" placeholder="인증번호">
                </div>
                <div class="check-btn btn" :class="true ? 'btn2' : 'btn3'">{{ true ? '인증됨' : '인증번호 확인' }}</div>
              </div>
            </div>

            <!-- 주소 -->
            <div class="field">
              <p class="input-title">주소</p>
              <div class="input-wrap">
                <div class="field_input">
                  <input type="address" name="address" placeholder="주소 입력" v-model="this.address">
                </div>
                <div class="check-btn btn btn3">
                  주소 찾기
                </div>
              </div>
              <div class="input-wrap">
                <div class="field_input">
                  <input type="addredd" name="address-detail" placeholder="상세주소 입력" v-model="this.address_detail">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="next-btn-wrap">
          <div class="btn btn1" @click="this.modify">
            완료
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
      isForeigner:false,
      isCompany:false,
      nick_name_request:false,
      nick_name_check:false,
      profile_file:[],
      profile_file_new:[],
      nick_name:'',
      phone_number:'',
      address:'',
      address_detail:'',
      foreigner_number:'',
      foreigner_file:[],
      foreigner_file_new:[],
      company_name:'',
      company_owner_name:'',
      company_phone_number:'',
      company_number:'',
      company_file:[],
      company_file_new:[],
    }
  },
  methods: {
    addFiles(obj) {
      this.$refs[obj].click();
    },
    handleChange(event) {
      // console.log(`${obj} handleChange`, obj, this.$refs.new_images.files);
      // console.log("handleChange", event.target.files);
      let uploadedFiles = event.target.files;
      /*
        Adds the uploaded file to the files array
      */
      if(event.target.id === 'profile_file_new'){
        this.profile_file = [];
      }
      this[event.target.id] = [];
      for (var i = 0; i < uploadedFiles.length; i++) {
        uploadedFiles[i].preview = URL.createObjectURL(uploadedFiles[i]);
        this[event.target.id].push(uploadedFiles[i]);
        //console.log(`upload file`, this[event.target.id], uploadedFiles[i]);
      }
    },
    removeFile(target_files) {
      this[target_files] = [];
    },
    checkDupleNickName(){
      if(this.nick_name === ''){
        alert('닉네임을 입력해주세요.');
        return;
      }
      let params = {
        searchType: 'nick_name',
        nick_name: this.nick_name,
      }

      this.commonStore.duple(params).then((resp) => {
        if (resp.data.code == 200 && resp.data.body) {
          this.nick_name_check = true;
        } else {
          this.nick_name_check = false;
        }
        this.nick_name_request = true;
      }).catch(err => {
        console.log("err", err);
      });
    },
    modify(){
      let paramData = new FormData();

      if(!this.isCompany && !this.nick_name_request){
        alert('닉네임 중복체크를 해주세요.');
        return;
      } else {
        if(this.nick_name_request && !this.nick_name_check){
          alert('중복된 닉네임입니다. 다시 입력해주세요.');
          return;
        } else {
          paramData.append("nick_name", this.nick_name);
        }
      }

      if(this.phone_number === '' || this.address === '' || this.address_detail === ''){
        alert('필수값을 입력해주세요.');
        return;
      } else {
        paramData.append("phone_number", this.phone_number);
        paramData.append("address", this.address);
        paramData.append("address_detail", this.address_detail);
        this.profile_file_new.forEach((element, index) => {
          paramData.append(`profile_file_new`, element);
        });
      }

      if(this.isForeigner){ // 외국인일 경우
        if(this.foreigner_number === ''){
          alert('필수값을 입력해주세요.');
          return;
        } else {
          paramData.append("foreigner_number", this.foreigner_number);
          this.foreigner_file_new.forEach((element, index) => {
            paramData.append(`foreigner_file_new`, element);
          });
        }
      }

      if(this.isCompany){ // 기업인 경우
        if(this.company_name === '' || this.company_owner_name === '' || this.company_number === '' || this.company_phone_number === ''){
          alert('필수값을 입력해주세요.');
          return;
        } else {
          paramData.append("company_name", this.company_name);
          paramData.append("company_owner_name", this.company_owner_name);
          paramData.append("company_number", this.company_number);
          paramData.append("company_phone_number", this.company_phone_number);
          this.company_file_new.forEach((element, index) => {
            paramData.append(`company_file_new`, element);
          });
        }
      }

      this.memberStore.modify(this.commonStore.member.member, paramData).then((resp) => {
        if (resp.data.code == 200) {
          alert('수정되었습니다.');
          this.$router.push({name:'Mypage'});
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
  },
  mounted() {
    this.profile_file = JSON.parse(this.commonStore.member.profile_file);
    this.nick_name = this.commonStore.member.nick_name;
    this.phone_number = this.commonStore.member.phone_number;
    this.address = this.commonStore.member.address;
    this.address_detail = this.commonStore.member.address_detail;
    this.foreigner_number = this.commonStore.member.foreigner_number;
    this.foreigner_file = JSON.parse(this.commonStore.member.foreigner_file);
    this.company_name = this.commonStore.member.company_name;
    this.company_owner_name = this.commonStore.member.company_owner_name;
    this.company_phone_number = this.commonStore.member.company_phone_number;
    this.company_number = this.commonStore.member.company_number;
    this.company_file = JSON.parse(this.commonStore.member.company_file);
  }
}
</script>
