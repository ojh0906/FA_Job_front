import { defineStore } from "pinia";
import { http } from "@/_services";

const baseUrl = `/member`;

export const useMemberStore = defineStore({
  id: "member",
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
    async matchPassword(id, params) {
      return await http.post(`${baseUrl}/${id}/match/password`, params);
    },
    async modifyPassword(id, params) {
      return await http.put(`${baseUrl}/${id}/password`, params);
    },
    async modify(id, params) {
      return await http.put(`${baseUrl}/${id}`, params, { headers: { "Content-Type": "multipart/form-data" } });
    },
    async remove(id) {
      return await http.delete(`${baseUrl}/${id}`);
    },
    async saveResume(id, params) {
      return await http.post(`${baseUrl}/${id}/resume/save`, params);
    },
  },
  persist: true,
});
