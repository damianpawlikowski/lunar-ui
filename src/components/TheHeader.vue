<template>
  <header class="mb-4">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">LUNAR</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Home' }">
                {{ $t("news") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Highscores' }">
                {{ $t("highscores") }}
              </router-link>
            </li>
          </ul>
          <div v-if="!authStore.isAuthenticated">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  {{ $t("login") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#createAccountModal"
                >
                  {{ $t("createAccount") }}
                </a>
              </li>
              <li class="nav-item"><LocaleSelector /></li>
            </ul>
          </div>
          <div v-else>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Account' }">
                  {{ $t("account") }}
                </router-link>
              </li>
              <li>
                <a
                  class="button button-red"
                  role="button"
                  @click="authStore.logout"
                >
                  {{ $t("logout") }}
                </a>
              </li>
              <li class="nav-item"><LocaleSelector /></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import LocaleSelector from "@/components/LocaleSelector.vue";

export default {
  components: {
    LocaleSelector,
  },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
};
</script>

<style></style>
