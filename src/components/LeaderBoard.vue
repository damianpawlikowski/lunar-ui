<template>
  <div v-if="!isLoading" class="content-card">
    <h3 class="title">{{ $t("top5Players") }}</h3>
    <template v-for="player in data.players" :key="player['name']">
      <div class="mb-2">
        <h4 class="subtitle">{{ player["name"] }}</h4>
        <span>
          Level: {{ player["level"] }},
          {{ $t(getVocationNameById(player["vocation"]).toLowerCase()) }}
        </span>
      </div>
    </template>
  </div>
</template>

<script>
import useGetHighscores from "@/composables/getHighscores";
import { useConstantsStore } from "@/stores/constantsStore";

export default {
  setup() {
    const { getHighscores, isLoading, data } = useGetHighscores();
    const constantsStore = useConstantsStore();

    getHighscores(null, 0, 5).finally((isLoading.value = false));

    return {
      isLoading,
      data,
      getVocationNameById: constantsStore.getVocationNameById,
    };
  },
};
</script>

<style scoped>
.content-card {
  height: 370px;
}
</style>
