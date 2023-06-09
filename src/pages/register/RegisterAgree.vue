<template>
    <div id="register_section" @click="clickSelect">
        <!-- 회원가입 헤더 -->
        <RegisterHeader step="2" />

        <!-- 약관동의 -->
        <div class="agree">
            <aside class="agree-wrap">
                <!-- 서비스이용약관 -->
                <div class="agree_box agree_box01">
                    <div class="title">
                        <ul class="agree-select">
                            <div class="agree-select-wrap" @click="onSelect(1)">
                                <div class="check-text">
                                    <input type="checkbox" required name="service" />
                                    <li class="h3">서비스 이용약관 (필수)</li>
                                </div>
                                <li class="dropdown">
                                    <img class="dropdown-img" src="/image/register/down.png" alt="드롭다운아이콘입니다.">
                                </li>
                            </div>
                            <div class="select-box" :class="this.agree_select1 ? 'select-on ' : 'select-off'">
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                            </div>
                        </ul>
                    </div>
                </div>

                <!-- 개인정보처리방침 -->
                <div class="agree_box agree_box02">
                    <div class="title">
                        <ul class="agree-select">
                            <div class="agree-select-wrap" @click="onSelect(2)">
                                <div class="check-text">
                                    <input type="checkbox" required name="service" />
                                    <li class="h3">개인정보처리방침 (필수)</li>
                                </div>
                                <li class="dropdown">
                                    <img class="dropdown-img" src="/image/register/down.png" alt="드롭다운아이콘입니다.">
                                </li>
                            </div>
                            <div class="select-box" :class="this.agree_select2 ? 'select-on ' : 'select-off'">
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                            </div>
                        </ul>
                    </div>
                </div>

                <!-- 이벤트 정보 수집 동의 -->
                <div class="agree_box agree_box03">
                    <div class="title">
                        <ul class="agree-select">
                            <div class="agree-select-wrap" @click="onSelect(3)">
                                <div class="check-text">
                                    <input type="checkbox" name="service" />
                                    <li class="h3">이벤트 정보 수집 동의 (선택)</li>
                                </div>
                                <li class="dropdown">
                                    <img class="dropdown-img" src="/image/register/down.png" alt="드롭다운아이콘입니다.">
                                </li>
                            </div>
                            <div class="select-box" :class="this.agree_select3 ? 'select-on ' : 'select-off'">
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                                이벤트 수집 동의 문구 내용이 들어가는 영역입니다.<br>
                            </div>
                        </ul>
                    </div>
                </div>

                <!-- 이벤트 정보 수집 동의 -->
                <div class="agree_box agree_box04">
                    <div class="title">
                        <ul>
                            <div class="check-text">
                                <input type="checkbox" name="service" />
                                <li class="h3">전체동의</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </aside>

            <!-- 정보 입력 페이지 내/외국인 구분 필요(동일 페이지) -->
            <div class="agree_next">
                <router-link :to="{ name: 'RegisterInput' }">
                    <p>다음</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import RegisterHeader from '/src/components/register/Header.vue';

export default {
    data() {
        return {
            agree_select1: false,
            agree_select2: false,
            agree_select3: false,
        }
    },
    components: {
        RegisterHeader
    },
    methods: {
        onSelect(num) {
            if (num == 1) {
                this.agree_select1 = !this.agree_select1
                this.agree_select2 = false;
                this.agree_select3 = false;
            } else if (num == 2) {
                this.agree_select2 = !this.agree_select2
                this.agree_select1 = false;
                this.agree_select3 = false;
            } else if (num == 3) {
                this.agree_select3 = !this.agree_select3
                this.agree_select1 = false;
                this.agree_select2 = false;
            }
        },
        clickSelect(event) {
            if (!event.target.classList.contains('select-box') && !event.target.classList.contains('h3') && !event.target.classList.contains('dropdown-img')) {
                this.agree_select1 = false;
            }
        },
    },
    mounted() {
    }
}

</script>
