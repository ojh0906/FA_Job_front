import { defineStore } from "pinia";
import { useAuthStore } from "@/_stores";
import { http } from "@/_services";

const baseUrl = `/member`;

export const useMemberStore = defineStore({
  id: "member",
  state: () => ({
  }),
  actions: {

  },
  persist: true,
});
