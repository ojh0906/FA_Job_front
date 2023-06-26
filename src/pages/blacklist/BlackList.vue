<template>
  <div id="blacklist-page">
    <!--타이틀-->
    <div class="bl01_header">
      <h3 class="bl01_title">블랙리스트</h3>
      <p class="bl01_sub_title">등록된 글이 <span>{{ this.blacklist_list_total }}건</span> 있습니다.</p>
    </div>

    <div class="bl_container">
      <p>블랙리스트 설명 카피 노출 영역입니다. 블랙리스트 설명 카피 노출 영역입니다.</p>
      <div class="text-input">
        <input type="search" placeholder="제목 검색" v-model="this.searchKeyword" @keypress.enter="this.getList">
        <img src="/image/community/search.png" alt="검색이미지입니다." @click="this.getList">
      </div>
    </div>

    <div class="bltap_list">
      <div class="" @click="this.target = 0; this.getList();"><a :class="this.target === 0 ? 'btn5 btn01' : 'btn6'">전체</a></div>
      <div class=""
           @click="this.target = target.field; this.getList();"
           v-for="target in this.getFieldList('blacklist_target').sort((a, b) => a.field - b.field)">
        <a :class="this.target === target.field ? 'btn5 btn01' : 'btn6'">{{ target.name }}</a>
      </div>
    </div>

    <div id="bl01_box">
      <div class="list-box">
        <div class="bl_list01" v-for="item in this.blacklist_list" @click="goToDetail('BlacklistDetail',item.blacklist)">
          <h3>{{ item.title }}</h3>
          <div class="list01_info info01">
            <p class="list01_p"><span>분류</span>{{ this.getFieldName(item.target) }}</p>
            <p class="list01_p"><span>피해사례</span>{{ this.getFieldName(item.type) }}</p>
            <p class="list01_p"><span>등록일</span>{{ formattedDate(item.reg_date) }}</p>
          </div>
        </div>
      </div>

      <div class="pagination02">
        <a class="pointer" v-if="this.pages.start !== 1" @click="onChangePage(this.pages.start - 1)">
          <img src="/image/community/back.png" alt="뒤로가기버튼입니다.">
        </a>
        <a :class="this.pages.page == page ? 'active' : 'pointer'" v-for="page in this.pages.pagesList"
          @click="onChangePage(page)">
          {{ page }}
        </a>
        <a class="pointer" v-if="this.pages.end !== this.pages.end_page + 1"
          @click="onChangePage(this.pages.start + this.pages.num_block)">
          <img src="/image/community/foward.png" alt="앞으로가기버튼입니다.">
        </a>
      </div>

      <div class="bl01_row">
        <a href="#" class="btn1 btn01">블랙리스트 등록 요청</a>
      </div>
    </div>
  </div>
</template>

<script>
import { useCommonStore, useBlacklistStore } from '@/_stores';

export default {
  components: {
  },
  setup() {
    const commonStore = useCommonStore();
    const blacklistStore = useBlacklistStore();
    return {
      commonStore,
      blacklistStore,
    }
  },
  data() {
    return {
      target: 0,
      pages: {
        page: 1,
        page_block: 9,
        start: 9999,
        end: 1,
        end_page: 1,
        pagesList: [],
        num_block: 5,
      },
      blacklist_list_total: 0,
      blacklist_list: [],
      searchKeyword:'',
    }
  },
  methods: {
    getList() {
      this.blacklist_list = [];
      let option = {

      }
      if(this.target !== 0){
        option.target = this.target;
      }
      if(this.searchKeyword !== ''){
        option.searchKeyword = this.searchKeyword;
      }
      this.blacklistStore.list(option, this.pages).then((resp) => {
        if (resp.data.code == 200) {
          this.blacklist_list = resp.data.body;
          this.blacklist_list_total = resp.data.total;
          // 페이징 셋팅
          this.pagesList = this.getPageNums(this.blacklist_list_total, this.pages);
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    onChangePage(page) {
      this.pages.page = page;
      this.getList()
    }
  },
  mounted() {
    this.commonStore.getField();
    this.getList();

  }
}
</script>
