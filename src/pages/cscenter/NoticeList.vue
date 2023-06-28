<template>
    <div id="notice01_section">
        <!--타이틀-->
        <div class="ntitle01_header">
            <h3 class="ntitle01_bg">고객센터</h3>
        </div>

        <div class="notice01_box">
            <Menu click="1" />

            <div class="n01_r">
                <!--타이틀-->
                <div class="n01_r_header">
                    <h3>공지사항</h3>
                </div>

                <table class="t_table">
                    <th class="t_title " style="width: 78px;">번호</th>
                    <th class="t_title " style="width: 692px;">제목</th>
                    <th class="t_title " style="width: 120px;">등록일</th>
                    <tr class="t_tr" v-for="notice in notice_list" :key="notice.notice">
                        <router-link :to="{ name: 'NoticeDetail', query: { key: notice.notice } }">
                            <td class="t_td ">{{ notice.notice }}</td>
                            <td class="t_td left">{{ notice.title }}</td>
                            <td class="t_td "> {{ formattedDate(notice.reg_date) }}</td>
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
            </div>
        </div>
    </div>
</template>

<script>
import { useCommonStore, useNoticeStore } from '@/_stores';
import Menu from '/src/components/cscenter/Menu.vue'

export default {
    components: {
        Menu
    },
    setup() {
        const commonStore = useCommonStore();
        const noticeStore = useNoticeStore();

        return {
            commonStore,
            noticeStore,
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
            notice_list_total: 0,
            notice_list: [],
            searchKeyword: '',
        }
    },
    methods: {
        getList() {
            this.notice_list = [];
            this.noticeStore.list().then((resp) => {
                if (resp.data.code == 200) {
                    this.notice_list = resp.data.body;
                    console.log('notice_list', this.notice_list)
                    this.notice_list_total = resp.data.total;
                    this.pagesList = this.getPageNums(this.notice_list_total, this.pages);
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
