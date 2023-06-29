<template>
    <div id="mypage">
        <LeftGnb />
        <div class="content-container">
            <div class="mypage-contact-container">
                <div class="contact-btn-box">
                    <p class="text">문의주시면 빠른 시간 내에 답변드리겠습니다.</p>
                    <router-link :to="{ name: 'Ask', query: {} }">
                        <div class="btn btn1">문의 등록</div>
                    </router-link>
                </div>

                <p class="area-title">내 문의내역</p>
                <div class="table-wrap">
                    <table class="t_table">
                        <thead>
                            <tr>
                                <th class="t_title" width="10%">번호</th>
                                <th class="t_title" width="67%">제목</th>
                                <th class="t_title" width="13%">등록일</th>
                                <th class="t_title" width="10%">답변상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="t_tr" v-for="contact in contact_list" :key="contact.contact">
                                <router-link :to="{ name: 'ContactDetail', query: { key: contact.contact } }">
                                    <td class="t_td ">{{ contact.contact }}</td>
                                    <td class="t_td left">{{ contact.title }}</td>
                                    <td class="t_td ">{{ formattedDate(contact.reg_date) }}</td>
                                    <td :class="[contact.answer == null ? '' : 't_td_color', 't_td']">
                                        {{ contact.answer == null ? '대기중' : '완료' }}
                                    </td>
                                </router-link>
                            </tr>
                        </tbody>
                    </table>
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
        </div>
    </div>
</template>


<script>
import LeftGnb from "/src/components/mypage/LeftGnb.vue";
import { useCommonStore, useContactStore } from '@/_stores';

export default {
    components: {
        LeftGnb
    },
    setup() {
        const commonStore = useCommonStore();
        const contactStore = useContactStore();

        return {
            commonStore,
            contactStore,
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
            contact_list_total: 0,
            contact_list: [],
            searchKeyword: '',
        }
    },
    methods: {
        getList() {
            this.contact_list = [];
            this.contactStore.list().then((resp) => {
                if (resp.data.code == 200) {
                    this.contact_list = resp.data.body;
                    console.log('contact_list', this.contact_list)
                    this.contact_list_total = resp.data.total;
                    this.pagesList = this.getPageNums(this.contact_list_total, this.pages);
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
