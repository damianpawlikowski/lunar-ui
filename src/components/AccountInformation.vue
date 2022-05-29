<template>
  <section>
    <h3 class="title">{{ $t("accountInformation") }}</h3>
    <div class="row">
      <div class="col-12 col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">E-mail</div>
          <div class="card-body">
            <p class="card-text">{{ authStore.account.email }}</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">Status</div>
          <div class="card-body">
            <p class="card-text">
              {{ $t(accountStatus) }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">{{ $t("premiumCoins") }}</div>
          <div class="card-body">
            <p class="card-text">0</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 mb-4">
        <div class="button-group">
          <button class="button button-default no-right-radius" type="button">
            {{ $t("changePassword") }}
          </button>
          <router-link
            class="button button-default no-right-radius no-left-radius"
            role="button"
            :to="{ name: 'Tickets' }"
          >
            {{ $t("tickets") }}
          </router-link>
          <button
            class="button button-red no-left-radius"
            type="button"
            @click="authStore.logout"
          >
            {{ $t("logout") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";

import { useAuthStore } from "@/stores/authStore";

export default {
  setup() {
    const authStore = useAuthStore();

    authStore.getAccount();

    const accountStatus = computed(() => {
      return authStore.account.premium_ends_at > 0 ? "premium" : "free";
    });

    return { authStore, accountStatus };
  },
};
</script>

<style>
.no-left-radius {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.no-right-radius {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
</style>
