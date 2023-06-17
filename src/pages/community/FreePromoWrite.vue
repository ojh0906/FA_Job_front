<template>
    <div id="free_section03">
        <!--타이틀-->
        <div class="free03_header">
            <h3 class="title_bg">커뮤니티</h3>
        </div>

        <div class="free03_box">
            <div class="free03_l">
                <div class="menu">
                    <a href="#">
                        <div class="menu01">
                        Know-how
                        <i class="i_icon"></i>
                        </div>
                    </a>
                    <a href="#">
                        <div class="menu02">
                        자유홍보
                        </div>
                    </a>
                </div>
            </div>

            <div class="free03_r">
                <!--타이틀-->
                <div class="free03_r_header">
                    <h3>자유홍보글</h3>
                </div>

                <table class="comment">
                    <tr class="tr_com">
                        <td class="fw_com01 td_01">제목</td>
                        <td class="fw_com02 td_02">
                            <div class="field_input">
                                <input type="text" placeholder="제목을 입력해주세요.">
                            </div>
                        </td>
                    </tr>

                    <tr class="tr_com02">
                        <td class="fw_com01 td_01">내용</td>
                        <td class="fw_com02 td_02">
                            <div class="box"></div>
                            <div class="field_input">
                                <input type="text" placeholder="내용을 입력해주세요.">
                            </div>
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
