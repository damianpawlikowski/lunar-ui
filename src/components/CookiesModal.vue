<template>
  <VModal :id="'cookiesModal'">
    <template v-slot:header>
      <h4 class="text-center text-red modal-title">
        Privacy and Cookie Policy
      </h4>
    </template>
    <template v-slot:body>
      <p class="text-blue">
        We use cookies to give you the best possible experience on the website.
        By clicking “Accept all“, you agree to the storage of cookies on your
        device to improve website navigation, analyze website use, and assist
        with our marketing efforts.
      </p>
    </template>
    <template v-slot:footer>
      <button
        @click="setCookiesAgreement"
        class="button button-red"
        type="button"
        data-bs-dismiss="modal"
      >
        Accept all
      </button>
    </template>
  </VModal>
</template>

<script>
import { useCookies } from "vue3-cookies";

import VModal from "@/components/VModal.vue";
export default {
  components: {
    VModal,
  },
  setup() {
    const { cookies } = useCookies();

    const setCookiesAgreement = () => {
      cookies.set("Cookies-Agreement", "true", "30d");
    };

    return { cookies, setCookiesAgreement };
  },
};
</script>

<style></style>
