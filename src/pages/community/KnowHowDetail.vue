<template>
    <div id="Know_section02">
        <!--타이틀-->
        <div class="know_header02">
            <h3 class="title_bg">커뮤니티</h3>
        </div>

        <div class="know_box02">
            <Menu click="1" />

            <div class="know_r02">
                <!--타이틀-->
                <div class="box_r_header02">
                    <h3>Know-how</h3>
                    <p>여러분의 노하우를 공유해주세요.</p>
                </div>

                <table class="t_table02">
                    <th class="t_title02 th_01" style="width: 78px;">전기</th>
                    <th class="t_title02 th_02" style="width: 460px;">제 노하우를 알려드립니다.</th>
                    <th class="t_title02 th_03" style="width: 120px;">김유진</th>
                    <th class="t_title02 th_04" style="width: 120px;">2023.06.23</th>
                    <th class="t_title02 th_05" style="width: 80px;">380</th>
                    <th class="t_title02 th_06" style="width: 32px;"><i class="i_icon"></i></th>
                </table>

                <div class="btn_area">
                    <a href="#" class="modify-btn">수정</a>
                    <a href="#" class="delete-btn">삭제</a>
                </div>

                <div class="cont_area">
                    노하우 내용이 들어가는 영역입니다.<br>
                    노하우 내용이 들어가는 영역입니다.<br>
                    노하우 내용이 들어가는 영역입니다.<br>
                    노하우 내용이 들어가는 영역입니다.<br>
                </div>

                <div class="recommend">
                    <a href="#" class="btn7 up">
                        <i class="i_icon"></i>
                        <span>추천154</span>
                    </a>
                    <a href="#" class="btn4 down">
                        <i class="i_icon"></i>
                        <span>비추천1</span>
                    </a>
                </div>

                <table class="comment">
                    <tr class="tr_com">
                        <td class="td_com01 td_01">오준호</td>
                        <td class="td_com02 td_02">좋은 정보 감사합니다~</td>
                        <td class="td_com03 td_03">2022.08.11</td>
                    </tr>
                    <tr class="tr_com02">
                        <td class="td_com01 td_01">김유진</td>
                        <td class="td_com05 td_02">
                            <i class="i_icon"></i>
                            <p>제목이 노출되는 영역입니다.<br>
                                제목이 노출되는 영역입니다.</p>
                        </td>
                        <td class="td_com03 td_04">2022.08.11</td>
                    </tr>
                    <tr class="tr_com03">
                        <td class="td_com01 td_01">댓글작성</td>
                        <td class="td_com02 td_02">
                            <div class="field_input">
                                <input type="text" placeholder="답변을 입력하세요.">
                            </div>
                        </td>
                        <td class="td_com03 td_03">
                            <a href="">등록</a>
                        </td>
                    </tr>
                </table>

                <div class="know02_row">
                    <a href="#" class="btn4">목록으로</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from '/src/components/community/Menu.vue'

export default {
    components: {
        Menu
    },
}
</script>
