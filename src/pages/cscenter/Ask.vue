<template>
    <div class="ask_section">
        <!--타이틀-->
        <div class="title_header">
            <h3 class="title_bg">고객센터</h3>
        </div>

        <div class="ask_box">
            <div class="box_l">
                <div class="menu">
                    <a href="#">
                        <div class="menu01">
                        공지사항
                        <i class="i_icon"></i>
                        </div>
                    </a>
                    <a href="#">
                        <div class="menu02">
                        문의하기
                        </div>
                    </a>
                    <a href="#">
                        <div class="menu03">
                        FAQ
                        <i class="i_icon"></i>
                        </div>
                    </a>
                </div>
            </div>

            <div class="box_r">
                <!--타이틀-->
                <div class="box_r_header">
                    <h3>문의하기</h3>
                </div>

                <table class="ask_table">
                        <tr class="ask_tr" >
                            <!-- 첫번째 줄 시작 -->
                            <td class="ask_td01 td_01">제목</td>
                            <td class="ask_td02 td_02">
                                <input type="text" placeholder="제목을 입력해주세요.">
                            </td>
                            <!-- 첫번째 줄 끝 -->
                        </tr>
                        <tr class="ask_tr02">
                            <!-- 두번째 줄 시작 -->
                            <td class="ask_td01 td_01">내용</td>
                            <td class="ask_td02 td_02">
                                <input type="text" placeholder="내용을 입력해주세요.">
                            </td>
                            <!-- 두번째 줄 끝 -->
                        </tr>
                        <tr class="ask_tr">
                            <!-- 세번째 줄 시작 -->
                            <td class="ask_td01 td_01">첨부파일</td>
                            <td class="t_td td_02">제목이 노출되는 영역입니다.</td>
                            <!-- 세번째 줄 끝 -->
                        </tr>
                </table>
            </div>
        </div>
    </div>

</template>

<script>

</script>
