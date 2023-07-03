<template>
    <div id="Know_section02">
        <!--타이틀-->
        <div class="know_header02">
            <h3 class="title_bg">커뮤니티</h3>
        </div>

        <div class="know_box02">
            <Menu click="1" />

            <div class="know_r02">
                <!--타이틀-->
                <div class="box_r_header02">
                    <h3>Know-how</h3>
                    <p>여러분의 노하우를 공유해주세요.</p>
                </div>

                <table class="t_table02">
                    <th class="t_title02 th_01" style="width: 78px;">{{ this.knowhow.type.name }}</th>
                    <th class="t_title02 th_02" style="width: 460px;">{{ this.knowhow.title }}</th>
                    <th class="t_title02 th_03" style="width: 120px;">{{ this.knowhow.name }}</th>
                    <th class="t_title02 th_04" style="width: 120px;">{{ formattedDate(knowhow.reg_date) }}</th>
                    <th class="t_title02 th_05" style="width: 80px;">{{ this.knowhow.other_info.click_cnt }}</th>
                    <th class="t_title02 th_06" style="width: 32px;"><i class="i_icon"></i></th>
                </table>

                <div class="btn_area" v-if="this.commonStore.member.member === this.knowhow.member">
                    <router-link class="modify-btn" :to="{ name: 'KnowHowWrite', query: { key: this.knowhow.knowhow } }">
                        수정
                    </router-link>
                    <a class="delete-btn" @click="remove">삭제</a>
                </div>

                <div class="cont_area" v-html="this.knowhow.content"></div>

                <div class="recommend">
                    <a href="#" :class="[this.recommend && this.recommend !== '' ? 'btn7' : 'btn4', 'up']"
                        @click="this.recommend = true; getRecommendSave();">
                        <i class="i_icon"></i>
                        <span>추천 {{ knowhow.other_info.recommend_cnt }}</span>
                    </a>
                    <a href="#" :class="[!this.recommend && this.recommend !== '' ? 'btn7' : 'btn4', 'down']"
                        @click="this.recommend = false; getRecommendSave();">
                        <i class="i_icon"></i>
                        <span>비추천 {{ knowhow.other_info.recommend_not_cnt }}</span>
                    </a>
                </div>
                <table class="comment">
                    <tr class="tr_com" v-for="(item, idx) in this.knowhow.other_info.reply_list" :key="idx">
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
                <div class="know02_row">
                    <router-link class="btn4" :to="{ name: 'KnowHowList', query: {} }">
                        목록으로
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useCommonStore, useKnowhowStore } from '@/_stores';
import Menu from '/src/components/community/Menu.vue'

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
            knowhow: {
                knowhow: 0,
                member: 0,
                type: {
                    field: 0,
                    name: '전체',
                },
                title: '',
                content: '',
                reg_date: '',
                other_info: {
                    reply_list: [],
                    click_cnt: 0
                },
            },
            reply_list: {},
            click_cnt: 0,
            content: '', // 댓글 입력
            recommend: '', // 사용자의 추천/비추천 상태 정보
        }
    },
    methods: {
        getKnowhow() {
            this.knowhowStore.getById(this.$route.query.key).then((resp) => {
                if (resp.data.code == 200) {
                    this.knowhow = resp.data.body;
                    this.getType();
                    if (this.knowhow.other_info.reply_list == null) {
                        this.knowhow.other_info.reply_list = [];
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
            this.knowhowStore.saveReply(this.$route.query.key, params).then((resp) => {
                if (resp.data.code == 200) {
                    this.content = '';
                    this.getKnowhow();
                }
            }).catch(err => {
                console.log("err", err);
            });
        },
        remove() {
            if (confirm('정말 삭제하시겠습니까?')) {
                this.knowhowStore.remove(this.$route.query.key).then((resp) => {
                    if (resp.data.code == 200) {
                        alert('삭제되었습니다.');
                        this.goToPage('FreePromo');
                    }
                }).catch(err => {
                    console.log("err", err);
                });
            }
        },
        getRecommendMember() {
            this.knowhowStore.getRecommend(this.$route.query.key, this.commonStore.member.member).then((resp) => {
                if (resp.data.code == 200) {
                    this.recommend = resp.data.body.recommend;
                } else {
                    this.recommend = '';
                }
            }).catch(err => {
                console.log("err", err);
            });
        },
        getRecommendSave() {
            let param = {
                member: this.commonStore.member.member,
                recommend: this.recommend
            };

            this.knowhowStore.saveRecommend(this.$route.query.key, param).then((resp) => {
                if (resp.data.code == 200) {
                    this.getKnowhow();
                }
            }).catch(err => {
                console.log("err", err);
            });
        },
        getType() {
            if (this.knowhow.type === 0) {
                this.knowhow.type = { field: 0, name: '전체' };
            } else {
                this.getFieldList('knowhow_type').map(v => v.field == this.knowhow.type ? this.knowhow.type = v : false);
            }
        }
    },
    mounted() {
        if (this.$route.query.key == null) {
            alert('잘못된 접근입니다.');
            this.goToPage('KnowHowList');
        } else {
            this.getKnowhow();
            this.getRecommendMember();
            this.knowhowStore.saveClick(this.$route.query.key, { member: this.commonStore.member.member }); // 조회수 증가
        }
    }

}
</script>
