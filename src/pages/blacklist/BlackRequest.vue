<template>
    <div id="free_section04">
        <!--타이틀-->
        <div class="free04_header">
            <h3 class="title_bg">커뮤니티</h3>
        </div>

        <div class="free04_box">
            <!--타이틀-->
                <div class="free04_r_header">
                    <h3>자유홍보글</h3>
                </div>

                <table class="comment02">
                    <tr class="tr_com">
                        <td class="fw_com01">분류</td>
                        <td class="fw_com02">
                            <a href="#" class="btn6 fw_01">업체</a>
                            <a href="#" class="btn7 fw_01">프리랜서</a>
                            <a href="#" class="btn6 fw_01">기타</a>
                        </td>
                    </tr>

                    <tr class="tr_com">
                        <td class="fw_com01">피해사례</td>
                        <td class="fw_com02">                        
                            <a href="#" class="btn6 fw_01">사기</a>
                            <a href="#" class="btn7 fw_01">대금미지급</a>
                            <a href="#" class="btn6 fw_01">잠수</a>
                            <a href="#" class="btn6 fw_01">기타</a>
                        </td>
                    </tr>

                    <tr class="tr_com">
                        <td class="fw_com01">제목</td>
                        <td class="fw_com02">
                            <div class="field_input">
                                <input type="text" placeholder="제목을 입력해주세요.">
                            </div>
                        </td>
                    </tr>

                    <tr class="tr_com">
                        <td class="fw_com01">내용</td>
                        <td class="fw_com02 td_02">
                            <div class="field_input">
                                <input type="text" placeholder="내용을 입력해주세요.">
                            </div>
                        </td>
                    </tr>

                    <tr class="tr_com">
                        <td class="fw_com01">이미지</td>
                        <td class="fw_com02 fw_02">
                            <a href="#" class="btn2 fw_01"><i class="i_icon"></i>파일올리기</a>
                            <p class="file01">image0.png<a href="#"><i class="i_icon"></i></a></p>
                            <p class="file02">스크린샷2.png<a href="#"><i class="i_icon"></i></a></p>
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

</template>

<script>

</script>
