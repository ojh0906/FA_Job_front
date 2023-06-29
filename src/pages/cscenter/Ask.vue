<template>
    <div id="ask_section">
        <!--타이틀-->
        <div class="atitle03_header">
            <h3 class="atitle03_bg">고객센터</h3>
        </div>

        <div class="ask_box">
            <Menu click="2" />

            <div class="a03_r">
                <div class="a03r_header">
                    <h3>문의하기</h3>
                </div>

                <table class="ask_table">
                    <tr class="tr_com">
                        <td class="fa_com01">제목</td>
                        <td class="fa_com02">
                            <div class="field_input">
                                <input type="text" placeholder="제목을 입력해주세요." v-model="this.title" />
                            </div>
                        </td>
                    </tr>
                    <tr class="tr_com">
                        <td class="fa_com01">내용</td>
                        <td class="fa_com02 td_02">
                            <div class="field_input">
                                <input type="text" placeholder="내용을 입력해주세요." v-model="this.content" />
                            </div>
                        </td>
                    </tr>
                    <tr class="tr_com">
                        <td class="fa_com01">이미지</td>
                        <td class="fw_com02 fw_02">
                            <input id="files_new" name="files_new" ref="files_new" class="hidden" type="file"
                                @change="handleChange($event)" />
                            <a href="#" class="btn2 fw_01" @click.prevent="addFiles('files_new')">
                                <i class="i_icon"></i>파일올리기
                            </a>
                            <p class="file01" v-for="(item, idx) in this.files_new" :key="idx">
                                {{ item.name }}
                                <a @click="removeFile(idx, 'files_new')">
                                    <i class="i_icon"></i>
                                </a>
                            </p>
                        </td>
                    </tr>
                </table>

                <div class="fw_next">
                    <div class="btn btn4" @click="$router.go(-1)">이전</div>
                    <div class="btn btn1" @click="this.save">등록</div>
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
            contact: 0,
            title: '',
            content: '',
            files_new: [],
            files_del: [],
        }
    },
    methods: {
        addFiles(obj) {
            if (obj == "files_new" && Object.keys(this.files_new).length >= 3) {
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
            let removeTarget = this[target_files].splice(key, 1);
            if (target_files === 'files_info') {
                this.files_del.push(removeTarget[0]);
            }
        },
        save() {
            if (this.target === 0 || this.type === 0 || this.title === '' || this.content === '') {
                alert('필수값을 입력해주세요.');
                return;
            }
            let paramData = new FormData();
            paramData.append("member", this.commonStore.member.member);
            paramData.append("title", this.title);
            paramData.append("content", this.content);

            if (this.files_new.length > 0) {
                this.files_new.forEach((element, index) => {
                    paramData.append(`files_new`, element);
                });
            }

            for (const v of paramData.keys()) {
                console.log('date', v, paramData.get(v));
            }

            this.contactStore.save(paramData).then((resp) => {
                if (resp.data.code == 200) {
                    alert('등록되었습니다.');
                    this.$router.push({ name: 'AskEnd' });
                }
            }).catch(err => {
                console.log("err", err);
            });
        },

    },
    mounted() {
    }
}
</script>

