<template>
    <div id="project-page">
        <article class="search-container">
            <aside>
                <label for="search" class="search-wrap">
                    <input type="text" name="search" placeholder="프로젝트 검색" />
                    <img class="search-icon" src="/image/main/search.png" />
                </label>
            </aside>
        </article>

        <div id="project-detail">
            <div class="title-box">
                <p class="title-box-title">사람 구함</p>
                <div class="info-box-wrap">
                    <div class="info-box">
                        <div class="info">
                            <p class="title">모집기간</p>
                            <p class="text">2023.05.02~2023.05.31</p>
                        </div>
                        <div class="info">
                            <p class="title">지역</p>
                            <p class="text">충청남도 천안</p>
                        </div>
                        <div class="info">
                            <p class="title">업체명</p>
                            <p class="text">홍길동</p>
                        </div>
                    </div>
                    <div class="date">
                        <p class="title">등록일자</p>
                        <p class="text">2023.05.02</p>
                        <div class="line">|</div>
                        <p class="title">최근 7일 조회</p>
                        <p class="text">0회</p>
                    </div>
                </div>
            </div>

            <article class="project-detail-content">
                <div class="project-content">
                    <p class="summary-title">요약</p>
                    <table class="project-detail-table">
                        <tr>
                            <td class="td-title">분야</td>
                            <td>하드웨어</td>
                            <td class="td-title">산업</td>
                            <td>디스플레이</td>
                        </tr>
                        <tr>
                            <td class="td-title">분야</td>
                            <td>하드웨어</td>
                            <td class="td-title">산업</td>
                            <td>디스플레이</td>
                        </tr>
                    </table>

                    <p class="summary-title content-title">업무내용</p>
                    <div class="content-text" v-html="'texttexttext'"></div>
                </div>
                <aside class="project-etc">
                    <div>

                        <p class="like-text"><img class="text-like-icon" src='/image/project/like.png' /> N명이 관심을 갖고 있습니다.
                        </p>
                        <div class="like-project-btn btn btn4">
                            <img class="like-icon" :src="false ? '/image/project/like.png' : '/image/project/unlike.png'" />
                            관심 프로젝트 추가
                        </div>
                        <div class="share-btn btn btn2">
                            <img class="share-icon" src='/image/project/share.png' />
                            공유하기
                        </div>
                    </div>

                    <div class="apply-btn-wrap">
                        <div class="apply-btn btn btn1">
                            <img class="share-icon" src='/image/project/person.png' />
                            개인 지원하기
                        </div>
                        <router-link :to="{ name: 'ProjectApplyTeam', query: {} }">
                            <div class="team-apply-btn btn btn1">
                                <img class="share-icon" src='/image/project/team.png' />
                                팀 지원하기
                            </div>
                        </router-link>
                    </div>
                </aside>
            </article>
        </div>
    </div>

    <!-- 모집 중인 다른 프로젝트 -->
    <div id="main-container">
        <article class="project-slide-container project-container max">
            <div class="title-wrap">
                <p class="title">
                    모집중인 다른 프로젝트
                </p>
            </div>
            <aside class="project-box-container">
                <swiper :navigation="{ nextEl: '.project-button-next', prevEl: '.project-button-prev' }" :loop="true"
                    :modules="modules" class="project-slider">
                    <swiper-slide v-for="v in 2">
                        <ProjectBox v-for="v in 2" />
                    </swiper-slide>
                </swiper>
                <!--  navigation -->
                <aside class="project-slide-btn-wrap">
                    <div class="project-button-prev">
                        <img class="more-icon" src="/image/main/next.png" />
                    </div>
                    <div class="project-button-next">
                        <img class="more-icon" src="/image/main/next.png" />
                    </div>
                </aside>
            </aside>
        </article>
    </div>
</template>

<script>
import ProjectBox from '/src/components/ProjectBox.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';

export default {
    data() {
        return {
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        ProjectBox
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
    methods: {
    },
    mounted() {
    }
}


</script>
