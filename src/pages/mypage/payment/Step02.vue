<template>
    <div id="mypage">
        <LeftGnb />
        <div class="content-container">
            <div id="container02">
                <div class="mypage-contact-container">
                    <p class="area-title">서비스 결제</p>
                    <div class="s02_table01">
                        <div class="text01">
                            <span class="text01_01">
                                제 1 조 (목적)<br>
                                <br>
                                이 약관은 FA JOB에서 제공하는 서비스의 이용과 관련하여 회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.<br>
                                이 약관은 FA JOB에서 제공하는 서비스의 이용과 관련하여 회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                            </span>
                        </div>
                        <div class="text02">
                            <input type="checkbox" />
                            <span class="text02_01">
                                제3자 정보제공 동의 <span class="text02_02">(필수)</span>
                            </span>
                        </div>
                    </div>

                    <div class="s02_table02">
                        <p class="table02">결제방법</p>
                        <div class="step02_table02">
                            <table class="step_table">
                                <thead>
                                    <tr>
                                        <th class="t_tr" width="33.3%">신용카드</th>
                                        <th class="t_tr" width="33.3%">무통장입금</th>
                                        <th class="t_tr" width="33.3%">실시간계좌이체</th>
                                    </tr>
                                    <tr class="table02">
                                        <th class="t_tr" width="33.3%">휴대폰결제</th>
                                        <th class="t_tr" width="33.3%">카카오페이</th>
                                        <th class="t_tr" width="33.3%">네이버페이</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>

                    <div class="s02_table03">
                        <p class="table03">결제금액</p>
                        <div class="step02_table03">
                            <table class="step_table">
                                <thead>
                                    <tr>
                                        <th class="t_tr tr01" width="70%">서비스</th>
                                        <th class="t_tr" width="30%">결제금액(VAT포함)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="t_tr">
                                        <td class="t_td td01">월정액 -  베이직 (사업자)</td>
                                        <td class="t_td">11,000원</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr class="t_title">
                                        <td class="t_td tt01">최종결제금액</td>
                                        <td class="t_td tt02">11,000원</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="cont03">
                        <input type="checkbox" />
                        <span class="con03_01">구매 조건 및 이용약관에 동의하며, 결제를 진행합니다.</span>

                    </div>
                </div>
            </div>

            
            <div class="next-btn-wrap">
                <router-link :to="{ name: 'MypagePay2', query: {} }">
                    <div class="btn btn1">
                        결제하기
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
import LeftGnb from "/src/components/mypage/LeftGnb.vue";

export default {
    components: {
        LeftGnb
    },
}

</script>


