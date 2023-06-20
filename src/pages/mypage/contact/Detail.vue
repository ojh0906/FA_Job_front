<template>
    <div id="mypage">
        <LeftGnb />
        <div class="content-container">
            <div class="mypage-contact-container">
                <p class="area-title">내 문의내역</p>
                <div class="contact-detail">
                    <div class="title-wrap">
                        <p class="title">제목제목</p>
                        <div class="info">
                            <p class="name">홍갈동</p>
                            <p class="date">2024.06.20</p>
                            <p class="hits">377</p>
                        </div>
                    </div>
                    <div class="edit-del-btn-wrap">
                        <div class="btn btn4">수정</div>
                        <div class="btn btn4">삭제</div>
                    </div>

                    <div class="content">
                        <div class="content-text">
                            내용내용내용
                        </div>
                        <div class="file-box">
                            <img src="/image/mypage/file.png">
                            <p class="file-name" v-for="v in 3">text.jpeg</p>
                        </div>
                    </div>

                    <!-- 답변 -->
                    <div class="answer-wrap">
                        <div class="answer">
                            <div class="content-text">
                                <p class="name">관리자</p>
                                <p class="text">답변</p>
                            </div>
                            <p class="date">2023.06.20</p>
                        </div>
                        <div class="re-answer">
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
                        </div>
                    </div>
                </div>
                <div class="btn-wrap">
                    <div class="btn btn4">목록으로</div>
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
