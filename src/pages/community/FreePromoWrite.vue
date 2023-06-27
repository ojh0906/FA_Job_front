<template>
    <div id="free_section03">
        <!--타이틀-->
        <div class="free03_header">
            <h3 class="title_bg">커뮤니티</h3>
        </div>

        <div class="free03_box">
            <Menu click="2" />

            <div class="free03_r">
                <!--타이틀-->
                <div class="free03_r_header">
                    <h3>자유홍보글</h3>
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
                    <tr class="tr_com">
                        <td class="fw_com01 td_01">미리보기 내용</td>
                        <td class="fw_com02 td_02">
                            <div class="field_input">
                                <input type="text" placeholder="미리보기를 입력해주세요." v-model="this.preview" />
                            </div>
                        </td>
                    </tr>
                    <tr class="tr_com02">
                        <td class="fw_com01 td_01">내용</td>
                        <td class="fw_com02 td_02">
                            <div class="box"></div>
                            <div class="field_input">
                                <input type="text" placeholder="내용을 입력해주세요." v-model="this.content" />
                            </div>
                        </td>
                    </tr>
                    <tr class="tr_com">
                        <td class="fw_com01">이미지</td>
                        <td class="fw_com02 fw_02">
                            <input id="thumb" name="thumb" ref="thumb" class="hidden" type="file"
                                @change="handleChange($event)" />
                            <a href="#" class="btn2 fw_01" @click.prevent="addFiles('thumb')">
                                <i class="i_icon"></i>파일올리기
                            </a>
                            <p class="file01" v-for="(item, idx) in this.thumb_info" :key="idx">
                                {{ item.name }}
                                <a @click="removeFile(idx, 'thumb_info')">
                                    <i class="i_icon"></i>
                                </a>
                            </p>
                            <p class="file01" v-for="(item, idx) in this.thumb" :key="idx">
                                {{ item.name }}
                                <a @click="removeFile(idx, 'thumb')">
                                    <i class="i_icon"></i>
                                </a>
                            </p>
                        </td>
                    </tr>
                </table>
                <div class="fw_next">
                    <div class="btn btn4" @click="$router.go(-1)">이전</div>
                    <div class="btn btn1" @click="this.save">{{ this.marketing === 0 ? '등록' : '수정' }}</div>
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
            marketing: 0,
            title: '',
            content: '',
            preview: '',
            thumb_info: [],
            thumb: [],
        }
    },
    methods: {
        addFiles(obj) {
            if (obj == "thumb" && Object.keys(this.thumb).length >= 3) {
                alert("파일은 3개까지 등록할 수 있습니다.");
                return false;
            }
            this.$refs[obj].click();
        },
        handleChange(event) {
            let uploadedFiles = event.target.files;
            for (var i = 0; i < uploadedFiles.length; i++) {
                this[event.target.id].push(uploadedFiles[i]);
            }
        },
        removeFile(key, target_files) {
            this[target_files].splice(key, 1);
        },
        save() {
            if (this.title === '' || this.content === '') {
                alert('필수값을 입력해주세요.');
                return;
            }
            let paramData = new FormData();
            /*  member title content preview thumb */
            paramData.append("title", this.title);
            paramData.append("content", this.content);
            paramData.append("preview", this.preview);

            if (this.thumb.length > 0) {
                this.thumb.forEach((element, index) => {
                    paramData.append(`thumb_new`, element);
                });
            }

            for (let key of paramData.keys()) {
                console.log(key, ":", paramData.get(key));
            }

            if (this.marketing === 0) { // 신규
                paramData.append("member", this.commonStore.member.member);
                this.marketingStore.save(paramData).then((resp) => {
                    if (resp.data.code == 200) {
                        alert('등록되었습니다.');
                        this.goToPage('FreePromo');
                    }
                }).catch(err => {
                    console.log("err", err);
                });
            } else { // 수정
                this.marketingStore.modify(this.marketing, paramData).then((resp) => {
                    if (resp.data.code == 200) {
                        alert('수정되었습니다.');
                        this.goToPage('FreePromo');
                    }
                }).catch(err => {
                    console.log("err", err);
                });
            }
        },
        get() {
            this.marketingStore.getById(this.marketing).then((resp) => {
                if (resp.data.code == 200) {
                    this.marketing = resp.data.body.marketing;
                    this.title = resp.data.body.title;
                    this.content = resp.data.body.content;
                    this.preview = resp.data.body.preview;
                    this.thumb_info = JSON.parse(resp.data.body.thumb) || [];
                }
            }).catch(err => {
                console.log("err", err);
            });
        },
    },
    mounted() {
        console.log('this.$route.query.id ', this.$route.query.id)
        if (this.$route.query.id == undefined) { // 신규
        } else {
            this.marketing = this.$route.query.id;
            this.get();
        }
    }
}
</script>
