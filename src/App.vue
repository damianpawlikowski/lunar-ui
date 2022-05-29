<template>
  <TheHeader />
  <main class="container">
    <div class="row">
      <div class="col-12 col-lg-8 mb-4">
        <TheCarousel />
      </div>
      <div class="col-12 col-lg-4 mb-4">
        <LeaderBoard />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-7 col-lg-8 mb-4">
        <router-view />
      </div>
      <div class="col-12 col-md-5 col-lg-4 mb-4"></div>
    </div>
  </main>
  <TheFooter />
  <CookiesModal />
  <CreateAccountModal />
  <LoginModal />
</template>

<script>
import { useCookies } from "vue3-cookies";
import { onMounted } from "vue";
import { Modal } from "bootstrap";

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheCarousel from "@/components/TheCarousel.vue";
import LeaderBoard from "@/components/LeaderBoard.vue";
import CookiesModal from "@/components/CookiesModal.vue";
import CreateAccountModal from "@/components/CreateAccountModal.vue";
import LoginModal from "@/components/LoginModal.vue";
import { useAuthStore } from "@/stores/authStore";
import { useConstantsStore } from "@/stores/constantsStore";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheCarousel,
    LeaderBoard,
    CookiesModal,
    CreateAccountModal,
    LoginModal,
  },
  setup() {
    const { cookies } = useCookies();
    const constantsStore = useConstantsStore();

    // Fetch constants and "store in the store??"
    constantsStore.getGameConstants();
    constantsStore.getTicketConstants();

    // Recheck-Auth === "true" ? Send API request to the backend
    // if JWT is still valid re-authenticate user. This solves
    // problem when user mistakely hard refresh page and lose auth
    if (cookies.get("Recheck-Auth") === "true") {
      useAuthStore()
        .getAccount()
        .then(() => {
          useAuthStore().isAuthenticated = true;
        });
    }

    onMounted(() => {
      if (
        !cookies.get("Cookies-Agreement") ||
        cookies.get("Cookies-Agreement") !== "true"
      ) {
        const cookiesModal = new Modal(
          document.getElementById("cookiesModal"),
          {
            keyboard: false,
            backdrop: "static",
          }
        );
        cookiesModal.show();
      }
    });

    return { cookies };
  },
};
</script>
