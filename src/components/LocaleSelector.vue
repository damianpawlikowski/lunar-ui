<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      id="supportDropdown"
      role="button"
      data-bs-toggle="dropdown"
      href="#"
      aria-expanded="false"
    >
      {{ $i18n.locale.toUpperCase() }}
    </a>
    <ul class="dropdown-menu" aria-labelledby="supportDropdown">
      <li v-for="lang in languages" :key="lang">
        <a @click="$i18n.locale = lang" class="dropdown-item" href="#">
          {{ lang.toUpperCase() }}
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const languages = reactive(["en", "pl"]);

    return { languages };
  },
};
</script>
