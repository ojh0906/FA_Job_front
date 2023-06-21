<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container mypage-list-container">
        <div class="list-tab">
          <div @click="this.onTab('tab_knowhow')" :class="this.tab_knowhow ? 'click' : ''">
            Know-how (50)
          </div>
          <div @click="this.onTab('tab_publicize')" :class="this.tab_publicize ? 'click' : ''">
            자유홍보 (50)
          </div>
          <div @click="this.onTab('tab_blackList')" :class="this.tab_blackList ? 'click' : ''">
            블랙리스트 (50)
          </div>
        </div>

        <p class="area-title">
          {{ this.tab_knowhow ? 'know-how' : this.tab_publicize ? '자유홍보' : '블랙리스트' }}
        </p>

        <!-- know-how -->
        <article v-if="tab_knowhow">
          <div class="filter-wrap">
            <span>전체</span>
            <span v-for="v in 5">자유홍보</span>
          </div>
          <div class="table-wrap">
            <table class="t_table">
              <thead>
                <tr>
                  <th class="t_title" width="10%">번호</th>
                  <th class="t_title">제목</th>
                  <th class="t_title" width="14%">작성자</th>
                  <th class="t_title" width="14%">추천/비추천</th>
                  <th class="t_title" width="12%">등록일</th>
                  <th class="t_title" width="12%">조회수</th>
                </tr>
              </thead>
              <tbody>
                <tr class="t_tr" v-for="v in 4">
                  <td class="t_td">5</td>
                  <td class="t_td left">
                    프로젝트 문제가 생겼을시 대처 방법
                    <span class="num">20</span>
                  </td>
                  <td class="t_td">고길동</td>
                  <td class="t_td">51/3</td>
                  <td class="t_td">2023.5.20</td>
                  <td class="t_td">21</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="pagination">
            <a href="#"><img src="/image/community/back.png" alt="뒤로가기버튼입니다."></a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#"><img src="/image/community/foward.png" alt="앞으로가기버튼입니다."></a>
          </div>
        </article>

        <!-- 자유홍보 -->
        <article v-if="tab_publicize">
          <div class="free_cont">
            <div class="content c_01" v-for="v in 3">
              <div class="img_area"><img src="/image/community/noimage.png" alt="이미지영역입니다."></div>
              <div class="ptxt_area a_01">
                <ul class="etc gap">
                  <li><strong>등록일</strong> 2023.05.18</li>
                  <li><strong>조회수</strong> 103</li>
                </ul>
                <h3>YS전선의 해저포설선 함께 알아볼까요?!</h3>
                <div class="freecont_area f_01">
                  세줄까지 미리보기로 보여집니다.<br>
                  세줄까지 미리보기로 보여집니다.<br>
                  세줄까지 미리보기로 보여집니다.<br>
                </div>
              </div>
            </div>
          </div>

          <div class="pagination">
            <a href="#"><img src="/image/community/back.png" alt="뒤로가기버튼입니다."></a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#"><img src="/image/community/foward.png" alt="앞으로가기버튼입니다."></a>
          </div>
        </article>

        <!-- 블랙 리스트 -->
        <article v-if="tab_blackList">
          <div class="blacklist-box-wrap">

            <div class="blacklist-box">
              <div class="bl_list01 list01" v-for="v in 6">
                <h3>박O민 ㅇㅇㅇㅇㅇ업체 / 사기내용작성</h3>
                <div class="list01_info info01">
                  <p class="list01_p"><span>분류</span>프리랜서</p>
                  <p class="list01_p"><span>피해사례</span>대금미지급</p>
                  <p class="list01_p"><span>등록일</span>2023.09.12</p>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination">
            <a href="#"><img src="/image/community/back.png" alt="뒤로가기버튼입니다."></a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#"><img src="/image/community/foward.png" alt="앞으로가기버튼입니다."></a>
          </div>
        </article>
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
  data() {
    return {
      tab_knowhow: true,
      tab_publicize: false,
      tab_blackList: false,
    }
  },
  methods: {
    onTab(selectTab) {
      if (selectTab == 'tab_knowhow') {
        this.tab_knowhow = true;
        this.tab_publicize = false;
        this.tab_blackList = false;

      } else if (selectTab == 'tab_publicize') {
        this.tab_knowhow = false;
        this.tab_publicize = true;
        this.tab_blackList = false;

      }
      else if (selectTab == 'tab_blackList') {
        this.tab_knowhow = false;
        this.tab_publicize = false;
        this.tab_blackList = true;
      }
    }
  }
}

</script>
