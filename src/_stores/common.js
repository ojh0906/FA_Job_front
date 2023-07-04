import { defineStore } from 'pinia';
import { http } from '@/_services';
import router from '@/_router';
import dayjs from 'dayjs';

const baseUrl = `/member`;
const level_list = [
  { idx: 0, maxLevel:40, requiredExp: 1200 },
  { idx: 1, maxLevel:80, requiredExp: 3600 },
  { idx: 2, maxLevel:100, requiredExp: 9600 },
]

export const useCommonStore = defineStore({
  id: 'common',
  state: () => ({
    member: null,
    loginCheck:false,
    auth_token: "",
    expiryTime: "",
    isAuthenticated: false,
    return_url: null,
    field: null,
  }),
  actions: {
    async save(params) { // 회원가입
      return await http.post(`${baseUrl}/save`, params, { headers: { "Content-Type": "multipart/form-data" } });
    },
    async login(email, password, auto_login) {
      try {
          const member = await http.post(`${baseUrl}/login`, { email:email, password:password,auto_login:auto_login }).then((resp) => {
          if (resp.data.code === 200) {
            if(resp.data.body.member.state === this.field[this.field.findIndex(f => f.type_name === 'member_state' && f.name === '미승인')].field){ // 미승인
              let query = {
                nick_name: resp.data.body.member.nick_name,
                isForeigner: true,
                state: resp.data.body.member.state,
              }
              router.push({name:'RegisterEnd', query:query});
            } else {
              this.member = resp.data.body.member;
              this.auth_token = resp.data.body.token;
              this.isAuthenticated = true;
              this.expiryTime = dayjs(new Date()).add(resp.data.body.expiryHour, 'hour').format('YYYY-MM-DD HH:mm:ss');
              this.loginCheck = false;
              this.setMemberLevel();
              router.push(this.return_url || '/');
            }
          }else{
            this.loginCheck = true;
            return resp;
          }
        });
        return member;
        // redirect to previous url or default to home page
      } catch (error) {
        this.loginCheck = true;
        console.log("error user auth", error);
      }
    },
    async refresh() {
      try {
        const member = await http.get(`${baseUrl}/${this.member.member}`).then((resp) => {
          if (resp.data.code === 200) {
            this.member = resp.data.body;
            this.setMemberLevel();
          }else{
            return resp;
          }
        });
        return member;
        // redirect to previous url or default to home page
      } catch (error) {
        console.log("error user auth", error);
      }
    },
    logout() {
      this.member = null;
      this.auth_token = "";
      this.isAuthenticated = false;
      this.expiryTime = "";
      this.return_url = null;
      this.loginCheck = false;
      router.push('/login');
    },
    setReturnUrl(url){
      this.return_url = url;
    },
    async getField() {
      return await http.post(`/main/field/list`, {});
    },
    async find(params) {
      return await http.post(`${baseUrl}/find`, params);
    },
    async modifyPassword(params) {
      return await http.put(`${baseUrl}/find/password`, params);
    },
    async duple(params) {
      return await http.post(`${baseUrl}/duple`, params);
    },
    setMemberLevel(){
      let idx = -1;
      for(let i=0; i<level_list.length; i++){
        if(this.member.other_info.member_point <= (level_list[i].maxLevel * level_list[i].requiredExp)){
          idx = level_list[i].idx;
          break;
        }
      }

      this.member.other_info.member_level = Math.floor( this.member.other_info.member_point / level_list[idx].requiredExp)
      this.member.other_info.member_required = level_list[idx].requiredExp - (this.member.other_info.member_point % level_list[idx].requiredExp);
      this.member.other_info.member_percent = Math.round((this.member.other_info.member_point % level_list[idx].requiredExp) / level_list[idx].requiredExp * 100);
      if(this.member.type === this.field[this.field.findIndex(f => f.type_name === 'member_type' && f.name === '기업')].field){
        this.member.nick_name = this.member.company_name;
      }
    },
    async matchPassword(id, params) {
      return await http.post(`${baseUrl}/${id}/match/password`, params);
    },
  },
  persist: true,
});
