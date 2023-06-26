import { defineStore } from "pinia";
import { http } from "@/_services";

const baseUrl = `/faq`;

export const useFaqStore = defineStore({
  id: "faq",
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
  },
  persist: true,
});
