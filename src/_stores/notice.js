import { defineStore } from "pinia";
import { http } from "@/_services";

const baseUrl = `/notice`;

export const useNoticeStore = defineStore({
  id: "notice",
  state: () => ({
  }),
  actions: {
    async list(option = {}, pages = { page: 1, page_block: 10 }) {
      let params = {
        ...option,
        ...pages,
      };
      return await http.post(`${baseUrl}/list`, params);
    },
    async getById(id) {
      return await http.get(`${baseUrl}/${id}`);
    },
    async saveClick(id, params) {
      return await http.post(`${baseUrl}/${id}/click/save`, params);
    },
  },
  persist: true,
});
