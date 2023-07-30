<template>
    <div id="mypage">
        <LeftGnb />
        <div class="content-container">
            <div id="container03">
                <div class="mypage-contact-container">
                    <p class="area-title">결제 내역 목록</p>
                    <div class="c03_table">
                    <table class="t_table">
                        <thead>
                            <tr>
                                <th class="t_title" width="15%">결제일</th>
                                <th class="t_title" width="40">상품명</th>
                                <th class="t_title" width="15%">시작일시</th>
                                <th class="t_title" width="15%">종료일시</th>
                                <th class="t_title" width="15%">금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="t_tr">
                                <td class="t_td">월정액</td>
                                <td class="t_td">베이직</td>
                                <td class="t_td">가나다라마바사</td>
                                <td class="t_td">11,000원</td>
                                <td class="t_td">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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


