<template>
  <div id="mypage">
    <LeftGnb />
    <div class="content-container">
      <div class="mypage-info-container mypage-list-container">
        <div class="list-tab">
          <div @click="this.board_type = 0;" :class="this.board_type === 0 ? 'click' : ''">
            Know-how ({{ this.knowhow_list_total }})
          </div>
          <div @click="this.board_type = 1;" :class="this.board_type === 1 ? 'click' : ''">
            자유홍보 ({{ this.marketing_list_total }})
          </div>
          <div @click="this.board_type = 2;" :class="this.board_type === 2 ? 'click' : ''">
            블랙리스트 ({{ this.blacklist_list_total }})
          </div>
        </div>

        <p class="area-title">
          {{ this.board_type === 0 ? 'know-how' : this.board_type === 1 ? '자유홍보' : '블랙리스트' }}
        </p>

        <!-- know-how -->
        <article v-if="this.board_type === 0">
          <div class="filter-wrap">
            <span :class="this.knowhow_type === 0 ? 'active' : ''" @click="this.knowhow_type = 0; this.getKnowhowList();">전체</span>
            <span :class="this.knowhow_type === type.field ? 'active':''"
                 @click="this.knowhow_type = type.field; this.getKnowhowList();"
                 v-for="type in this.getFieldList('knowhow_type').sort((a, b) => a.field - b.field)">
              {{ type.name }}
            </span>
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
                <tr class="t_tr" v-for="(item,idx) in this.knowhow_list">
                  <td class="t_td">{{ idx + 1 }}</td>
                  <td class="t_td left">
                    {{ item.title }}
                    <span class="num">{{ item.other_info.reply_cnt }}</span>
                  </td>
                  <td class="t_td">{{ item.other_info.member_info.name }}</td>
                  <td class="t_td">{{ item.other_info.recommend_cnt }}/{{ item.other_info.recommend_not_cnt }}</td>
                  <td class="t_td">{{ formattedDate(item.reg_date) }}</td>
                  <td class="t_td">{{ item.other_info.click_cnt }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="pagination">
            <a v-if="this.knowhow_pages.start !== 1" @click="onChangePage(this.knowhow_pages.start - 1)">
              <img src="/image/community/back.png" alt="뒤로가기버튼입니다.">
            </a>
            <a :class="this.knowhow_pages.page == page ? 'active' : 'pointer'" v-for="page in this.knowhow_pages.pagesList"
               @click="onChangePage(page)">
              {{ page }}
            </a>
            <a v-if="this.knowhow_pages.end !== this.knowhow_pages.end_page + 1"
               @click="onChangePage(this.knowhow_pages.start + this.knowhow_pages.num_block)">
              <img src="/image/community/foward.png" alt="앞으로가기버튼입니다.">
            </a>
          </div>
        </article>

        <!-- 자유홍보 -->
        <article v-if="this.board_type === 1">
          <div class="free_cont">
            <div class="content c_01" v-for="(item, idx) in this.marketing_list">
              <div class="img_area">
                <img v-if="item.thumb !== '[]'" :src="getFirstImagePath(item.thumb)"
                     alt="이미지영역입니다.">
                <img v-else src="/image/community/noimage.png" alt="이미지영역입니다.">
              </div>
              <div class="ptxt_area a_01">
                <ul class="etc gap">
                  <li><strong>등록일</strong> {{ formattedDate(item.reg_date) }}</li>
                  <li><strong>조회수</strong> {{ item.other_info.click_cnt }}</li>
                </ul>
                <h3>{{ item.title }}</h3>
                <div class="freecont_area f_01" v-html="showEnterContent(item.preview)">
                </div>
              </div>
            </div>
          </div>

          <div class="pagination">
            <a v-if="this.marketing_pages.start !== 1" @click="onChangePage(this.marketing_pages.start - 1)">
              <img src="/image/community/back.png" alt="뒤로가기버튼입니다.">
            </a>
            <a :class="this.marketing_pages.page == page ? 'active' : 'pointer'" v-for="page in this.marketing_pages.pagesList"
               @click="onChangePage(page)">
              {{ page }}
            </a>
            <a v-if="this.marketing_pages.end !== this.marketing_pages.end_page + 1"
               @click="onChangePage(this.marketing_pages.start + this.marketing_pages.num_block)">
              <img src="/image/community/foward.png" alt="앞으로가기버튼입니다.">
            </a>
          </div>
        </article>

        <!-- 블랙 리스트 -->
        <article v-if="this.board_type === 2">
          <div class="blacklist-box-wrap">

            <div class="blacklist-box">
              <div class="bl_list01 list01" v-for="(item, idx) in this.blacklist_list">
                <h3>{{ item.title }}</h3>
                <div class="list01_info info01">
                  <p class="list01_p"><span>분류</span>{{ this.getFieldName(item.target) }}</p>
                  <p class="list01_p"><span>피해사례</span>{{ this.getFieldName(item.type) }}</p>
                  <p class="list01_p"><span>등록일</span>{{ formattedDate(item.reg_date) }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination">
            <a v-if="this.blacklist_pages.start !== 1" @click="onChangePage(this.blacklist_pages.start - 1)">
              <img src="/image/community/back.png" alt="뒤로가기버튼입니다.">
            </a>
            <a :class="this.blacklist_pages.page == page ? 'active' : 'pointer'" v-for="page in this.blacklist_pages.pagesList"
               @click="onChangePage(page)">
              {{ page }}
            </a>
            <a v-if="this.blacklist_pages.end !== this.blacklist_pages.end_page + 1"
               @click="onChangePage(this.blacklist_pages.start + this.blacklist_pages.num_block)">
              <img src="/image/community/foward.png" alt="앞으로가기버튼입니다.">
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>


<script>
import LeftGnb from "/src/components/mypage/LeftGnb.vue";
import { useCommonStore,useMainStore } from '@/_stores';

export default {
  components: {
    LeftGnb
  },
  setup() {
    const commonStore = useCommonStore()
    const mainStore = useMainStore()
    return {
      commonStore,
      mainStore,
    }
  },
  data() {
    return {
      board_type: 0,
      knowhow_type:0,
      knowhow_list:[],
      knowhow_list_total:0,
      knowhow_pages: {
        page: 1,
        page_block: 6,
        start: 9999,
        end: 1,
        end_page: 1,
        pagesList: [],
        num_block: 5,
      },
      marketing_list:[],
      marketing_list_total:0,
      marketing_pages: {
        page: 1,
        page_block: 3,
        start: 9999,
        end: 1,
        end_page: 1,
        pagesList: [],
        num_block: 5,
      },
      blacklist_list:[],
      blacklist_list_total:0,
      blacklist_pages: {
        page: 1,
        page_block: 4,
        start: 9999,
        end: 1,
        end_page: 1,
        pagesList: [],
        num_block: 5,
      },
    }
  },
  methods: {
    getBlacklistList() {
      this.mainStore.listBlacklist({member:this.commonStore.member.member},this.blacklist_pages).then((resp) => {
        if (resp.data.code == 200) {
          this.blacklist_list = resp.data.body;
          this.blacklist_list_total = resp.data.total;
          this.getPageNums(this.blacklist_list_total, this.blacklist_pages);
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getKnowhowList() {
      let option = {
        member:this.commonStore.member.member,
      }
      if(this.knowhow_type !== 0){
        option.type = this.knowhow_type;
      }
      this.mainStore.listKnowhow(option,this.knowhow_pages).then((resp) => {
        if (resp.data.code == 200) {
          this.knowhow_list = resp.data.body;
          this.knowhow_list_total = resp.data.total;
          this.getPageNums(this.knowhow_list_total, this.knowhow_pages);
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getMarketingList() {
      this.mainStore.listMarketing({member:this.commonStore.member.member},this.marketing_pages).then((resp) => {
        if (resp.data.code == 200) {
          this.marketing_list = resp.data.body;
          this.marketing_list_total = resp.data.total;
          this.getPageNums(this.marketing_list_total, this.marketing_pages);
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    onChangePage(page){
      if(this.board_type === 0){
        this.knowhow_pages.page = page;
        this.getKnowhowList();
      } else if(this.board_type === 1){
        this.marketing_pages.page = page;
        this.getMarketingList();
      } else if(this.board_type === 2){
        this.blacklist_pages.page = page;
        this.getBlacklistList();
      }
    }
  },
  mounted() {
    this.getMarketingList();
    this.getKnowhowList();
    this.getBlacklistList();
  }
}

</script>
