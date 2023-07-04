<template>
  <section id="apply" @click="this.clickSelect">
    <p class="apply-title">팀 지원하기</p>
    <div class="field-wrap">

      <div class="field">
        <p class="input-title">팀 이름</p>
        <div class="input-wrap">
          <div class="field_input">
            <input type="text" placeholder="팀 이름을 입력해주세요." v-model="this.team_name">
          </div>
        </div>
      </div>

      <div class="field">
        <p class="input-title">팀 소개</p>
        <div class="input-wrap">
          <div class="field_input">
            <textarea placeholder="팀 소개 내용을 입력해주세요." v-model="this.team_info"></textarea>
            <!-- <input type="text" placeholder="닉네임"> -->
          </div>
        </div>
      </div>
      <div class="field">
        <p class="input-title">팀원 목록</p>
        <div class="team-list-wrap">
          <div class="team-list input-wrap" v-for="(item,idx) in this.apply_member_list">
            <div class="name">{{ item.name }}</div>
            <div class="phone">{{ item.phone_number }}</div>
            <div class="email">{{ item.email }}</div>
            <img class="close-icon" src="/image/project/close.png" @click="removeApplyMember(idx)"/>
          </div>
        </div>
        <div class="add-member-wrap">
          <div class="add-member btn btn3" @click="this.addMemberPopup = true;">
            <img class="add-icon" src="/image/project/add.png" />
            팀원 초대하기
          </div>
        </div>
      </div>
    </div>

    <div class="team-apply-btn-wrap">
      <div class="team-apply-btn btn btn1" @click="saveApply">
        <img class="team-icon" src='/image/project/team.png' />
        팀 지원하기
      </div>
<!--
      <router-link :to="{ name: 'ProjectApplyCompletion', query: {} }">
      </router-link>
-->
    </div>
  </section>

  <section id="popup" class="team-popup" v-if="this.addMemberPopup" @click="this.clickSelect">
    <article class="popup-box-wrap">
      <div class="popup-title">
        <p>
          팀원 초대
        </p>
        <img class="close-icon" @click="this.addMemberPopup = false" src="/image/project/close2.png" />
      </div>
      <div class="popup-box">
        <p class="search-title">팀원의 휴대폰번호로 검색하여 팀원을 초대해 주세요.</p>
        <label class="popup-search">
          <input type="phone" class="search" placeholder="휴대폰번호 검색" v-model="this.searchKeyword" @keypress.enter="this.getMemberList"/>
          <img class="team-icon" src='/image/project/search.png' @click="this.getMemberList"/>
        </label>
        <div class="field-wrap">
          <div class="field">
            <p class="input-title">검색 결과</p>
            <div class="team-search-list">
              <div class="team-list-wrap">
                <div class="team-list input-wrap" v-for="item in this.member_list">
                  <input type="checkbox" class="checkbox" @click="item.apply = !item.apply" :checked="item.apply"/>
                  <div class="name">{{ item.name }}</div>
                  <div class="phone">{{ item.phone_number }}</div>
                  <div class="email">{{ item.email }}</div>
                </div>
              </div>
            </div>
            <div class="add-member-wrap">
              <div class="add-member btn btn1" @click="this.setMemberList">
                <img class="add-icon" src="/image/project/add2.png" />
                초대하기
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import {useCommonStore,useProjectStore,useMemberStore} from '@/_stores';

export default {
  setup() {
    const commonStore = useCommonStore();
    const projectStore = useProjectStore();
    const memberStore = useMemberStore();
    return {
      commonStore,
      projectStore,
      memberStore,
    }
  },
  data() {
    return {
      addMemberPopup: false,
      searchKeyword:'',
      member: this.commonStore.member.member,
      type: this.getField('project_apply','팀'),
      team_name:'',
      team_info:'',
      leader:true,
      member_list:[],
      apply_member_list:[],
    }
  },
  methods: {
    clickSelect(event) {
      if (event.target.classList.contains('team-popup')) {
        this.addMemberPopup = false;
      }
    },
    getMemberList() {
      if(this.searchKeyword === ''){
        alert('휴대폰번호를 입력해주세요.');
        return;
      }
      this.member_list = [];
      let params = {
        team_yn: true,
        project: this.$route.query.key,
        member: this.commonStore.member.member,
        searchKeyword: this.searchKeyword,
        searchType: 'phone_number',
      };
      this.memberStore.list(params,{}).then((resp) => {
        if (resp.data.code == 200) {
          this.member_list = resp.data.body;
          this.member_list.forEach((m,i) => {
            const idx = this.apply_member_list.findIndex(member => member.member === m.member);
            console.log(idx, m.name);
            if(idx < 0){
              m.apply = false;
            } else {
              m.apply = true;
            }
          });
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    saveApply(){
      if(confirm('지원하시겠습니까?')){
        if(this.apply_member_list.length === 0){
          alert('팀원이 없습니다.');
          return;
        }
        let params = {
          member: this.commonStore.member.member,
          type: this.getField('project_apply','팀'),
          team_name:this.team_name,
          team_info:this.team_info,
          leader:this.leader,
          member_list:this.apply_member_list,
        }
        this.projectStore.saveApplyTeam(this.$route.query.key, params).then((resp) => {
          console.log(resp)
          if (resp.data.code == 200) {
            alert('지원되었습니다.');
            this.$router.push({name:'ProjectDetail', query: { key: this.$route.query.key }});
          }
        }).catch(err => {
          console.log("err", err);
        });
      }
    },
    setMemberList(){
      this.apply_member_list = [];
      this.member_list.filter(i => i.apply).forEach(m => this.apply_member_list.push(m));
      this.addMemberPopup = false;
      this.searchKeyword = '';
      this.member_list = [];
    },
    removeApplyMember(idx){
      this.apply_member_list.splice(idx,1);
    }
  },
  mounted() {
    if(this.$route.query.key == null){
      alert('잘못된 접근입니다.');
      this.$router.push({name:'ProjectList'});
    }
  }
}
</script>

<style></style>