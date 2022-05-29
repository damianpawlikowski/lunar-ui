import axios from "axios";

import { useAuthStore } from "@/stores/authStore";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

axios.defaults.baseURL = "http://127.0.0.1:5000/";
axios.defaults.withCredentials = true;
axios.defaults.headers.common["X-CSRF-Token"] = cookies.get("CSRF-Token");

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    switch (error.response.status) {
      case 400:
        break;
      case 401: {
        cookies.remove("Recheck-Auth");
        useAuthStore().$reset();
        window.location.reload();
        break;
      }
      case 422: {
        break;
      }
      default:
        console.log(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default axios;
