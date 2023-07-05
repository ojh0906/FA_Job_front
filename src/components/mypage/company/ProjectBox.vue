<template>
    <!-- 프로젝트 박스 -->
    <div id="company-project-box-wrap">
        <div v-for="(v, idx) in  6 " :key="idx" id="company-project-box">
            <div class="left-box">
                <div class="state-box">
                    <p class="ad-ing" v-if="true">광고중(2023.06.01~2023.06.30)</p>
                    <!-- 상태가 진행중 == 모집 마감 -->
                    <p class="state">
                        상태
                        <span :class="[this.state == 1 ? 'state-ing' : this.state == 2 ? 'state-start' : 'state-end']">
                            {{ this.state == 1 ? '모집중' : this.state == 2 ? '진행중' : '종료' }}
                        </span>
                    </p>
                    <p class="area">
                        현장 <span>충남 천안</span>
                    </p>
                </div>
                <p :class="[this.state === 3 ? 'title title-end' : '', 'title']">제목</p>
                <div class="btn-wrap">
                    <!-- TODO : 모집 중에만 보임 -->
                    <div class="btn btn3">
                        광고 신청
                    </div>
                    <!-- TODO : 2차 개발 때 적용 - 재등록 잔여 회수 표시 (3/3), 모집중인 프로젝트리스트에 상위 노출하는 부가서비스 개념이라 상태가 모집중일때만 노출.  -->
                    <div class="btn btn3" v-if="false">
                        재등록
                    </div>
                </div>
            </div>
            <div class="right-box">
                <p class="applicant-wrap">
                    <!-- TODO : 상태가 진행중 == 모집 마감 / 상태가 진행 중일 때 지원자가 합격된 참여인원으로 바뀜. -->
                    <span :class="[this.state < 3 ? 'applicant' : 'applicant-color']">
                        {{ this.state == 1 ? '지원자' : '참여인원' }}
                    </span>
                    <!-- TODO : 상태가 진행중일때 지원자가 합격된 참여인원으로 바뀜. -->
                    <span class="num" :class="this.applicant == 0 ? 'num-red' : this.state == 3 ? 'num-thin' : 'num'">
                        {{ this.applicant }}
                    </span>
                </p>

                <!-- TODO : 지원자가 1명 이상일 때 - 지원자 목록 -->
                <router-link v-if="this.applicant > 0" :to="{ name: 'MypageCompanyApplicant', query: {} }">
                    <div class="btn3 btn">
                        지원자 목록
                    </div>
                </router-link>
                <!-- TODO : 지원자가 0명일 경우만 프로젝트 수정 가능 -->
                <router-link v-else-if="this.applicant == 0" :to="{ name: '', query: {} }">
                    <div class="btn5 btn">
                        프로젝트 수정
                    </div>
                </router-link>
                <!-- TODO : 프로젝트가 마감되었을 때 -->
                <router-link v-else-if="this.state == 2" :to="{ name: '', query: {} }">
                    <div class="btn5 btn">
                        공수 설정
                    </div>
                </router-link>
                <!-- TODO : 지원자 목록에서 공수설정이 완료되면 업무일지 결재로 바뀜. -->
                <router-link v-else-if="this.state == 2" :to="{ name: '', query: {} }">
                    <div class="btn5 btn">
                        업무일지 결재
                    </div>
                </router-link>
                <!-- TODO : 프로젝트 종료일 때 - 업무일지 보기 -->
                <router-link v-if="this.state == 4" :to="{ name: '', query: {} }">
                    <div class="btn4 btn">
                        업무일지 보기
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [],
    data() {
        return {
            /*  임시로 만들어 논 것 */
            state: 1, // 모집중 1, 진행중 2, 종료 3
            applicant: 1 // 신청인원
        }
    }
}
</script>

<style></style>