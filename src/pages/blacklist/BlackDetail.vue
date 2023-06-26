<template>
  <div id="blacklist-page02">
    <!--타이틀-->
    <div class="bl02_header">
      <h3 class="bl02_title">블랙리스트</h3>
    </div>

    <div class="bl_container02">
      <table class="bl02_table02">
        <th class="t_title02 bl_01" style="width: 110px;">{{ this.getFieldName(this.blacklist.target) }}</th>
        <th class="t_title02 bl_02" style="width: 120px;">{{ this.getFieldName(this.blacklist.type) }}</th>
        <th class="t_title02 bl_03" style="width: 664px;">{{ this.blacklist.title }}</th>
        <th class="t_title02 bl_04" style="width: 120px;">{{ formattedDate(this.blacklist.reg_date) }}</th>
        <th class="t_title02 bl_05" style="width: 80px;">{{ this.blacklist.other_info.click_cnt }}</th>
        <th class="t_title02 bl_06" style="width: 56px;"><i class="i_icon"></i></th>
      </table>

      <div class="blbtn_area" v-if="true"> <!-- TODO 작성자만 보이게-->
        <a href="#" class="modify-btn">수정</a>
        <a href="#" class="delete-btn">삭제</a>
      </div>

      <div class="blcont_area" v-html="this.blacklist.content"></div>

      <table class="comment02">
        <tr class="tr_com" v-for="(item,idx) in this.blacklist.other_info.reply_list">
          <td class="bltd_com01 td_01">익명 {{idx+1}}</td>
          <td class="bltd_com02 td_02">{{ item.content }}</td>
          <td class="bltd_com03 td_03">{{ formattedDate(item.reg_date) }}</td>
        </tr>
        <tr class="tr_com03">
          <td class="bltd_com01 td_01">댓글작성</td>
          <td class="bltd_com02 td_02">
            <div class="field_input">
              <input type="text" placeholder="답변을 입력하세요." v-model="this.content" @keypress.enter="this.reply">
            </div>
          </td>
          <td class="bltd_com03 td_03">
            <a @click="this.reply">등록</a>
          </td>
        </tr>
      </table>

      <div class="bl02_row">
        <router-link class="btn4" :to="{ name: 'BlacklistList', query: {} }">
          목록으로
        </router-link>
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
      blacklist:{
        target:0,
        type:0,
        title:'',
        content:'',
        reg_date:'',
        other_info:{
          reply_list:[],
          click_cnt:0
        },
      },
      content:'',
    }
  },
  methods: {
    get() {
      this.blacklistStore.getById(this.$route.query.key).then((resp) => {
        if (resp.data.code == 200) {
          this.blacklist = resp.data.body;
          if(this.blacklist.other_info.reply_list == null){
            this.blacklist.other_info.reply_list = [];
          }
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    reply() {
      if(this.content === ''){
        alert('댓글 내용을 입력해주세요.');
      }
      let params = {
        member: this.commonStore.member.member,
        content: this.content,
      }
      this.blacklistStore.saveReply(this.$route.query.key,params).then((resp) => {
        if (resp.data.code == 200) {
          this.content = '';
          this.get();
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
  },
  mounted() {
    if(this.$route.query.key == null){
      alert('잘못된 접근입니다.');
      this.$router.push({name:'BlacklistList'});
    } else {
      this.get();
      this.blacklistStore.saveClick(this.$route.query.key,{member:this.commonStore.member.member}); // 조회수 증가
    }
  }
}
</script>
