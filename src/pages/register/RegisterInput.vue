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

                <div class="field">
                    <p class="input-title">닉네임</p>
                    <div class="input-wrap">
                        <div class="field_input">
                            <input type="text" placeholder="닉네임">
                        </div>
                        <div class="check-btn btn btn3">중복확인</div>
                    </div>
                    <p :class="true ? 'yes' : 'no'">{{ true ? '사용 가능한 닉네임입니다.' : '사용 불가능한 닉네임입니다.' }}</p>
                </div>

                <div class="field">
                    <p class="input-title">비밀번호</p>
                    <div class="input-wrap">
                        <div class="field_input">
                            <input class="userpw" type="password" placeholder="비밀번호 입력">
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

                <div class="field">
                    <p class="input-title">이름</p>
                    <div class="field_input">
                        <input type="text" placeholder="이름">
                    </div>
                </div>
            </div>


            <!-- 오른쪽 컨텐츠 생년월일 / 휴대폰 / 주소 -->
            <div class="field-wrap">
                <div class="field">
                    <p class="input-title">생년월일</p>
                    <div class="input-wrap">

                        <div class="field_input">
                            <input type="text" placeholder="YYYY.MM.DD">
                        </div>
                    </div>
                </div>


                <div class="field">
                    <p class="input-title">휴대폰번호</p>
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
                        <div class="check-btn btn btn3" :class="true ? 'checked' : ''">인증번호 확인</div>
                    </div>
                </div>

                <div class="field">
                    <p class="input-title">주소</p>
                    <div class="input-wrap">
                        <div class="field_input">
                            <input type="address" name="address" placeholder="주소 입력">
                        </div>
                        <div class="check-btn btn btn3">
                            주소 찾기
                        </div>
                    </div>
                    <div class="input-wrap">
                        <div class="field_input">
                            <input type="addredd" name="address-detail" placeholder="상세주소 입력">
                        </div>
                    </div>
                </div>

                <!-- 외국인일 경우 -->
                <div class="field" v-if="true">
                    <p class="input-title">외국인등록번호</p>
                    <div class="input-wrap">
                        <div class="field_input">
                            <input type="text" placeholder="외국인등록번호 입력">
                        </div>
                        <div class="check-btn btn btn3">인증하기</div>
                    </div>
                </div>

                <!-- 외국인일 경우 -->
                <div class="field" v-if="true">
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
            <div class="btn btn4">이전</div>
            <div class="btn btn1">완료</div>
        </div>
    </div>
</template>

<script>
import RegisterHeader from '/src/components/register/Header.vue';

export default {
    data() {
        return {
            selectEmail: false,
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
        }
    },
    mounted() {
    }
}    
</script>

