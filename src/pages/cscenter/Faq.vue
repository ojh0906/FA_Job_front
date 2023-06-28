<template>
    <div div id="faq_section">
        <!-- 회원가입 헤더 -->
        <div class="faqtitle_header">
            <h3 class="title_bg">고객센터</h3>
        </div>

        <div class="faq_box">
            <Menu click="3" />

            <div class="faq_r">
                <div class="faq_r_header">
                    <h3>FAQ</h3>
                </div>

                <div class="accordion-container">
                    <div class="faq-acco">
                        <div class="accordion-label label01">
                            <p>작성된 프로젝트 수정 방법</p>
                            <i class="i_icon up"></i>
                        </div>
                        <div class="accordion-cont">
                            <div class="text-wrap">
                                <strong>A.</strong>
                                <h3>프로젝트 > 게시글 클릭 > 하단 수정</h3>
                                <p>버튼을 눌러 수정해주세요.</p>
                            </div>
                        </div>

                        <div class="accordion-label">
                            <p>블랙리스트 해제 방법</p>
                            <i class="i_icon down"></i>
                        </div>

                        <div class="accordion-label">
                            <p>프로젝트에 문제가 생겼을시 대처 방법</p>
                            <i class="i_icon down"></i>
                        </div>

                        <div class="accordion-label">
                            <p>아이디 / 비밀번호 찾는 방법</p>
                            <i class="i_icon down"></i>
                        </div>

                        <div class="accordion-label">
                            <p>FA JOB 이용방법</p>
                            <i class="i_icon down"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useCommonStore, useFaqStore } from '@/_stores';
import Menu from '/src/components/cscenter/Menu.vue'

export default {
    components: {
        Menu
    },
    setup() {
        const commonStore = useCommonStore();
        const faqStore = useFaqStore();

        return {
            commonStore,
            faqStore,
        }
    },

    data() {
        return {
        }
    },

}
</script>

