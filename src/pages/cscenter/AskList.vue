<template>
    <div id="ask01_section">
        <!--타이틀-->
        <div class="aitle01_header">
            <h3 class="atitle01_bg">고객센터</h3>
        </div>

        <div class="ask01_box">
            <Menu click="2" />

            <div class="a01_r">
                <div class="ask">
                    <p>문의주시면 빠른 시간 내에 답변드리겠습니다.</p>
                    <router-link class="btn1" :to="{ name: 'Ask' }">
                        문의 등록
                    </router-link>
                </div>
                <!--타이틀-->
                <div class="a01_r_header">
                    <h3>내 문의내역</h3>
                </div>

                <table class="t_table">
                    <th class="t_title " style="width: 78px;">번호</th>
                    <th class="t_title " style="width: 612px;">제목</th>
                    <th class="t_title " style="width: 120px;">등록일</th>
                    <th class="t_title " style="width: 80px;">답변상태</th>
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
import { useCommonStore, useContactStore } from '@/_stores';
import Menu from '/src/components/cscenter/Menu.vue'

export default {
    components: {
        Menu
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
        this.getList();
    }
}
</script>