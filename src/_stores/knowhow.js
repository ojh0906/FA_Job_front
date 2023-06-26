import { defineStore } from "pinia";
import { http } from "@/_services";

const baseUrl = `/knowhow`;

export const useKnowhowStore = defineStore({
  id: "knowhow",
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
    async saveReply(id, params) {
      return await http.post(`${baseUrl}/${id}/reply/save`, params);
    },
  },
  persist: true,
});
