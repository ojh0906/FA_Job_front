import { defineStore } from "pinia";
import { useAuthStore } from "@/_stores";
import { http } from "@/_services";

const baseUrl = `/member`;

export const useMemberStore = defineStore({
  id: "member",
  state: () => ({
  }),
  actions: {
    async save(params) { // 회원가입
      return await http.post(`${baseUrl}/save`, params);
    },
  },
  persist: true,
});
