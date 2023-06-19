<template>
    <section id="apply">
        <p class="apply-title">팀 지원하기</p>

        <div class="completion-box-wrap">
            <div class="completion-box">
                <span class="title">사람구함</span> 프로젝트에 지원하였습니다.
            </div>
        </div>

        <div class="team-apply-btn-wrap">
            <router-link :to="{ name: 'ProjectList', query: {} }">
                <div class="team-apply-btn btn btn1">
                    목록으로
                </div>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style></style>