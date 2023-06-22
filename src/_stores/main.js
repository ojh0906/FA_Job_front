import { defineStore } from "pinia";
import { useAuthStore } from "@/_stores";
import { http } from "@/_services";

const baseUrl = `/main`;

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
  }),
  actions: {
    async listProject( option = {}, pages = { page: 1, page_block: 4 }) {
      let params = {
        ...option,
        ...pages,
      };
      return await http.post(`${baseUrl}/project/list`, params);
    },
    async listBlacklist( option = {}, pages = { page: 1, page_block: 3 }) {
      let params = {
        ...option,
        ...pages,
      };
      //console.log(params);
      return await http.post(`${baseUrl}/blacklist/list`, params);
    },
    async listNotice( option = {}, pages = { page: 1, page_block: 5 }) {
      let params = {
        ...option,
        ...pages,
      };
      return await http.post(`${baseUrl}/notice/list`, params);
    },
    async listKnowhow( option = {}, pages = { page: 1, page_block: 5 }) {
      let params = {
        ...option,
        ...pages,
      };
      return await http.post(`${baseUrl}/knowhow/list`, params);
    },
    async listMarketing( option = {}, pages = { page: 1, page_block: 5 }) {
      let params = {
        ...option,
        ...pages,
      };
      return await http.post(`${baseUrl}/marketing/list`, params);
    },
  },
  persist: true,
});
