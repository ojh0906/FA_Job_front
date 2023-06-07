<template>
    <div class="join_header">
        <h3 class="join_bg">회원가입</h3>
        <div class="join_step">
            <span :class="step == 1 ? 'on' : ''">01.회원유형 선택</span>
            <span :class="step == 2 ? 'on' : ''">02.약관동의</span>
            <span :class="step == 3 ? 'on' : ''">03.정보입력</span>
            <span :class="step == 4 ? 'on' : ''">04.가입완료</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['step'],
    data() {
        return {
        }
    },
    components: {
    }
    ,
    methods: {
    },
    mounted() {
    }
}

</script>




