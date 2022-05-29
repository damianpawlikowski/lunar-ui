<template>
  <section>
    <h3 class="title">{{ $t("characters") }}</h3>
    <table v-if="!isLoading" class="table table-hover table-sm">
      <thead>
        <tr>
          <th>{{ $t("name") }}</th>
          <th>{{ $t("level") }}</th>
          <th>{{ $t("vocation") }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="player in data.players" :key="player.name">
          <tr>
            <td>{{ player.name }}</td>
            <td>{{ player.level }}</td>
            <td>
              {{ $t(getVocationNameById(player["vocation"]).toLowerCase()) }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <a
      class="button button-default"
      role="button"
      data-bs-toggle="modal"
      data-bs-target="#createPlayerModal"
    >
      {{ $t("createCharacter") }}
    </a>
    <CreatePlayerModal @onNewPlayer="onNewPlayer" />
  </section>
</template>

<script>
import { useConstantsStore } from "@/stores/constantsStore";
import useGetAccountPlayers from "@/composables/getAccountPlayers";
import CreatePlayerModal from "@/components/CreatePlayerModal.vue";

export default {
  components: {
    CreatePlayerModal,
  },
  setup() {
    const constantsStore = useConstantsStore();
    const { getAccountPlayers, isLoading, data } = useGetAccountPlayers();

    getAccountPlayers().finally((isLoading.value = false));

    const onNewPlayer = () => {
      getAccountPlayers().finally((isLoading.value = false));
    };

    return {
      isLoading,
      data,
      getVocationNameById: constantsStore.getVocationNameById,
      onNewPlayer,
    };
  },
};
</script>
