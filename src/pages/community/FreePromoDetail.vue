<template>
    <div id="free_section02">
        <!--타이틀-->
        <div class="free02_header">
            <h3 class="title_bg">커뮤니티</h3>
        </div>

        <div class="free02_box">
            <Menu click="2" />

            <div class="free02_r">
                <div class="free02_r_header">
                    <h3>자유홍보글</h3>
                </div>

                <table class="free_table02">
                    <th class="t_title02 th_01" style="width: 78px;">전기</th>
                    <th class="t_title02 th_02" style="width: 460px;">{{ this.marketing.title }}</th>
                    <th class="t_title02 th_03" style="width: 120px;">{{ this.marketing.name }}</th>
                    <th class="t_title02 th_04" style="width: 120px;"> {{ formattedDate(marketing.reg_date) }}</th>
                    <th class="t_title02 th_05" style="width: 80px;">{{ this.marketing.other_info.click_cnt }}</th>
                    <th class="t_title02 th_06" style="width: 32px;"><i class="i_icon"></i></th>
                </table>
                
                <div class="btn_area">
                    <router-link class="modify-btn"
                        :to="{ name: 'FreePromoWrite', query: { id: this.marketing.marketing } }">
                        수정
                    </router-link>
                    <a class="delete-btn" @click="remove">삭제</a>
                </div>
                <div class="file-img-wrap" v-for="(thumb, idx) in this.thumbs_img" :key="idx">
                    <img class="file-img" :src="getImagePath(thumb.path)" alt="이미지입니다.">
                </div>
                <div class="cont_area" v-html="this.marketing.content"></div>

                <table class="comment">
                    <tr class="tr_com" v-for="(item, i) in this.marketing.other_info.reply_list" :key="i">
                        <td class="td_com01 td_01">{{ item.name }}</td>
                        <td class="td_com02 td_02">{{ item.content }}</td>
                        <td class="td_com03 td_03">{{ formattedDate(item.reg_date) }}</td>
                    </tr>
                    <tr class="tr_com03">
                        <td class="td_com01 td_01">댓글작성</td>
                        <td class="td_com02 td_02">
                            <div class="field_input">
                                <input type="text" placeholder="답변을 입력하세요." v-model="this.content"
                                    @keypress.enter="this.reply" />
                            </div>
                        </td>
                        <td class="td_com03 td_03">
                            <a @click="this.reply">등록</a>
                        </td>
                    </tr>
                </table>

                <div class="free02_row">
                    <router-link class="btn4" :to="{ name: 'FreePromo', query: {} }">
                        목록으로
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useCommonStore, useMarketingStore } from '@/_stores';
import Menu from '/src/components/community/Menu.vue'

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
            marketing: {
                marketing: 0,
                member: 0,
                title: '',
                content: '',
                reg_date: '',
                other_info: {
                    reply_list: [],
                    click_cnt: 0
                },
            },
            thumbs_img: [],
            reply_list: {},
            click_cnt: 0,
            content: '', // 댓글 입력
        }
    },
    methods: {
        getMarketing() {
            this.marketingStore.getById(this.$route.query.id).then((resp) => {
                if (resp.data.code == 200) {
                    this.marketing = resp.data.body;
                    this.getThumb(resp.data.body.thumb);
                    if (this.marketing.other_info.reply_list == null) {
                        this.marketing.other_info.reply_list = [];
                    }
                }
            }).catch(err => {
                console.log("err", err);
            });
        },
        reply() {
            if (this.content === '') {
                alert('댓글 내용을 입력해주세요.');
            }
            let params = {
                member: this.commonStore.member.member,
                content: this.content,
            }
            this.marketingStore.saveReply(this.$route.query.id, params).then((resp) => {
                if (resp.data.code == 200) {
                    this.content = '';
                    this.getMarketing();
                }
            }).catch(err => {
                console.log("err", err);
            });
        },
        remove() {
            if (confirm('정말 삭제하시겠습니까?')) {
                this.marketingStore.remove(this.$route.query.id).then((resp) => {
                    if (resp.data.code == 200) {
                        alert('삭제되었습니다.');
                        this.goToPage('FreePromo');
                    }
                }).catch(err => {
                    console.log("err", err);
                });
            }
        },
        getThumb(data) {
            if (
                data !== "" &&
                data !== "[]" &&
                typeof data !== "undefined" &&
                data != null
            ) {
                let file = JSON.parse(data);
                this.thumbs_img = file;
            }
        }
    },
    mounted() {
        if (this.$route.query.id == null) {
            alert('잘못된 접근입니다.');
            this.goToPage('FreePromo');
        } else {
            this.getMarketing();
            this.marketingStore.saveClick(this.$route.query.id, { member: this.commonStore.member.member }); // 조회수 증가
        }
    }
}
</script>
