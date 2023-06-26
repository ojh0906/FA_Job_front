import { defineStore } from "pinia";
import { http } from "@/_services";

const baseUrl = `/contact`;

export const useMemberStore = defineStore({
  id: "contact",
  state: () => ({
  }),
  actions: {
    async save(params) {
      return await http.post(`${baseUrl}/save`, params);
    },
  },
  persist: true,
});
