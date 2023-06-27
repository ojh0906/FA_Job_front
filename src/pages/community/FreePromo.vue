<template>
    <div id="free_section01">
        <!--타이틀-->
        <div class="free_header">
            <h3 class="title_bg">커뮤니티</h3>
        </div>

        <div class="free_box">
            <Menu click="2" />

            <div class="free01_r">
                <div class="free_r_header">
                    <h3>자유홍보</h3>
                </div>

                <div class="free_cont">
                    <div class="cont01 c_01" v-for="marketing in marketing_list" :key="marketing.marketing">
                        <router-link :to="{ name: 'FreePromoDetail', query: { id: marketing.marketing } }">
                            <div class="img_area">
                                <img v-if="marketing.thumb !== '[]'" :src="getFirstImagePath(marketing.thumb)"
                                    alt="이미지영역입니다.">
                                <img v-else src="/image/community/noimage.png" alt="이미지영역입니다.">
                            </div>
                            <div class="ptxt_area a_01">
                                <ul class="etc gap">
                                    <li><strong>등록일</strong> {{ formattedDate(marketing.reg_date) }}</li>
                                    <li><strong>조회수</strong> {{ marketing.other_info.click_cnt }}</li>
                                </ul>
                                <h3>{{ marketing.title }}</h3>
                                <div class="freecont_area f_01">
                                    {{ marketing.preview }}
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>

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

                <div class="free01_row">
                    <div class="text-input">
                        <input type="search" placeholder="제목 검색" v-model="this.searchKeyword"
                            @keypress.enter="this.getList">
                        <img src="/image/community/search.png" alt="검색이미지입니다." @click="this.getList">
                    </div>
                    <router-link class="btn1 btn01" :to="{ name: 'FreePromoWrite', query: {} }">
                        자유홍보글 등록
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from '/src/components/community/Menu.vue'
import { useCommonStore, useMarketingStore } from '@/_stores';

export default {
    components: {
        Menu
    },

    setup() {
        const commonStore = useCommonStore();
        const marketingStore = useMarketingStore();
        return {
            commonStore,
            marketingStore,
        }
    },
    data() {
        return {
            pages: {
                page: 1,
                page_block: 5,
                start: 9999,
                end: 1,
                end_page: 1,
                pagesList: [],
                num_block: 5,
            },
            marketing_list_total: 0,
            marketing_list: [],
            searchKeyword: '',
        }
    },
    methods: {
        getList() {
            this.marketing_list = [];
            let option = {};
            if (this.searchKeyword !== '') {
                option.searchKeyword = this.searchKeyword;
            }

            this.marketingStore.list(option, this.pages).then((resp) => {
                if (resp.data.code == 200) {
                    this.marketing_list = resp.data.body;
                    this.marketing_list_total = resp.data.total;
                    this.pagesList = this.getPageNums(this.marketing_list_total, this.pages);
                }
            }).catch(err => {
                console.log("err", err);
            });
        },
        onChangePage(page) {
            this.pages.page = page;
            this.getList()
        }
    },
    mounted() {
        this.commonStore.getField();
        this.getList();
    }
}
</script>
