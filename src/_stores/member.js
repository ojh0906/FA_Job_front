import { defineStore } from "pinia";
import { http } from "@/_services";

const baseUrl = `/member`;

export const useMemberStore = defineStore({
  id: "member",
  state: () => ({
  }),
  actions: {
    async matchPassword(id, params) {
      return await http.post(`${baseUrl}/${id}/match/password`, params);
    },
    async modifyPassword(id, params) {
      return await http.put(`${baseUrl}/${id}/password`, params);
    },
  },
  persist: true,
});
