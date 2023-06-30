import { defineStore } from "pinia";
import { http } from "@/_services";

const baseUrl = `/project`;

export const useProjectStore = defineStore({
  id: "project",
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
    async save(params) {
      return await http.post(`${baseUrl}/save`, params, { headers: { "Content-Type": "multipart/form-data" } });
    },
    async modify(id, params) {
      return await http.put(`${baseUrl}/${id}`, params, { headers: { "Content-Type": "multipart/form-data" } });
    },
    async remove(id) {
      return await http.delete(`${baseUrl}/${id}`);
    },
    async saveClick(id, params) {
      return await http.post(`${baseUrl}/${id}/click/save`, params);
    },
    async saveLike(id, params) {
      return await http.post(`${baseUrl}/${id}/like/save`, params);
    },
    async saveApply(id, params) {
      return await http.post(`${baseUrl}/${id}/apply/save`, params);
    },
  },
  persist: true,
});
