<template>
    <!-- TODO : 개별 지원자 팝업 -->
    <article class="popup-box-wrap popup-applicant-wrap">
        <div class="popup-title">
            <p>
                지원자이름
            </p>
            <img class="close-icon" @click="this.$emit('popup', false)" src="/image/project/close2.png" />
        </div>
        <div class="popup-box popup-people-box">
            <div class="btn-wrap">
                <!-- TODO : 다운로드는 PDF만 가능 -->
                <div class="btn btn2" @click="">
                    다운로드<img src="/image/mypage/download.png" />
                </div>
            </div>
            <div id="mypage">
                <div class="content-container">
                    <div class="resume-container">
                        <table class="table-manage-row">
                            <tr>
                                <td>이름</td>
                                <td>고길동</td>
                                <td>나이 (만)</td>
                                <td>49세</td>
                                <td>생년월일</td>
                                <td>1972년 12월 13일</td>
                            </tr>
                            <tr>
                                <td>국적/성별</td>
                                <td>내국인/남</td>
                                <td>휴대폰번호</td>
                                <td>010-1234-5678</td>
                                <td>이메일</td>
                                <td>gildong@javer.com</td>
                            </tr>
                            <tr>
                                <td>주소</td>
                                <td colspan="5">서울시 강남구 일원1동 이이동 삼아파트 101호</td>
                            </tr>
                        </table>

                        <table class="table-manage-row row02">
                            <tr>
                                <td>혈액형</td>
                                <td>O+</td>
                                <td>자차여부</td>
                                <td>있음</td>
                                <td>여권발급여부</td>
                                <td>있음</td>
                            </tr>
                            <tr>
                                <td>방진복</td>
                                <td>없음</td>
                                <td>방진두건</td>
                                <td>없음</td>
                                <td>방진화</td>
                                <td>있음/280</td>
                            </tr>
                            <tr>
                                <td>안전화</td>
                                <td>있음/280</td>
                                <td>개인공구</td>
                                <td>있음</td>
                                <td class="line02">건설업 기초안전보건교육</td>
                                <td>있음</td>
                            </tr>
                        </table>

                        <table class="table-manage-row row03">
                            <tr>
                                <td>분야</td>
                                <td colspan="5">1972년 12월 13일</td>
                            </tr>
                            <tr>
                                <td>경력</td>
                                <td>18년</td>
                                <td>희망단가</td>
                                <td></td>
                                <td>설계</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>전기</td>
                                <td></td>
                                <td>제어</td>
                                <td></td>
                                <td>비전</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기구</td>
                                <td>해당없음</td>
                                <td>도면해석(2D)</td>
                                <td>해당없음</td>
                                <td>도면해석(3D)</td>
                                <td>해당없음</td>
                            </tr>
                            <tr>
                                <td>경력사항</td>
                                <td colspan="5"></td>
                            </tr>
                        </table>

                        <table class="table-manage-row row04">
                            <tr>
                                <th rowspan="5" class="line01">프로젝트<br>완료내역</th>
                            </tr>
                            <tr>
                                <th>기업명</th>
                                <th>제목</th>
                                <th>기간</th>
                            </tr>
                            <tr>
                                <td>일신산업</td>
                                <td>프로젝트 제목이 노출됩니다.</td>
                                <td>2023.05.25~2023.05.31</td>
                            </tr>
                            <tr>
                                <td>일신산업</td>
                                <td>프로젝트 제목이 노출됩니다.</td>
                                <td>2023.05.25~2023.05.31</td>
                            </tr>
                            <tr>
                                <td>일신산업</td>
                                <td>프로젝트 제목이 노출됩니다.</td>
                                <td>2023.05.25~2023.05.31</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="next-btn-wrap">
            <p class="people-cnt">
                합격자/모집인원 <span class="num1">8</span><span class="num2"> / 10명</span>
            </p>
            <div v-if="this.isPass == -1" class="pass-text-wrap">
                <div class="btn btn6" @click="this.isPass = 0">
                    불합격
                </div>
                <div class="btn btn7" @click="this.isPass = 1">
                    합격
                </div>
            </div>
            <div v-else-if="this.isPass == 1" class="pass-text-wrap">
                <p class="pass-text">합격</p>
                <div class="choose-again" @click="this.isPass = -1">다시 선택</div>
            </div>
            <div v-else-if="this.isPass == 0" class="pass-text-wrap">
                <p class="nonpass-text">불합격</p>
                <div class="choose-again" @click="this.isPass = -1">다시 선택</div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    props: ['popup'],
    components: {
    },
    data() {
        return {
            isPass: -1, // -1(초기화), 1(합격), 0(불합격)
        }
    },
    methods: {
        offPopup() {
        }
    },
    mounted() {
    }
}

</script>
