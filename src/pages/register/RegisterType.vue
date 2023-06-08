<template>
    <div id="register_section">
        <!-- 회원가입 헤더 -->
        <RegisterHeader step="1" />

        <div class="join_member">
            <p class="title">가입 유형을 선택해주세요.</p>
            <ul>
                <li class="join01">
                    <router-link :to="{ name: '', query: {} }">
                        <i class="i_icon"></i>
                        <p>
                            <strong class="bold">일반</strong> 회원가입
                        </p>
                        <span class="btn">가입하기</span>
                    </router-link>
                </li>
                <li class="join02">
                    <router-link :to="{ name: '', query: {} }">

                        <i class="i_icon"></i>
                        <p>
                            <strong class="bold">외국인</strong> 회원가입
                        </p>
                        <span class="btn">가입하기</span>
                    </router-link>
                </li>
                <li class="join03">
                    <router-link :to="{ name: '', query: {} }">

                        <i class="i_icon"></i>
                        <p>
                            <strong class="bold">기업</strong> 회원가입
                        </p>
                        <span class="btn">가입하기</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import RegisterHeader from '/src/components/register/Header.vue';

export default {
    data() {
        return {
        }
    },
    components: {
        RegisterHeader
    },
}    
</script>
