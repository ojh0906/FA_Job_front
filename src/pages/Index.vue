<template>
    <section id="main-container">
        <!-- 메인 슬라이드 -->
        <MainSlider />
        <!-- 프로젝트 검색 창 -->
        <article class="search-container">
            <aside>
                <label for="search" class="search-wrap">
                    <input type="text" name="search" placeholder="프로젝트 검색" />
                    <img class="search-icon" src="/image/main/search.png" />
                </label>
            </aside>
        </article>

        <!-- 프로젝트 -->
        <article class="project-container max">
            <div class="title-wrap">
                <p class="title">
                    프로젝트
                    <span class="sub-title">견적을 의뢰한 프로젝트가 오늘까지 <b>N</b>건이 있습니다.</span>
                </p>

                <div class="more-btn">
                    <p>
                        더보기
                    </p>
                    <img class="more-icon" src="/image/main/more-btn.png" />
                </div>
            </div>
            <aside class="project-box-container">
                <ProjectSlider />
            </aside>
        </article>


        <!-- 블랙 리스트 -->
        <article class="black-list-container ">
            <div class="title-wrap">
                <p class="title">
                    블랙리스트
                </p>

                <div class="more-btn">
                    <p>
                        더보기
                    </p>
                    <img class="more-icon" src="/image/main/more-btn.png" />
                </div>
            </div>
            <div class="tag-wrap">
                <div class="tag tag-click">전체</div>
                <div class="tag" v-for="v in 4">업체</div>
            </div>
            <BlackSlider />
        </article>

        <!-- 게시판-->
        <article class="board-container max">
            <div class="board-title-box">
                <p class="title">게시판</p>
                <div class="tag-wrap">
                    <div>
                        <div class="tag" :class="true ? 'click' : ''">공지사항</div>
                    </div>
                    <div>
                        <div class="tag" :class="false ? 'click' : ''">Know-how</div>
                    </div>
                    <div>
                        <div class="tag" :class="false ? 'click' : ''">자유홍보</div>
                    </div>
                </div>
                <div class="more-btn">
                    <p>더보기</p>
                    <img class="more-icon" src="/image/main/more-btn2.png" />
                </div>
            </div>
            <div class="board-content">
                <div class="table-head">
                    <div class="row">
                        <p class="title">제목</p>
                        <p class="reg-date">등록일</p>
                    </div>
                </div>
                <div class="table-body" v-for="v in 5">
                    <p class="title">공지사항 제목이 들어가는 영역입니다.</p>
                    <p class="reg-date">2023.06.12</p>
                </div>
            </div>
        </article>

        <!-- 광고 -->
        <article class="ad-container">
            <div class="ad-content">
                <div class="text-wrap">
                    <p class="text">
                        구인구직 플랫폼<br />
                        <img class="logo" src="/image/common/logo-gray.png" />앱을 만나보세요.<br />
                        <span>
                            쉽고 빠르게 프로젝트를 등록하고, 일자리를 구해보세요!
                        </span>
                    </p>
                    <div class="img-wrap">
                        <img class="apple" src="/image/main/apple.png" />
                        <img class="google" src="/image/main/google.png" />
                    </div>
                </div>
                <img class="phone-img" src="/image/main/phone.png" />
            </div>
        </article>
    </section>
</template>

<script>
import MainSlider from '/src/components/MainSlider.vue';
import ProjectSlider from '/src/components/ProjectSlider.vue';
import BlackSlider from '/src/components/BlackSlider.vue';

export default {
    data() {
        return {
        }
    },
    components: {
        MainSlider,
        ProjectSlider,
        BlackSlider,
    },
    methods: {
    },
    mounted() {
    }
}

</script>
