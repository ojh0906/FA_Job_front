<template>
  <div class="register_section" @click="clickSelect">
    <!--회원가입 순서-->
    <RegisterHeader step="3" />

    <!-- 정보 입력 페이지 내/외국인 구분 필요(동일 페이지, 외국인일 경우 등록증 입력창 보여야 함 -->
    <!-- 정보 입력 -->
    <div class="local_input_box">
      <div class="field-wrap">
        <div class="field">
          <p class="input-title">아이디</p>
          <div class="input-wrap">
            <div class="field_input field_input_email">
              <input type="text" name="email1" placeholder="이메일주소" v-model="this.email1" @change="this.email_request = false; this.checkEmail();">
              <span>@</span>
              <label class="input-email" for="email2">
                <input placeholder="직접 입력" name="email2" type="text" v-model="this.email2" @change="this.email_request = false; this.checkEmail();" />
                <img @click="this.selectEmail = !this.selectEmail" class="down-icon"
                     src="/image/input/down.png" />
              </label>
              <div v-if="this.selectEmail"
                   :class="[this.selectEmail ? 'select-on' : 'select-off', 'select-email']">
                <p class="email-option" v-for="v in this.email_list" @click="this.email2 = v">{{ v }}</p>
              </div>
            </div>
            <div class="check-btn btn btn3" @click="checkDupleEmail">중복확인</div>
          </div>
          <p :class="this.email_check ? 'yes' : 'no'" v-if="this.email_request">
            {{ this.email_check ? '사용 가능한 아이디입니다.' : '사용 불가능한 아이디입니다.' }}
          </p>
          <p class="no">
            {{ this.email_reg_check ? '정확한 이메일을 입력해주세요.' : '' }}
          </p>
        </div>

        <div class="field" v-if="!this.isCompany">
          <p class="input-title">닉네임</p>
          <div class="input-wrap">
            <div class="field_input">
              <input type="text" placeholder="닉네임을 입력해주세요." v-model="this.nick_name" @change="this.nick_name_request = false;" >
            </div>
            <div class="check-btn btn btn3" @click="checkDupleNickName">중복확인</div>
          </div>
          <p :class="this.nick_name_check ? 'yes' : 'no'" v-if="this.nick_name_request">
            {{ this.nick_name_check ? '사용 가능한 닉네임입니다.' : '사용 불가능한 닉네임입니다.' }}
          </p>
        </div>

        <div class="field">
          <p class="input-title">비밀번호</p>
          <div class="input-wrap">
            <div class="field_input">
              <input class="userpw" type="password" placeholder="비밀번호 입력해주세요." v-model="this.password" @change="checkPw">
            </div>
          </div>
          <p class="no">
            {{ this.password_reg_check ? '영문 숫자 특수기호(!@#$%^*+=-) 조합 8자리 이상 입력' : '' }}
          </p>
        </div>

        <div class="field">
          <p class="input-title">비밀번호 확인</p>
          <div class="input-wrap">
            <div class="field_input">
              <input class="userpw_confirm" type="password" placeholder="비밀번호 확인" v-model="this.password2" />
            </div>
          </div>
          <p :class="this.password === this.password2 ? 'yes' : 'no'" v-if="this.password !== '' && this.password2 !== ''">
            {{ this.password === this.password2 ? '비밀번호가 일치합니다' : '비밀번호가 일치하지 않습니다.' }}
          </p>
        </div>

        <div class="field" v-if="!this.isCompany">
          <p class="input-title">이름</p>
          <div class="input-wrap">
            <div class="field_input">
              <input type="text" placeholder="이름" v-model="this.name">
            </div>
            <div class="check-btn btn btn3">
              본인인증
            </div>
          </div>
        </div>

        <!-- 기업일 경우 -->
        <div class="field" v-if="this.isCompany">
          <p class="input-title">기업명</p>
          <div class="field_input">
            <input type="text" placeholder="기업 이름을 입력해주세요." v-model="this.company_name">
          </div>
        </div>

        <!-- 기업일 경우 -->
        <div class="field" v-if="this.isCompany">
          <p class="input-title">대표자명</p>
          <div class="field_input">
            <input type="text" placeholder="대표자 명을 입력해주세요." v-model="this.company_owner_name">
          </div>
        </div>

        <!-- 기업일 경우 -->
        <div class="field" v-if="this.isCompany">
          <p class="input-title">인사 담당자명</p>
          <div class="input-wrap">
            <div class="field_input">
              <input type="text" placeholder="인사 담당자 명을 입력해주세요." v-model="this.name">
            </div>
            <div class="check-btn btn btn3">
              본인인증
            </div>
          </div>
        </div>
      </div>


      <!-- 오른쪽 컨텐츠 생년월일 / 휴대폰 / 주소 -->
      <div class="field-wrap">
        <div class="field" v-if="!this.isCompany">
          <p class="input-title">생년월일</p>
          <div class="input-wrap">

            <div class="field_input">
              <input type="text" placeholder="YYYYMMDD" v-model="this.birth">
            </div>
          </div>
        </div>

        <div class="field">
          <p class="input-title">{{ this.isCompany ? '인사 담당자 휴대번호' : '휴대폰번호' }}</p>
          <div class="input-wrap">
            <div class="field_input">
              <input type="phone" placeholder="휴대폰 번호" v-model="this.phone_number">
            </div>
            <div class="check-btn btn btn3" v-if="false">
              인증번호 전송
            </div>
          </div>
          <p class="time" v-if="false">남은시간 01:44</p>
          <div class="input-wrap check-phone" v-if="false"><!--TODO 휴대폰인증 -->
            <div class="field_input">
              <input type="number" placeholder="인증번호">
            </div>
            <div class="check-btn btn" :class="true ? 'btn2' : 'btn3'">{{ true ? '인증됨' : '인증번호 확인' }}</div>
          </div>
        </div>

        <!-- 기업일 경우 -->
        <div class="field" v-if="this.isCompany">
          <p class="input-title">회사 연락처</p>
          <div class="field_input">
            <input type="text" placeholder="회사 연락처를 입력해주세요." v-model="this.company_phone_number">
          </div>
        </div>

        <div class="field">
          <p class="input-title">{{ this.isCompany ? '사업장 주소' : '주소' }}</p>
          <div class="input-wrap">
            <div class="field_input">
              <input type="address" id="roadAddress" name="address" placeholder="주소 입력" v-model="this.address" readonly @click="search()">
            </div>
            <div class="check-btn btn btn3" @click="search()">
              주소 찾기
            </div>
          </div>
          <div class="input-wrap">
            <div class="field_input">
              <input type="text" name="address-detail" placeholder="상세주소 입력" v-model="this.address_detail">
            </div>
          </div>
        </div>

        <!-- 기업일 경우 -->
        <div class="field" v-if="this.isCompany">
          <p class="input-title">사업자등록번호 입력</p>
          <div class="input-wrap">
            <div class="field_input">
              <input type="text" placeholder="사업자등록번호를 입력해주세요." v-model="this.company_number">
            </div>
            <div class="check-btn btn btn3" v-if="false">인증하기</div> <!-- TODO 사업자등록번호 인증-->
          </div>
        </div>


        <!-- 기업일 경우 -->
        <div class="field" v-if="this.isCompany">
          <p class="input-title">사업자등록증 <span>(사업자 등록증 확인 후 문제가 있을 시 플랫폼 사용이 제한될 수 있습니다.)</span></p>
          <div class="input-wrap">
            <div class="field_file">
              <div class="file-wrap" v-if="this.company_file_new.length !== 0">
                <img class="file-icon" src="/image/input/Attach.png" />
                <p>{{ this.company_file_new[0].name }}</p>
                <img class="del-icon" src="/image/input/del.png" @click="removeFile('company_file_new')"/>
              </div>
            </div>
            <input id="company_file_new" name="company_file_new" ref="company_file_new" class="hidden" type="file" @change="handleChange($event)" />
            <div class="check-btn btn btn3 file-btn" @click.prevent="addFiles('company_file_new')">파일 업로드</div>
          </div>
        </div>

        <!-- 외국인일 경우 -->
        <div class="field" v-if="this.isForeigner">
          <p class="input-title">외국인등록번호</p>
          <div class="input-wrap">
            <div class="field_input">
              <input type="text" placeholder="외국인등록번호를 입력해주세요." v-model="this.foreigner_number">
            </div>
            <div class="check-btn btn btn3" v-if="false">인증하기</div> <!-- TODO 외국인등록번호 인증-->
          </div>
        </div>

        <!-- 외국인일 경우 -->
        <div class="field" v-if="this.isForeigner">
          <p class="input-title">외국인등록증</p>
          <div class="input-wrap">
            <div class="field_file">
              <div class="file-wrap" v-if="this.foreigner_file_new.length !== 0">
                <img class="file-icon" src="/image/input/Attach.png" />
                <p>{{ this.foreigner_file_new[0].name }}</p>
                <img class="del-icon" src="/image/input/del.png" @click="removeFile('foreigner_file_new')"/>
              </div>
            </div>
            <input id="foreigner_file_new" name="foreigner_file_new" ref="foreigner_file_new" class="hidden" type="file" @change="handleChange($event)" />
            <div class="check-btn btn btn3 file-btn" @click.prevent="addFiles('foreigner_file_new')">파일 업로드</div>
          </div>
        </div>
      </div>
    </div>

    <div class="next">
      <div class="btn btn4" @click="$router.go(-1)">이전</div>
      <div class="btn btn1" @click="save">완료</div>
    </div>
  </div>
</template>

<script>
import RegisterHeader from '/src/components/register/Header.vue';
import { useCommonStore } from '@/_stores';

export default {
  components: {
    RegisterHeader
  },
  setup() {
    const commonStore = useCommonStore()
    const email_list = [
        'naver.com','kakao.com','gmail.com'
    ]
    return {
      commonStore,
      email_list
    };
  },
  data() {
    return {
      selectEmail: false,
      isCompany: false, // 기업 회원가입
      isForeigner: false, // 외국인 회원가입
      type:0,
      event_info_yn:false,
      email1:'',
      email2:'',
      email_reg_check:false,
      password:'',
      password2:'',
      password_reg_check:false,
      name:'',
      birth:'',
      phone_number:'',
      address:'',
      address_detail:'',
      nick_name:'',
      foreigner_number: '',
      foreigner_file_new:[],
      company_name:'',
      company_owner_name:'',
      company_phone_number:'',
      company_number:'',
      company_file_new:[],
      email_request:false,
      email_check: false,
      nick_name_check: false,
      nick_name_request: false,
    }
  },
  methods: {
    clickSelect(event) {
      if (!event.target.classList.contains('select-email') && !event.target.classList.contains('down-icon')) {
        this.selectEmail = false;
      }
    },
    search(){ //@click을 사용할 때 함수는 이렇게 작성해야 한다.
      new window.daum.Postcode({
        oncomplete: (data) => {
          var roadAddr = data.roadAddress; // 도로명 주소 변수
          var extraRoadAddr = ''; // 참고 항목 변수
          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
            extraRoadAddr += data.bname;
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if(data.buildingName !== '' && data.apartment === 'Y'){
            extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }
          // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if(extraRoadAddr !== ''){
            extraRoadAddr = ' (' + extraRoadAddr + ')';
          }
          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          // document.getElementById('postcode').value = data.zonecode;
          this.address = roadAddr
          // document.getElementById("roadAddress").value = roadAddr;
          // document.getElementById("jibunAddress").value = data.jibunAddress;
        }
      }).open();
    },
    checkDupleEmail(){
      if(this.email1 === '' || this.email2 === ''){
        alert('이메일을 입력해주세요.');
        return;
      }

      if(this.email_reg_check){
        alert('정확한 이메일을 입력해주세요.');
        return;
      }
      let params = {
        searchType: 'email',
        email: this.email1 + '@' + this.email2,
      }

      this.commonStore.duple(params).then((resp) => {
        if (resp.data.code == 200 && resp.data.body) {
          this.email_check = true;
        } else {
          this.email_check = false;
        }
        this.email_request = true;
      }).catch(err => {
        console.log("err", err);
      });
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
    save(){
      let paramData = new FormData();
      paramData.append("type", this.type);
      paramData.append("event_info_yn", this.event_info_yn);

      if(!this.email_request){
        alert('이메일 중복체크를 해주세요.');
        return;
      } else {
        if(!this.email_check){
          alert('중복된 이메일입니다. 다시 입력해주세요.');
          return;
        } else {
          paramData.append("email", this.email1 + '@' + this.email2);
        }
      }
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

      if(this.password !== this.password2){
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      if(this.password_reg_check){
        alert('비밀번호를 다시 입력해주세요.');
        return;
      }

      if(this.password === '' || this.password2 === '' || this.name === '' || this.birth === '' || this.phone_number === '' || this.address === '' || this.address_detail === ''){
        alert('필수값을 입력해주세요.');
        return;
      } else {
        paramData.append("password", this.password);
        paramData.append("name", this.name);
        paramData.append("birth", this.birth);
        paramData.append("phone_number", this.phone_number);
        paramData.append("address", this.address);
        paramData.append("address_detail", this.address_detail);
      }

      if(this.isForeigner){ // 외국인일 경우
        if(this.foreigner_number === '' || this.foreigner_file_new.length === 0){
          alert('필수값을 입력해주세요.');
          return;
        } else {
          paramData.append("state", this.getField('member_state','미승인')); // 외국인은 승인 필요
          paramData.append("foreigner_yn", this.isForeigner);
          paramData.append("foreigner_number", this.foreigner_number);
          this.foreigner_file_new.forEach((element, index) => {
            paramData.append(`foreigner_file_new`, element);
          });
        }
      } else {
        paramData.append("state", this.getField('member_state','승인'));
      }

      if(this.isCompany){ // 기업인 경우
        if(this.company_name === '' || this.company_owner_name === '' || this.company_number === '' || this.company_phone_number === '' || this.company_file_new.length === 0){
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

      this.commonStore.save(paramData).then((resp) => {
        if (resp.data.code == 200) {
          let query = {
            nick_name: this.nick_name
          }
          if(this.isForeigner){
            query.isForeigner = this.isForeigner;
          }
          this.$router.push({name:'RegisterEnd', query:query})
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
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
      this[event.target.id] = [];
      for (var i = 0; i < uploadedFiles.length; i++) {
        //uploadedFiles[i].preview = URL.createObjectURL(uploadedFiles[i]);
        this[event.target.id].push(uploadedFiles[i]);
        //console.log(`upload file`, this[event.target.id], uploadedFiles[i]);
      }
    },
    removeFile(target_files) {
      this[target_files] = [];
    },
    checkPw(){
      let reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
      this.password_reg_check = !reg.test(this.password);
    },
    checkEmail(){
      let reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      this.email_reg_check = !reg.test(this.email1 + '@' + this.email2);
    }
  },
  mounted() {
    if(this.$route.query.type == null || this.$route.query.event_info_yn == null){
      alert('잘못된 접근입니다.');
      this.$router.push({name:'RegisterType'})
    } else {
      this.type = this.$route.query.type;
      if(this.type == this.getField('member_type', '기업')){
        this.isCompany = true;
      } else if(this.type == this.getField('member_type', '외국인')){
        this.isForeigner = true;
      }
      this.event_info_yn = this.$route.query.event_info_yn;
    }
  }
}
</script>

