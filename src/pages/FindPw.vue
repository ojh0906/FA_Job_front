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
                            <input class="userpw" type="text" placeholder="아이디">
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div class="input-wrap">
                        <div class="field_input">
                            <label class="input-check">
                                <input class="pw" type="phone" placeholder="휴대폰 번호">
                                <div class="btn btn2">
                                    인증번호 전송
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="field">
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
            <div class="btn btn1" v-if="!this.checkPw" @click="this.checkPw = true">비밀번호 찾기</div>

            <!-- 비밀번호 찾기 결과 -->
            <div v-if="this.checkPw">
                <div class="text-box text-box2 blue-box">
                    비밀번호를 변경합니다.
                </div>

                <div class="field-wrap">
                    <div class="field">
                        <div class="input-wrap">
                            <div class="field_input">
                                <input class="userpw" type="text" placeholder="영문, 숫자, 특수문자 포함 8자 이상">
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="input-wrap">
                            <div class="field_input">
                                <input class="userpw" type="text" placeholder="비밀번호 확인">
                            </div>
                        </div>
                        <p :class="false ? 'yes' : 'no'">{{ false ? '비밀번호가 일치합니다' : '비밀번호가 일치하지 않습니다.' }}</p>
                    </div>
                </div>
            </div>
            <router-link :to="{ name: 'Login' }" v-if="this.checkPw">
                <div class="btn btn1">완료</div>
            </router-link>
        </article>
    </section>
</template>

<script>
export default {
    data() {
        return {
            checkPw: false,
        }
    }
}
</script>

<style></style>