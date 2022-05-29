<template>
  <VModal id="createAccountModal">
    <template v-slot:header>
      <h3 class="modal-title title">{{ $t("createAccount") }}</h3>
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
            required
            minlength="6"
            maxlength="32"
          />
        </div>
        <div class="mb-3">
          <input
            class="form-control"
            v-model="credentials.email"
            type="email"
            placeholder="Email"
            required
            maxlength="254"
          />
        </div>
        <div class="mb-3">
          <input
            class="form-control"
            v-model="credentials.password"
            type="password"
            :placeholder="$t('password')"
            required
            minlength="8"
          />
        </div>
        <div>
          <button class="button button-blue w-100">{{ $t("signUp") }}</button>
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
import useCreateAccount from "@/composables/createAccount";
import { useAuthStore } from "@/stores/authStore";

export default {
  components: {
    VModal,
  },
  setup() {
    const credentials = reactive({});
    const router = useRouter();

    const handleSubmit = () => {
      useCreateAccount()
        .createAccount(credentials)
        .then(() => {
          useAuthStore()
            .login(credentials)
            .then(() => {
              const createAccountModal = Modal.getInstance(
                document.getElementById("createAccountModal")
              );
              createAccountModal.hide();
              router.push({ name: "Account" });
            });
        });
    };

    return { credentials, handleSubmit };
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
