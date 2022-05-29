<template>
  <div class="content-card">
    <section>
      <h3 class="title">{{ $t("highscores") }}</h3>
      <div class="row">
        <div class="col-12 mb-3">
          <button
            class="button button-tag"
            @click="selectedSkill = 0"
            :class="selectedSkill === 0 ? 'selected' : ''"
          >
            {{ $t("level") }}
          </button>
          <button
            class="button button-tag"
            @click="selectedSkill = 1"
            :class="selectedSkill === 1 ? 'selected' : ''"
          >
            {{ $t("magic") }}
          </button>
          <button
            class="button button-tag"
            @click="selectedSkill = 2"
            :class="selectedSkill === 2 ? 'selected' : ''"
          >
            {{ $t("fist") }}
          </button>
          <button
            class="button button-tag"
            @click="selectedSkill = 3"
            :class="selectedSkill === 3 ? 'selected' : ''"
          >
            {{ $t("club") }}
          </button>
          <button
            class="button button-tag"
            @click="selectedSkill = 4"
            :class="selectedSkill === 4 ? 'selected' : ''"
          >
            {{ $t("sword") }}
          </button>
          <button
            class="button button-tag"
            @click="selectedSkill = 5"
            :class="selectedSkill === 5 ? 'selected' : ''"
          >
            {{ $t("axe") }}
          </button>
          <button
            class="button button-tag"
            @click="selectedSkill = 6"
            :class="selectedSkill === 6 ? 'selected' : ''"
          >
            {{ $t("dist") }}
          </button>
          <button
            class="button button-tag"
            @click="selectedSkill = 7"
            :class="selectedSkill === 7 ? 'selected' : ''"
          >
            {{ $t("shielding") }}
          </button>
          <button
            class="button button-tag"
            @click="selectedSkill = 8"
            :class="selectedSkill === 8 ? 'selected' : ''"
          >
            {{ $t("fishing") }}
          </button>
        </div>
        <div class="col-12">
          <button
            class="button button-tag"
            @click="selectedVocation = null"
            :class="selectedVocation === null ? 'selected blue' : ''"
          >
            {{ $t("all") }}
          </button>
          <button
            class="button button-tag"
            @click="selectedVocation = 1"
            :class="selectedVocation === 1 ? 'selected blue' : ''"
          >
            {{ $t("sorcerer") }}
          </button>
          <button
            class="button button-tag"
            @click="selectedVocation = 2"
            :class="selectedVocation === 2 ? 'selected blue' : ''"
          >
            {{ $t("druid") }}
          </button>
          <button
            class="button button-tag"
            @click="selectedVocation = 3"
            :class="selectedVocation === 3 ? 'selected blue' : ''"
          >
            {{ $t("paladin") }}
          </button>
          <button
            class="button button-tag"
            @click="selectedVocation = 4"
            :class="selectedVocation === 4 ? 'selected blue' : ''"
          >
            {{ $t("knight") }}
          </button>
        </div>
      </div>
      <table v-if="!isLoading" class="table table-sm table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th @click="sortName()">{{ $t("name") }}</th>
            <th @click="sortSkill()">{{ $t("" + data["skill"]) }}</th>
            <th @click="sortVocation()">{{ $t("vocation") }}</th>
          </tr>
        </thead>
        <tbody>
          <template
            v-for="(player, index) in data.players"
            :key="player['name']"
          >
            <tr>
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ player["name"] }}</td>
              <td>{{ player[data.skill] }}</td>
              <td>
                {{ $t(getVocationNameById(player["vocation"]).toLowerCase()) }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import { watch } from "vue";

import useGetHighscores from "@/composables/getHighscores";
import { useConstantsStore } from "@/stores/constantsStore";

export default {
  setup() {
    const { getHighscores, isLoading, data } = useGetHighscores();
    const constantsStore = useConstantsStore();
    const selectedSkill = ref(0);
    const selectedVocation = ref(null);

    getHighscores(null, 0, 50).finally((isLoading.value = false));

    watch(selectedSkill, (newSelect) => {
      getHighscores(selectedVocation.value, newSelect, 50).finally(
        (isLoading.value = false)
      );
    });

    watch(selectedVocation, (newSelect) => {
      getHighscores(newSelect, selectedSkill.value, 50).finally(
        (isLoading.value = false)
      );
    });

    // Sorting
    const sortSkill = () => {
      const skill = data.value["skill"];
      const players = data.value["players"];

      data.value["players"] = players.sort((first, second) => {
        return second[skill] - first[skill];
      });
    };

    const sortName = () => {
      const players = data.value["players"];

      data.value["players"] = players.sort((first, second) => {
        const firstName = first["name"].toUpperCase();
        const secondName = second["name"].toUpperCase();
        if (firstName < secondName) {
          return -1;
        }
        if (firstName > secondName) {
          return 1;
        }

        return 0;
      });
    };

    const sortVocation = () => {
      const players = data.value["players"];

      data.value["players"] = players.sort((first, second) => {
        const firstName = constantsStore
          .getVocationNameById(first["vocation"])
          .toUpperCase();
        const secondName = constantsStore
          .getVocationNameById(second["vocation"])
          .toUpperCase();
        if (firstName < secondName) {
          return -1;
        }
        if (firstName > secondName) {
          return 1;
        }

        return 0;
      });
    };

    return {
      isLoading,
      data,
      getVocationNameById: constantsStore.getVocationNameById,
      sortSkill,
      sortName,
      sortVocation,
      selectedVocation,
      selectedSkill,
    };
  },
};
</script>

<style scoped>
tr th:not(:first-child) {
  cursor: pointer;
}
</style>
