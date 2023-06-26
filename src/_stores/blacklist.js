import { defineStore } from "pinia";
import { http } from "@/_services";

const baseUrl = `/blacklist`;

export const useMemberStore = defineStore({
  id: "blacklist",
  state: () => ({
  }),
  actions: {
    async list(option = { }, pages = { page: 1, page_block: 10 }) {
      let params = {
        ...option,
        ...pages,
      };
      return await http.post(`${baseUrl}/list`, params);
    },
    async getById(id) {
      return await http.get(`${baseUrl}/${id}`);
    },
    async save(id, params) {
      return await http.post(`${baseUrl}/save`, params);
    },
    async modify(id, params) {
      return await http.put(`${baseUrl}/${id}`, params);
    },
    async remove(id) {
      return await http.delete(`${baseUrl}/${id}`);
    },
  },
  persist: true,
});
