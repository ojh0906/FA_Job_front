<template>
    <div class="join_header">
        <h3 class="join_bg">프로젝트 등록</h3>
        <div class="join_step">
            <span :class="step === 1 ? 'on' : ''">01. 프로젝트 정보</span>
            <span :class="step === 2 ? 'on' : ''">02. 프로젝트 상세</span>
            <span :class="step === 3 ? 'on' : ''">03. 업무 상세 내용</span>
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




