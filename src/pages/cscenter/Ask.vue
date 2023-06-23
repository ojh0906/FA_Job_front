<template>
    <div id="ask_section">
        <!--타이틀-->
        <div class="atitle03_header">
            <h3 class="atitle03_bg">고객센터</h3>
        </div>

        <div class="ask_box">
            <div class="a03_l">
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

            <div class="a03_r">
                <!--타이틀-->
                <div class="a03r_header">
                    <h3>문의하기</h3>
                </div>

                <table class="ask_table">
                    <tr class="tr_com">
                        <td class="fa_com01">제목</td>
                        <td class="fa_com02">
                            <div class="field_input">
                                <input type="text" placeholder="제목을 입력해주세요.">
                            </div>
                        </td>
                    </tr>

                    <tr class="tr_com">
                        <td class="fa_com01">내용</td>
                        <td class="fa_com02 td_02">
                            <div class="field_input">
                                <input type="text" placeholder="내용을 입력해주세요.">
                            </div>
                        </td>
                    </tr>

                    <tr class="tr_com">
                        <td class="fa_com01">이미지</td>
                        <td class="fa_com02 fw_02">
                            <a href="#" class="btn2 fw_01"><i class="i_icon"></i>파일올리기 (최대3장)</a>
                            <p class="file01">image0.png<a href="#"><i class="i_icon"></i></a></p>
                        </td>
                    </tr>
                </table>

                <div class="fw_next">
                <div class="btn btn4" @click="$router.go(-1)">이전</div>
                <router-link :to="{ name: 'RegisterEnd' }">
                    <div class="btn btn1">등록</div>
                </router-link>
            </div>
            </div>
        </div>
    </div>

</template>

<script>

</script>
