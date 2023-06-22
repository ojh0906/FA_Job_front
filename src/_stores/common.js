import { defineStore } from 'pinia';
import { http } from '@/_services';
import router from '@/_router';
import dayjs from 'dayjs';

const baseUrl = `/member`;

export const useAuthStore = defineStore({
  id: 'member',
  state: () => ({
    usr: null,
    loginCheck:false,
    auth_token: "",
    expiryTime: "",
    isAuthenticated: false,
    return_url: null,
  }),
  actions: {
    async save(params) { // 회원가입
      return await http.post(`${baseUrl}/save`, params);
    },
    async login(id, password) {
      try {
          const usr = await http.post(`${baseUrl}/login`, { id:id, password:password }).then((resp) => {
          if (resp.data.code === 200) {
            this.usr = resp.data.body.usr;
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
        return usr;
        // redirect to previous url or default to home page
      } catch (error) {
        this.loginCheck = true;
        console.log("error user auth", error);
      }
    },
    async refresh() {
      try {
        const usr = await http.get(`${baseUrl}/${this.usr.idx}`).then((resp) => {
          if (resp.data.code === 200) {
            this.usr = resp.data.body;
            //console.log(this.usr);
          }else{
            return resp;
          }
        });
        return usr;
        // redirect to previous url or default to home page
      } catch (error) {
        console.log("error user auth", error);
      }
    },
    logout() {
      this.usr = null;
      this.auth_token = "";
      this.isAuthenticated = false;
      this.expiryTime = "";
      this.return_url = null;
      router.push('/');
    },
    setReturnUrl(url){
      this.return_url = url;
    },
  },
  persist: true,
});
