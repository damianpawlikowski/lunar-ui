<template>
  <div class="content-card">
    <AccountInformation />
    <AccountPlayerList />
  </div>
</template>

<script>
import AccountInformation from "@/components/AccountInformation.vue";
import AccountPlayerList from "@/components/AccountPlayerList.vue";

export default {
  components: {
    AccountInformation,
    AccountPlayerList,
  },
};
</script>
