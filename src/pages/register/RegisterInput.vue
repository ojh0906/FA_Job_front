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
                            <input type="text" name="email1" placeholder="이메일주소">
                            <span>@</span>
                            <label class="input-email" for="email2">
                                <input placeholder="직접 입력" name="email2" type="text" />
                                <img @click="this.selectEmail = !this.selectEmail" class="down-icon"
                                    src="/image/input/down.png" />
                            </label>
                            <div v-if="this.selectEmail"
                                :class="[this.selectEmail ? 'select-on' : 'select-off', 'select-email']">
                                <p class="email-option" v-for="v in 5">naver</p>
                            </div>
                        </div>
                        <div class="check-btn btn btn3">중복확인</div>
                    </div>
                    <p :class="false ? 'yes' : 'no'">{{ false ? '사용 가능한 아이디입니다.' : '사용 불가능한 아이디입니다.' }}</p>
                </div>

                <div class="field" v-if="!this.isCompany">
                    <p class="input-title">닉네임</p>
                    <div class="input-wrap">
                        <div class="field_input">
                            <input type="text" placeholder="닉네임을 입력해주세요.">
                        </div>
                        <div class="check-btn btn btn3">중복확인</div>
                    </div>
                    <p :class="true ? 'yes' : 'no'">{{ true ? '사용 가능한 닉네임입니다.' : '사용 불가능한 닉네임입니다.' }}</p>
                </div>

                <div class="field">
                    <p class="input-title">비밀번호</p>
                    <div class="input-wrap">
                        <div class="field_input">
                            <input class="userpw" type="password" placeholder="비밀번호 입력해주세요.">
                        </div>
                    </div>

                </div>

                <div class="field">
                    <p class="input-title">비밀번호 확인</p>
                    <div class="input-wrap">
                        <div class="field_input">
                            <input class="userpw_confirm" type="password" placeholder="비밀번호 확인" />
                        </div>
                    </div>
                    <p :class="false ? 'yes' : 'no'">{{ false ? '비밀번호가 일치합니다' : '비밀번호가 일치하지 않습니다.' }}</p>
                </div>

                <div class="field" v-if="!this.isCompany">
                    <p class="input-title">이름</p>
                    <div class="field_input">
                        <input type="text" placeholder="이름">
                    </div>
                </div>

                <!-- 기업일 경우 -->
                <div class="field" v-if="this.isCompany">
                    <p class="input-title">기업명</p>
                    <div class="field_input">
                        <input type="text" placeholder="기업 이름을 입력해주세요.">
                    </div>
                </div>

                <!-- 기업일 경우 -->
                <div class="field" v-if="this.isCompany">
                    <p class="input-title">대표자명</p>
                    <div class="field_input">
                        <input type="text" placeholder="대표자 명을 입력해주세요.">
                    </div>
                </div>

                <!-- 기업일 경우 -->
                <div class="field" v-if="this.isCompany">
                    <p class="input-title">인사 담당자명</p>
                    <div class="field_input">
                        <input type="text" placeholder="인사 담당자 명을 입력해주세요.">
                    </div>
                </div>
            </div>


            <!-- 오른쪽 컨텐츠 생년월일 / 휴대폰 / 주소 -->
            <div class="field-wrap">
                <div class="field" v-if="!this.isCompany">
                    <p class="input-title">생년월일</p>
                    <div class="input-wrap">

                        <div class="field_input">
                            <input type="text" placeholder="YYYY.MM.DD">
                        </div>
                    </div>
                </div>

                <div class="field">
                    <p class="input-title">{{ this.isCompany ? '인사 담당자 휴대번호' : '휴대폰번호' }}</p>
                    <div class="input-wrap">
                        <div class="field_input">
                            <input type="phone" placeholder="휴대폰 번호">
                        </div>
                        <div class="check-btn btn btn3">
                            인증번호 전송
                        </div>
                    </div>
                    <p class="time">남은시간 01:44</p>
                    <div class="input-wrap check-phone">
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
                        <input type="text" placeholder="회사 연락처를 입력해주세요.">
                    </div>
                </div>

                <div class="field">
                    <p class="input-title">{{ this.isCompany ? '사업장 주소' : '주소' }}</p>
                    <div class="input-wrap">
                        <div class="field_input">
                            <input type="address" name="address" placeholder="주소 입력">
                        </div>
                        <div class="check-btn btn btn3" @click="search()">
                            주소 찾기
                        </div>
                    </div>
                    <div class="input-wrap">
                        <div class="field_input">
                            <input type="addredd" name="address-detail" placeholder="상세주소 입력">
                        </div>
                    </div>
                </div>

                <!-- 기업일 경우 -->
                <div class="field" v-if="this.isCompany">
                    <p class="input-title">사업자등록번호 입력</p>
                    <div class="input-wrap">
                        <div class="field_input">
                            <input type="text" placeholder="사업자등록번호를 입력해주세요.">
                        </div>
                        <div class="check-btn btn btn3">인증하기</div>
                    </div>
                </div>


                <!-- 기업일 경우 -->
                <div class="field" v-if="this.isCompany">
                    <p class="input-title">사업자등록증 <span>(사업자 등록증 확인 후 문제가 있을 시 플랫폼 사용이 제한될 수 있습니다.)</span></p>
                    <div class="input-wrap">
                        <div class="field_file">
                            <div class="file-wrap">
                                <img class="file-icon" src="/image/input/Attach.png" />
                                <p>사업자등록증.jpg</p>
                                <img class="del-icon" src="/image/input/del.png" />
                            </div>
                        </div>
                        <div class="check-btn btn btn3 file-btn">파일 업로드</div>
                    </div>
                </div>

                <!-- 외국인일 경우 -->
                <div class="field" v-if="this.isForeigner">
                    <p class="input-title">외국인등록번호</p>
                    <div class="input-wrap">
                        <div class="field_input">
                            <input type="text" placeholder="외국인등록번호를 입력해주세요.">
                        </div>
                        <div class="check-btn btn btn3">인증하기</div>
                    </div>
                </div>

                <!-- 외국인일 경우 -->
                <div class="field" v-if="this.isForeigner">
                    <p class="input-title">외국인등록증</p>
                    <div class="input-wrap">
                        <div class="field_file">
                            <div class="file-wrap">
                                <img class="file-icon" src="/image/input/Attach.png" />
                                <p>외국인등록증.jpg</p>
                                <img class="del-icon" src="/image/input/del.png" />
                            </div>
                        </div>
                        <div class="check-btn btn btn3 file-btn">파일 업로드</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="next">
            <div class="btn btn4" @click="$router.go(-1)">이전</div>
            <router-link :to="{ name: 'RegisterEnd' }">
                <div class="btn btn1">완료</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import RegisterHeader from '/src/components/register/Header.vue';

export default {
    data() {
        return {
            selectEmail: false,
            isCompany: true, // 기업 회원가입
            isForeigner: false, // 외국인 회원가입
        }
    },
    components: {
        RegisterHeader
    },
    methods: {
        clickSelect(event) {
            if (!event.target.classList.contains('select-email') && !event.target.classList.contains('down-icon')) {
                this.selectEmail = false;
            }
        },
      search(){ //@click을 사용할 때 함수는 이렇게 작성해야 한다.
        new window.daum.Postcode({
          oncomplete: (data) => { //function이 아니라 => 로 바꿔야한다.
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
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
            document.getElementById("roadAddress").value = roadAddr;
            // document.getElementById("jibunAddress").value = data.jibunAddress;

            // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
            if(roadAddr !== ''){
              document.getElementById("extraAddress").value = extraRoadAddr;
            } else {
              document.getElementById("extraAddress").value = '';
            }

            var guideTextBox = document.getElementById("guide");
            // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
            if(data.autoRoadAddress) {
              var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
              guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
              guideTextBox.style.display = 'block';

            } else if(data.autoJibunAddress) {
              var expJibunAddr = data.autoJibunAddress;
              guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
              guideTextBox.style.display = 'block';
            } else {
              guideTextBox.innerHTML = '';
              guideTextBox.style.display = 'none';
            }
          }
        }).open();
      }

    },
    mounted() {
    }
}
</script>

