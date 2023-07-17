<template>
    <div id="Know_section01">
        <!--타이틀-->
        <div class="know_header">
            <h3 class="title_bg">커뮤니티</h3>
        </div>

        <div class="know_box">
            <Menu click="1" />

            <div class="know_r">
                <!--타이틀-->
                <div class="know_r_header">
                    <h3>Know-how</h3>
                    <p>여러분의 노하우를 공유해주세요.</p>
                </div>

                <div class="tap_list">
                    <div class="" @click="this.type = 0; this.getList();">
                        <a :class="this.type === 0 ? 'btn5 btn01' : 'btn6'">전체</a>
                    </div>
                    <div class="" @click="this.type = type.field; this.getList();" :key="idx"
                        v-for="(type, idx) in this.getFieldList('knowhow_type').sort((a, b) => a.field - b.field)">
                        <a :class="this.type === type.field ? 'btn5 btn01' : 'btn6'">
                            {{ type.name }}
                        </a>
                    </div>
                    <!-- <div class=""><a class="btn5 btn01">전체</a></div>
                    <div class=""><a class="btn6 ">하드웨어</a></div>
                    <div class=""><a class="btn6 ">전기/전장</a></div>
                    <div class=""><a class="btn6 ">제어/비전</a></div>
                    <div class=""><a class="btn6 ">설계</a></div>
                    <div class=""><a class="btn6 ">기타</a></div> -->
                </div>

                <table class="t_table know_table01">
                    <th class="t_title know01_th_01" style="width: 78px;">번호</th>
                    <th class="t_title know01_th_02" style="width: 392px;">제목</th>
                    <th class="t_title know01_th_03" style="width: 120px;">작성자</th>
                    <th class="t_title know01_th_04" style="width: 100px;">추천/비추천</th>
                    <th class="t_title know01_th_05" style="width: 120px;">등록일</th>
                    <th class="t_title know01_th_06" style="width: 80px;">조회수</th>
                    <tr class="t_tr know01" v-for="knowhow in knowhow_list" :key="knowhow.knowhow">
                        <router-link :to="{ name: 'KnowHowDetail', query: { key: knowhow.knowhow } }">
                            <td class="t_td td_01">{{ knowhow.knowhow }}</td>
                            <td class="t_td td_02">{{ knowhow.title }}<span>{{ knowhow.other_info.reply_cnt }}</span></td>
                            <td class="t_td td_03">{{ knowhow.other_info.member_info.nick_name }}</td>
                            <td class="t_td td_04">
                                {{ knowhow.other_info.recommend_cnt }} / {{ knowhow.other_info.recommend_not_cnt }}
                            </td>
                            <td class="t_td td_05">{{ formattedDate(knowhow.reg_date) }}</td>
                            <td class="t_td td_06">{{ knowhow.other_info.click_cnt }}</td>
                        </router-link>
                    </tr>
                </table>

                <div class="pagination">
                    <a class="pointer" v-if="this.pages.start !== 1" @click="onChangePage(this.pages.start - 1)">
                        <img src="/image/community/back.png" alt="뒤로가기버튼입니다.">
                    </a>
                    <a :class="this.pages.page == page ? 'active' : 'pointer'" v-for="page in this.pages.pagesList"
                        @click="onChangePage(page)" :key="page">
                        {{ page }}
                    </a>
                    <a class="pointer" v-if="this.pages.end !== this.pages.end_page + 1"
                        @click="onChangePage(this.pages.start + this.pages.num_block)">
                        <img src="/image/community/foward.png" alt="앞으로가기버튼입니다.">
                    </a>
                </div>

                <div class="know01_row">
                    <div class="text-input">
                        <input type="search" placeholder="제목 검색" v-model="this.searchKeyword"
                            @keypress.enter="this.getList">
                        <img src="/image/community/search.png" alt="검색이미지입니다." @click="this.getList">
                    </div>
                    <router-link class="btn1 btn01" :to="{ name: 'KnowHowWrite', query: {} }">
                        Know-how 등록
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from '/src/components/community/Menu.vue'
import { useCommonStore, useKnowhowStore } from '@/_stores';


export default {
    components: {
        Menu
    },
    setup() {
        const commonStore = useCommonStore();
        const knowhowStore = useKnowhowStore();
        return {
            commonStore,
            knowhowStore,
        }
    },
    data() {
        return {
            pages: {
                page: 1,
                page_block: 10,
                start: 9999,
                end: 1,
                end_page: 1,
                pagesList: [],
                num_block: 5,
            },
            knowhow_list_total: 0,
            knowhow_list: [],
            searchKeyword: '',
            type: 0,
        }
    },
    methods: {
        getList() {
            this.knowhow_list = [];
            let option = {};

            if (this.type !== 0) {
                option.type = this.type;
            }

            if (this.searchKeyword !== '') {
                option.searchKeyword = this.searchKeyword;
            }

            this.knowhowStore.list(option, this.pages).then((resp) => {
                if (resp.data.code == 200) {
                    this.knowhow_list = resp.data.body;
                    // console.log('knowhow', this.knowhow_list)
                    this.knowhow_list_total = resp.data.total;
                    this.pagesList = this.getPageNums(this.knowhow_list_total, this.pages);
                }
            }).catch(err => {
                console.log("err", err);
            });
        },
        onChangePage(page) {
            this.pages.page = page;
            this.getList()
        },
    },
    mounted() {
        this.getList();
    }
}
</script>
