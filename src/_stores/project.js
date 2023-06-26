import { defineStore } from "pinia";
import { http } from "@/_services";

const baseUrl = `/project`;

export const useProjectStore = defineStore({
  id: "project",
  state: () => ({
  }),
  actions: {

  },
  persist: true,
});
