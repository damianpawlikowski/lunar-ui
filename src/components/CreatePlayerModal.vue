<template>
  <VModal id="createPlayerModal">
    <template v-slot:header>
      <h3 class="modal-title title">Create character</h3>
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
          <label class="form-label" for="playerName">Nickname</label>
          <input
            class="form-control"
            id="playerName"
            v-model="playerInfo.name"
            :disabled="isLoading"
            type="text"
            required
            minlength="3"
            maxlength="16"
          />
        </div>
        <div class="mb-3">
          <label class="form-label" for="playerVocation">Vocation</label>
          <select
            class="form-select"
            id="playerVocation"
            v-model="playerInfo.vocation"
            :disabled="isLoading"
            aria-label="Choose vocation"
            required
          >
            <option
              v-for="(voc, vocId) in constantsStore.gameVocations"
              :key="voc"
              :value="vocId"
            >
              {{ voc.name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label" for="playerSex">Sex</label>
          <select
            class="form-select"
            id="playerSex"
            v-model="playerInfo.sex"
            :disabled="isLoading"
            aria-label="Choose sex"
          >
            <option
              v-for="(sex, sexId) in constantsStore.gameSex"
              :key="sex"
              :value="sexId"
              required
            >
              {{ sex }}
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
import useCreatePlayer from "@/composables/createPlayer";
import { useConstantsStore } from "@/stores/constantsStore";

export default {
  components: {
    VModal,
  },
  setup(props, context) {
    const playerInfo = reactive({
      name: null,
      vocation: 1,
      sex: 0,
    });

    const constantsStore = useConstantsStore();
    const { createPlayer, isLoading, status, msg, data } = useCreatePlayer();

    const handleSubmit = () => {
      createPlayer(playerInfo)
        .then(() => {
          const createAccountModal = Modal.getInstance(
            document.getElementById("createPlayerModal")
          );
          createAccountModal.hide();
        })
        .finally(() => {
          isLoading.value = false;
          context.emit("onNewPlayer");
        });
    };

    return {
      constantsStore,
      playerInfo,
      handleSubmit,
      isLoading,
      status,
      msg,
      data,
    };
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
