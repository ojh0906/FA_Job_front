<template>
    <!-- TODO : 팀 팝업 -->
    <article class="popup-box-wrap popup-applicant-wrap">
        <div class="popup-title">
            <p>
                팀이름
            </p>
            <img class="close-icon" @click="this.$emit('popup', false)" src="/image/project/close2.png" />
        </div>
        <div class="popup-box">
            <p class="info">팀소개</p>
            <p class="info-text">
                팀설명
            </p>
            <p class="team-list-title">팀원 목록(1)</p>
            <div class="team-list-wrap">
                <div class="team-list" v-for="(v, idx) in 10" :key="idx">
                    <p>도라에몽</p>
                    <p>010-1111-1111</p>
                    <p>dora@gmail.com</p>
                </div>
            </div>
        </div>
        <div class="next-btn-wrap">
            <p class="people-cnt">
                합격자/모집인원 <span class="num1">8</span><span class="num2"> / 10명</span>
            </p>
            <div v-if="this.isPass == -1" class="pass-text-wrap">
                <div class="btn btn6" @click="this.isPass = 0">
                    불합격
                </div>
                <div class="btn btn7" @click="this.isPass = 1">
                    합격
                </div>
            </div>
            <div v-else-if="this.isPass == 1" class="pass-text-wrap">
                <p class="pass-text">합격</p>
                <div class="choose-again" @click="this.isPass = -1">다시 선택</div>
            </div>
            <div v-else-if="this.isPass == 0" class="pass-text-wrap">
                <p class="nonpass-text">불합격</p>
                <div class="choose-again" @click="this.isPass = -1">다시 선택</div>
            </div>
        </div>
    </article>
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
            isPass: -1, // -1(초기화), 1(합격), 0(불합격)
        }
    },
    methods: {
    }
}

</script>

<style></style>