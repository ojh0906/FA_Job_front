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

        <section id="project-list" @click="clickSelect">
            <div class="project-title-wrap">
                <p class="project-title">프로젝트</p>
                <p class="project-sub-title">등록된 프로젝트가 <span>N건</span> 있습니다.</p>
            </div>
            <div class="project-content">
                <!-- 프로젝트 필터 설정 -->
                <Nav />
                <article class="project">
                    <!-- 프로젝트 광고 리스트 -->
                    <aside>
                        <div class="ad-box-title">
                            AD
                        </div>
                        <div class="ad-project-box">
                            <ProjectBox v-for="v in 9" />
                        </div>
                    </aside>

                    <!-- 프로젝트 리스트 -->
                    <aside>
                        <div id="project-filter-wrap">
                            <!-- 필터 -->
                            <div class="filter-item">
                                <p class="filter-text project-radio" @click="this.projectFilter = !this.projectFilter">
                                    {{ filter }}
                                    <img class="dropdown-img project-radio" src="/image/register/down.png" />
                                </p>
                                <div class="filter-list-wrap project-radio" :class="this.projectFilter ? 'open' : 'close'">
                                    <div v-for="(item, index) in 4" :key="index" class="filter-list project-radio">
                                        <input type="radio" :name="item" v-model="filter" :value="item"
                                            class="project-radio" />
                                        <label :for="item" class="project-radio">{{ item }}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table class="t_table" id="project-table">
                            <thead>
                                <th class="t_title th_01">기업명</th>
                                <th class="t_title th_02 th-title">제목</th>
                                <th class="t_title th_03">지역/근무지</th>
                                <th class="t_title th_04">필요인원</th>
                                <th class="t_title th_05">마감일</th>
                            </thead>
                            <tbody>
                                <tr class="t_tr" v-for="v in 10">
                                    <td class="t_td">상성프로에이치 기업</td>
                                    <td class="t_td title-td">
                                        <p class="t-title">프로젝트 사람 구함</p>
                                        <div class="info-box">
                                            <div class="info">
                                                <p class="info-title">
                                                    기간
                                                </p>
                                                <p class="info-text">
                                                    2023.06.15 ~ 2024.06.14
                                                </p>
                                            </div>
                                            <div class="info">
                                                <p class="info-title">
                                                    분야
                                                </p>
                                                <p class="info-text">
                                                    노동
                                                </p>
                                            </div>
                                            <div class="info">
                                                <p class="info-title">
                                                    산업
                                                </p>
                                                <p class="info-text">
                                                    디스플레이
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="t_td">충남 천안</td>
                                    <td class="t_td">1000</td>
                                    <td class="t_td">~2023.06.30</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="pagination">
                            <a href="#"><img src="/image/community/back.png" alt="뒤로가기버튼입니다."></a>
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <a href="#"><img src="/image/community/foward.png" alt="앞으로가기버튼입니다."></a>
                        </div>
                    </aside>
                </article>
            </div>
        </section>
    </div>
</template>

<script>
import ProjectBox from '/src/components/ProjectBox.vue';
import Nav from '/src/components/project/Nav.vue';

export default {
    data() {
        return {
            filter: '',
            projectFilter: false,
        }
    },
    components: {
        Nav,
        ProjectBox,
    },
    methods: {
        clickSelect(event) {
            if (!event.target.classList.contains('project-radio')) {
                this.projectFilter = false;
            }
        },
    },
    mounted() {
        this.filter = '최신순';
    }
}
</script>

<style></style>