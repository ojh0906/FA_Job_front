<template>
  <div id="mypage">
    <LeftGnb/>
    <div class="content-container">
      <div class="mypage-info-container">
        <p class="area-title">나의 프로젝트</p>
        <div class="info-tab">
          <div>
            관심 프로젝트 <strong>24건</strong>
          </div>
          <div>
            지원 프로젝트 <strong>24건</strong>
          </div>
          <div>
            매칭 프로젝트 <strong>24건</strong>
          </div>
          <div>
            종료 프로젝트 <strong>24건</strong>
          </div>
        </div>
        <div class="table-wrap">
          <table class="t_table">
            <thead>
              <tr>
                <th class="t_title">번호</th>
                <th class="t_title">분류</th>
                <th class="t_title">기업명</th>
                <th class="t_title">제목</th>
                <th class="t_title">상태</th>
                <th class="t_title">업무일지</th>
              </tr>
            </thead>
            <tbody>
              <tr class="t_tr">
                <td class="t_td">5</td>
                <td class="t_td">관심</td>
                <td class="t_td">홍신</td>
                <td class="t_td left">프로젝트 제목</td>
                <td class="t_td">대기 중</td>
                <td class="t_td"></td>
              </tr>
            </tbody>
          </table>
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
