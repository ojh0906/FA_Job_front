import { defineStore } from 'pinia';
import { http } from '@/_services';
import router from '@/_router';
import dayjs from 'dayjs';

const baseUrl = `/member`;

export const useCommonStore = defineStore({
  id: 'member',
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
            console.log(resp)
            if(resp.data.body.member.state === 0){ // 미승인
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
            //console.log(this.usr);
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
      router.push('/');
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
  },
  persist: true,
});
