import axios from "axios";
import { defineStore } from "pinia";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    status: null,
    msg: null,
    account: null,
    isAuthenticated: false,
  }),

  getters: {},

  actions: {
    async login(credentials) {
      const response = (await axios.post("api/account/login", credentials))
        .data;
      if (response) {
        this.account = response["data"].account;
        this.isAuthenticated = true;
        cookies.set("Recheck-Auth", "true");
      }
    },
    async logout() {
      const response = await axios.post("api/account/logout");
      if (response) {
        // Access-Token cookie is removed by the server.
        cookies.remove("Recheck-Auth");
        this.$reset();
        window.location.reload();
      }
    },
    async getAccount() {
      const response = (await axios.get("api/account/get")).data;
      if (response) {
        this.account = response["data"].account;
      }
    },
  },
});
