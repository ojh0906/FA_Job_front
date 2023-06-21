<template>
    <div id="mypage">
        <LeftGnb />
        <div class="content-container">
            <div class="mypage-contact-container">
                <p class="area-title">서비스 결제 안내</p>
                <div class="table-wrap pay-table">
                    <table class="t_table">
                        <thead>
                            <tr>
                                <th class="t_title" width="10%">분류</th>
                                <th class="t_title" width="15%">상품명</th>
                                <th class="t_title" width="40%">설명</th>
                                <th class="t_title" width="15%">금액(VAT포함)</th>
                                <th class="t_title" width="10%">기타</th>
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

            <ul class="list">
                <p>무료 회원의 경우 사용 제한</p>
                <li>
                    각 게시판 이름만 확인가능
                </li>
                <li>
                    구인 게시판 게시글 제목만 확인 가능
                </li>
                <li>
                    상세한 내용을 확인하려면 과금 결제 팝업이 노출
                </li>
            </ul>

            <div class="next-btn-wrap">
                <router-link :to="{ name: 'MypagePay2', query: {} }">
                    <div class="btn btn1">
                        다음
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


