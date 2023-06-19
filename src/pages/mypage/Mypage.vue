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
                <th class="t_title" width="10%">번호</th>
                <th class="t_title" width="10%">분류</th>
                <th class="t_title" width="12%">기업명</th>
                <th class="t_title">제목</th>
                <th class="t_title" width="10%">상태</th>
                <th class="t_title" width="15%">업무일지</th>
              </tr>
            </thead>
            <tbody>
              <tr class="t_tr">
                <td class="t_td">5</td>
                <td class="t_td">관심</td>
                <td class="t_td">홍신</td>
                <td class="t_td left">프로젝트 제목</td>
                <td class="t_td">대기 중</td>
                <td class="t_td"><span class="small-btn-type-b">작성하기</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="area-title">내가 쓴 글</p>
        <div class="filter-wrap">
          <span>Know-how</span>
          <span>자유홍보</span>
          <span>블랙리스트</span>
        </div>
        <div class="table-wrap">
          <table class="t_table">
            <thead>
            <tr>
              <th class="t_title" width="10%">번호</th>
              <th class="t_title">제목</th>
              <th class="t_title" width="14ㄴ%">추천/비추천</th>
              <th class="t_title" width="12%">등록일</th>
              <th class="t_title" width="12%">조회수</th>
            </tr>
            </thead>
            <tbody>
            <tr class="t_tr">
              <td class="t_td">5</td>
              <td class="t_td">프로젝트 문제가 생겼을시 대처 방법</td>
              <td class="t_td">51/3</td>
              <td class="t_td">2023.5.20</td>
              <td class="t_td">21</td>
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
