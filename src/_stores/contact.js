import { defineStore } from "pinia";
import { http } from "@/_services";

const baseUrl = `/contact`;

export const useContactStore = defineStore({
  id: "contact",
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
    async save(params) {
      return await http.post(`${baseUrl}/save`, params);
    },
  },
  persist: true,
});
