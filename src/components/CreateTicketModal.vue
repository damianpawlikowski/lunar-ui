<template>
  <VModal id="createTicketModal">
    <template v-slot:header>
      <h3 class="modal-title title">{{ $t("createTicket") }}</h3>
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
          <label class="form-label" for="ticketTitle">{{ $t("title") }}</label>
          <input
            class="form-control"
            id="ticketTitle"
            type="text"
            v-model="ticketInfo.title"
            required
            maxlength="64"
          />
        </div>
        <div class="mb-3">
          <label class="form-label" for="ticketBody">{{ $t("body") }}</label>
          <textarea
            class="form-control"
            id="ticketBody"
            v-model="ticketInfo.body"
            required
          ></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label" for="ticketType">{{ $t("type") }}</label>
          <select class="form-select" id="ticketType" v-model="ticketInfo.type">
            <option
              v-for="(type, typeId) in constantsStore.ticketTypes"
              :key="type"
              :value="typeId"
              required
            >
              {{ type }}
            </option>
          </select>
        </div>
        <div>
          <button class="button button-blue w-100">Ok</button>
        </div>
      </form>
    </template>
  </VModal>
</template>

<script>
import { reactive } from "vue";
import { Modal } from "bootstrap";

import VModal from "@/components/VModal.vue";
import { useConstantsStore } from "@/stores/constantsStore";
import useCreateTicket from "@/composables/createTicket";

export default {
  components: {
    VModal,
  },
  setup(props, context) {
    const ticketInfo = reactive({
      title: null,
      body: null,
      type: 0,
    });

    const constantsStore = useConstantsStore();
    const { createTicket, isLoading, data } = useCreateTicket();

    const handleSubmit = () => {
      createTicket(ticketInfo)
        .then(() => {
          const createTicketModal = Modal.getInstance(
            document.getElementById("createTicketModal")
          );
          createTicketModal.hide();
        })
        .finally(() => {
          isLoading.value = false;
          context.emit("onNewTicket");
        });
    };

    return {
      ticketInfo,
      constantsStore,
      handleSubmit,
      isLoading,
      data,
    };
  },
};
</script>

<style scoped>
.button-blue {
  font-size: 18px;
  height: 45px;
}

textarea {
  height: 20rem;
}

.title {
  border-left: none;
}
</style>
