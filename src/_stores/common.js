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
      return await http.post(`${baseUrl}/save`, params);
    },
    async login(email, password, auto_login) {
      try {
          const member = await http.post(`${baseUrl}/login`, { email:email, password:password,auto_login:auto_login }).then((resp) => {
            console.log(resp);
          if (resp.data.code === 200) {
            this.member = resp.data.body.member;
            this.auth_token = resp.data.body.token;
            this.isAuthenticated = true;
            this.expiryTime = dayjs(new Date()).add(resp.data.body.expiryHour, 'hour').format('YYYY-MM-DD HH:mm:ss');
            this.loginCheck = false;
            router.push(this.return_url || '/');
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
      router.push('/');
    },
    setReturnUrl(url){
      this.return_url = url;
    },
    async getField() {
      try {
        const field = await http.post(`/main/field/list`, {}).then((resp) => {
          if (resp.data.code === 200) {
            this.field = resp.data.body;
            //console.log(this.field);
          }
        });
        return field;
        // redirect to previous url or default to home page
      } catch (error) {
        console.log("error user auth", error);
      }
    },
  },
  persist: true,
});
