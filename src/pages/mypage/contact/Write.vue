<template>
    <div id="mypage">
        <LeftGnb />
        <div class="content-container">
            <div class="mypage-contact-container">
                <p class="area-title">문의하기</p>
                <div class="table-wrap">
                    <table class="table-contact">
                        <tbody>
                            <tr class="t_tr">
                                <td class="t_td">제목</td>
                                <td class="t_td">
                                    <input type="text" class="input-text" placeholder="제목을 입력해주세요." />
                                </td>
                            </tr>
                            <tr class="t_tr">
                                <td class="t_td">내용
                                </td>
                                <td class="t_td">
                                    <textarea class="input-text" placeholder="내용을 입력해주세요."></textarea>
                                </td>
                            </tr>
                            <tr class="t_tr">
                                <td class="t_td">이미지</td>
                                <td class="t_td table-file">
                                    <label class="file-btn">
                                        <img src="/image/mypage/file-add.png">
                                        <p>파일 올리기 (최대 3장)</p>
                                        <input type="file" class="input-file" />
                                    </label>
                                    <div class="file-list-wrap">
                                        <p class="file-name" v-for="v in 3">
                                            파일파일.png
                                            <img src="/image/mypage/del.png">
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="btn-wrap">
                    <div class="btn btn4">이전</div>
                    <div class="btn btn1">등록</div>
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
