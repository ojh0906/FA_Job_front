<template>
    <router-link :to="{ name: 'ProjectDetail', query: {} }">
        <section id="project-box">
            <aside class="project-title-wrap">
                <p class="company">수원엔지니어링</p>
                <p class="title">프로젝트 함께 하실 인재를 모집합니다. </p>
            </aside>

            <div class="info-btn-wrap">
                <aside class="info-wrap">
                    <div class="info-box">
                        <p class="info-title">기간</p>
                        <p class="info-text">기간</p>
                    </div>
                    <div class="info-box">
                        <div class="info-col info-box">
                            <p class="info-title">분야</p>
                            <p class="info-text">제어/비전</p>
                        </div>
                        <div class="info-col info-box">
                            <p class="info-title">지역/근무지</p>
                            <p class="info-text">기간</p>
                        </div>
                    </div>
                    <div class="info-box">
                        <div class="info-col info-box">
                            <p class="info-title">산업</p>
                            <p class="info-text">디스플레이</p>
                        </div>
                        <div class="info-col info-box">
                            <p class="info-title">필요인원</p>
                            <p class="info-text">40명</p>
                        </div>
                    </div>
                </aside>

                <div class="btn-wrap">
                    <div class="day-btn">
                        D-100
                    </div>
                    <div :class="true ? 'like-btn' : 'unlike-btn'">
                        <img class="like-icon" :src="true ? '/image/main/like.png' : '/image/main/unlike.png'" />
                        {{ true ? `00명` : '관심' }}
                    </div>
                </div>
            </div>
        </section>
    </router-link>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    components: {
    },
    setup() {
        return {
        };
    },
    methods: {
    },
    mounted() {
    }
}

</script>
