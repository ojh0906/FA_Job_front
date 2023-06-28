<template>
    <div id="notice_detail">
        <!--타이틀-->
        <div class="ndtitle_header">
            <h3 class="title_bg">고객센터</h3>
        </div>

        <div class="notice02_box">
            <Menu click="1" />

            <div class="ndbox_r">
                <!--타이틀-->
                <div class="ndbox_r_header">
                    <h3>공지사항</h3>
                </div>

                <table class="nd_table">
                    <th class="t_title02 th_01" style="width: 688px;">{{ notice.title }}</th>
                    <th class="t_title02 th_02" style="width: 80px;">{{ formattedDate(notice.reg_date) }}</th>
                    <th class="share-icon t_title02 th_03" style="width: 32px;"><i class="i_icon"></i></th>
                </table>

                <div class="ndcont_area">
                    <div v-html="notice.content"></div>
                    <div class="file" v-if="this.file_list != null">
                        <i class="i_icon"></i>
                        <p v-for="(file, idx) in this.file_list" :key="idx" @click="getFileDownPath(file)">{{ file.name }}
                        </p>
                    </div>
                </div>

                <table class="nd_next_table" v-if="notice.other_info.notice_next != null"
                    @click="this.goToNotice(notice.other_info.notice_next.notice)">
                    <th class="t_title03 th_01" style="width: 66px;"><i class="i_icon"></i>
                        <p>다음글</p>
                    </th>
                    <th class="t_title03 th_02" style="width: 624px;">{{ notice.other_info.notice_next.title }}</th>
                    <th class="t_title03 th_03" style="width: 100px;">
                        {{ formattedDate(notice.other_info.notice_next.reg_date) }}
                    </th>
                </table>
                <table class="nd_before_table" v-if="notice.other_info.notice_prev != null"
                    @click="this.goToNotice(notice.other_info.notice_prev.notice)">
                    <th class="t_title03 th_01" style="width: 66px;">
                        <i class="i_icon"></i>
                        <p>이전글</p>
                    </th>
                    <th class="t_title03 th_02" style="width: 624px;">{{ notice.other_info.notice_prev.title }}</th>
                    <th class="t_title03 th_03" style="width: 100px;">
                        {{ formattedDate(notice.other_info.notice_prev.reg_date) }}
                    </th>
                </table>
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
            notice: {
                notice: 0,
                member: 0,
                title: '',
                content: '',
                reg_date: '',
                other_info: {
                    reply_list: [],
                    click_cnt: 0,
                    notice_next: {},
                    notice_prev: {}
                },
            },
            file_list: [],
        }
    },
    methods: {
        getNotice(key) {
            this.noticeStore.getById(key).then((resp) => {
                if (resp.data.code == 200) {
                    this.notice = resp.data.body;
                    this.getfile(resp.data.body.file);
                    if (this.notice.other_info.reply_list == null) {
                        this.notice.other_info.reply_list = [];
                    }
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
        goToNotice(key) {
            this.goToDetail('NoticeDetail', key)
            this.getNotice(key);
        }
    },
    mounted() {
        if (this.$route.query.key == null) {
            alert('잘못된 접근입니다.');
            this.goToPage('NoticeList');
        } else {
            this.getNotice(this.$route.query.key);
            this.noticeStore.saveClick(this.$route.query.key, { member: this.commonStore.member.member }); // 조회수 증가
        }
    }
}
</script>
