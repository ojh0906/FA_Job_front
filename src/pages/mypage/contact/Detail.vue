<template>
    <div id="mypage">
        <LeftGnb />
        <div class="content-container">
            <div class="mypage-contact-container">
                <p class="area-title">내 문의내역</p>
                <div class="contact-detail">
                    <div class="title-wrap">
                        <p class="title">{{ contact.title }}</p>
                        <div class="info">
                            <!-- <p class="name">{{ contact.member.name }}</p> -->
                            <p class="date">{{ formattedDate(contact.reg_date) }}</p>
                            <!-- <p class="hits">377</p> -->
                            <td :class="[contact.answer == null ? '' : 't_td_color', 'hits']">
                                {{ contact.answer == null ? '대기중' : '완료' }}
                            </td>
                        </div>
                    </div>
                    <!-- <div class="edit-del-btn-wrap">
                        <router-link class="btn btn4" :to="{ name: 'Ask', query: { key: this.contact.contact } }">
                            수정
                        </router-link>
                        <div class="btn btn4" @click="remove">삭제</div>
                    </div> -->

                    <div class="content">
                        <div v-html="contact.content"></div>
                        <div class="file" v-if="this.file_list != null">
                            <i class="i_icon"></i>
                            <p v-for="(file, idx) in this.file_list" :key="idx" @click="getFileDownPath(file)">{{ file.name
                            }}
                            </p>
                        </div>
                    </div>

                    <!-- 답변 -->
                    <div class="answer-wrap" v-if="contact.answer != null">
                        <div class="answer">
                            <div class="content-text">
                                <p class="name">관리자</p>
                                <p class="text">{{ contact.answer }}</p>
                            </div>
                            <!-- <p class="date">2023.06.20</p> -->
                        </div>
                        <!-- <div class="re-answer">
                            <div class="content-text">
                                <p class="name">둘리</p>
                                <img class="re-icon" src="/image/mypage/re-answer.png">
                                <p class="text">답변</p>
                            </div>
                            <p class="date">2023.06.20</p>
                        </div>
                        <div class="input-answer">
                            <div class="content-text">
                                <p class="name">댓글 작성</p>
                                <textarea placeholder="답변을 입력하세요."></textarea>
                            </div>
                            <div class="btn btn1">등록</div>
                        </div> -->
                    </div>
                </div>
                <div class="btn-wrap">
                    <router-link :to="{ name: 'ContactList' }" class="btn btn4">
                        목록으로
                    </router-link>
                </div>
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
            contact: {
                answer: null,
                contact: 0,
                member: 0,
                title: '',
                content: '',
                reg_date: '',
            },
            file_list: [],
        }
    },
    methods: {
        getContact(key) {
            this.contactStore.getById(key).then((resp) => {
                // console.log('contact', resp.data.body);
                if (resp.data.code == 200) {
                    this.contact = resp.data.body;
                    this.getfile(resp.data.body.file);
                }
            }).catch(err => {
                console.log("err", err);
            });
        },
        getfile(data) {
            if (
                data !== "" &&
                data !== "[]" &&
                typeof data !== "undefined" &&
                data != null
            ) {
                let file = JSON.parse(data);
                this.file_list = file;
            } else {
                this.file_list = null;
            }
        },
    },
    mounted() {
        if (this.$route.query.key == null) {
            alert('잘못된 접근입니다.');
            this.goToPage('contactList');
        } else {
            this.getContact(this.$route.query.key);
            // this.contactStore.saveClick(this.$route.query.key, { member: this.commonStore.member.member }); // 조회수 증가
        }
    }
}

</script>
