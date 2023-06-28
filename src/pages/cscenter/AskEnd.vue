<template>
    <div class="register_section02">
        <!-- 회원가입 헤더 -->
        <div class="title_header">
            <h3 class="title_bg">고객센터</h3>
        </div>

        <div class="ask_box">
                       <Menu click="2" />

            <div class="box_r">
                <div class="register-complete">
                    <div class="end_input_box">
                        <div class="check"><img src="/image/register/Checkmark.png" alt="완료이미지입니다."></div>
                        <p class="title02">
                            <strong class="bold">문의가 등록되었습니다.</strong>
                        </p>

                        <p class="sub-title02"><span>마이페이지 > 문의 내역</span>에서 확인하실 수 있습니다.</p>
                    </div>

                    <div class="next">
                        <div class="btn btn4">
                            문의 내역 보기
                        </div>
                    </div>
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
        }
    },

}
</script>