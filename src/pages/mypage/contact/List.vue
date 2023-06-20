<template>
    <div id="mypage">
        <LeftGnb />
        <div class="content-container">
            <div class="mypage-contact-container">
                <div class="contact-btn-box">
                    <p class="text">문의주시면 빠른 시간 내에 답변드리겠습니다.</p>
                    <router-link :to="{ name: 'ContactWrite', query: {} }">
                        <div class="btn btn1">문의 등록</div>
                    </router-link>
                </div>

                <p class="area-title">내 문의내역</p>
                <div class="table-wrap">
                    <table class="t_table">
                        <thead>
                            <tr>
                                <th class="t_title" width="10%">번호</th>
                                <th class="t_title" width="67%">제목</th>
                                <th class="t_title" width="13%">등록일</th>
                                <th class="t_title" width="10%">답변상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="t_tr" v-for="v in 5">
                                <router-link :to="{ name: 'ContactDetail', query: {} }" class="table-link">
                                    <td class="t_td">5</td>
                                    <td class="t_td t-left">관심</td>
                                    <td class="t_td">2023.06.20</td>
                                    <td :class="[true ? 'text-blue' : '', 't_td']">{{ true ? '완료' : '대기 중' }}</td>
                                </router-link>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="pagination">
                <a href="#"><img src="/image/community/back.png" alt="뒤로가기버튼입니다."></a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#"><img src="/image/community/foward.png" alt="앞으로가기버튼입니다."></a>
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
