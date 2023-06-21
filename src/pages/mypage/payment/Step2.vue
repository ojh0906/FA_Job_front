<template>
    <div id="mypage">
        <LeftGnb />
        <div class="content-container">
            <div class="mypage-contact-container">
                <p class="area-title">서비스 결제</p>
                <div class="product-btn">
                    <p>월정액 상품</p>
                    <div class="btn-wrap">
                        <img class="check-img" src="/image/mypage/check.png" />
                        <p>베이직</p>
                    </div>
                </div>
                <div class="table-wrap pay-table2">
                    <table class="t_table">
                        <thead>
                            <tr>
                                <th class="t_title" width="75%">서비스</th>
                                <th class="t_title" width="25%">결제금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="t_tr">
                                <td class="t_td">(월정액) 구직자 - 베이직</td>
                                <td class="t_td">11,000원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="order-pay">
                <p>최종 결제 금액</p>
                <p>11,000원</p>
            </div>

            <div class="next-btn-wrap">
                <div class="btn btn1">
                    결제하기
                </div>
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


