<template>
    <div id="free_section03">
        <!--타이틀-->
        <div class="free03_header">
            <h3 class="title_bg">커뮤니티</h3>
        </div>

        <div class="free03_box">
            <Menu click="1" />

            <div class="free03_r">
                <div class="free03_r_header">
                    <h3>Know-how</h3>
                </div>
                <div class="know_r">
                    <div class="tap_list">
                        <div class="" @click="this.type = 0;">
                            <a :class="this.type === 0 ? 'btn5 btn01' : 'btn6'">전체</a>
                        </div>
                        <div class="" @click="this.type = type.field;" :key="idx"
                            v-for="(type, idx) in this.getFieldList('knowhow_type').sort((a, b) => a.field - b.field)">
                            <a :class="this.type === type.field ? 'btn5 btn01' : 'btn6'">
                                {{ type.name }}
                            </a>
                        </div>
                    </div>
                </div>
                <table class="comment">
                    <tr class="tr_com">
                        <td class="fw_com01 td_01">제목</td>
                        <td class="fw_com02 td_02">
                            <div class="field_input">
                                <input type="text" placeholder="제목을 입력해주세요." v-model="this.title" />
                            </div>
                        </td>
                    </tr>
                    <tr class="tr_com02">
                        <td class="fw_com01 td_01">내용</td>
                        <td class="fw_com02 td_02">
                            <div class="box"></div>
                            <div class="field_input">
                                <textarea type="text" placeholder="내용을 입력해주세요." v-model="this.content"></textarea>
                            </div>
                        </td>
                    </tr>
                </table>
                <div class="fw_next">
                    <div class="btn btn4" @click="$router.go(-1)">이전</div>
                    <div class="btn btn1" @click="this.save">{{ this.knowhow === 0 ? '등록' : '수정' }}</div>
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
            knowhow: 0,
            title: '',
            content: '',
            type: 0,
        }
    },
    methods: {
        save() {
            if (this.title === '' || this.content === '') {
                alert('필수값을 입력해주세요.');
                return;
            }

            let paramData = new FormData();
            paramData.append("title", this.title);
            paramData.append("content", this.content);
            paramData.append("type", this.type);

            for (let key of paramData.keys()) {
                console.log(key, ":", paramData.get(key));
            }

            if (this.knowhow === 0) { // 신규
                paramData.append("member", this.commonStore.member.member);
                this.knowhowStore.save(paramData).then((resp) => {
                    console.log('knowhow resp', resp);
                    if (resp.data.code == 200) {
                        alert('등록되었습니다.');
                        this.goToPage('KnowHowList');
                    }
                }).catch(err => {
                    console.log("err", err);
                });
            } else { // 수정
                this.knowhowStore.modify(this.knowhow, paramData).then((resp) => {
                    if (resp.data.code == 200) {
                        alert('수정되었습니다.');
                        this.goToPage('KnowHowList');
                    }
                }).catch(err => {
                    console.log("err", err);
                });
            }
        },
        get() {
            this.knowhowStore.getById(this.knowhow).then((resp) => {
                if (resp.data.code == 200) {
                    this.knowhow = resp.data.body.knowhow;
                    this.title = resp.data.body.title;
                    this.content = resp.data.body.content;
                }
            }).catch(err => {
                console.log("err", err);
            });
        },
    },
    mounted() {
        console.log('this.$route.query.key ', this.$route.query.key)
        if (this.$route.query.key == undefined) { // 신규
        } else {
            this.knowhow = this.$route.query.key;
            this.get();
        }
    }
}
</script>
