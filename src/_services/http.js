import axios from "axios";
import { useAuthStore } from '@/_stores';

export const http = axios.create({
    // baseURL: `${import.meta.env.VITE_LOCAL_API_URL}`,
    baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    "Content-Type": "application/json",
   },
});

http.interceptors.request.use(
  (resp) => {
    // console.log("http request", resp);
    const authStore = useAuthStore();

    const isAuthenticated = authStore.isAuthenticated;
    const matches = resp.url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    const domain = matches && matches[1];
    if (isAuthenticated) {
        const token = authStore.auth_token;
        resp.headers.Authorization = `Bearer ${token}`;
    }
    return resp;
  },
  (error) => {
    // Do something with request error
    Promise.reject(error);
  }
);
http.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";