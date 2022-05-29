<template>
  <VModal id="loginModal">
    <template v-slot:header>
      <h3 class="modal-title title">{{ $t("accountLogin") }}</h3>
      <button
        class="btn-close"
        type="button"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </template>
    <template v-slot:body>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <input
            class="form-control"
            v-model="credentials.name"
            type="text"
            :placeholder="$t('name')"
          />
        </div>
        <div class="mb-3">
          <input
            class="form-control"
            v-model="credentials.password"
            type="password"
            :placeholder="$t('password')"
          />
        </div>
        <div>
          <button class="button button-blue w-100">{{ $t("login") }}</button>
        </div>
      </form>
    </template>
  </VModal>
</template>

<script>
import { reactive } from "vue";
import { Modal } from "bootstrap";
import { useRouter } from "vue-router";

import VModal from "@/components/VModal.vue";
import { useAuthStore } from "@/stores/authStore";

export default {
  components: {
    VModal,
  },
  setup() {
    const credentials = reactive({});
    const router = useRouter();
    const authStore = useAuthStore();

    const handleSubmit = () => {
      authStore.login(credentials).then(() => {
        const loginModal = Modal.getInstance(
          document.getElementById("loginModal")
        );
        loginModal.hide();
        router.push({ name: "Account" });
      });
    };

    return { credentials, handleSubmit, authStore };
  },
};
</script>

<style scoped>
.title {
  border-left: none;
}
.button-blue {
  font-size: 18px;
  height: 45px;
}
</style>
