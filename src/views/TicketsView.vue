<template>
  <section class="content-card">
    <h3 class="title">{{ $t("tickets") }}</h3>
    <table v-if="!isLoading" class="table table-hover table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>{{ $t("title") }}</th>
          <th>{{ $t("type") }}</th>
          <th>{{ $t("date") }}</th>
          <th>{{ $t("status") }}</th>
        </tr>
      </thead>
      <tbody>
        <template
          v-for="(ticket, index) in data['tickets']"
          :key="ticket['id']"
        >
          <tr>
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ ticket["title"] }}</td>
            <td>{{ getTicketTypeById(ticket["type"]) }}</td>
            <td>{{ ticket["created_at"] }}</td>
            <td>{{ getTicketStatusById(ticket["status"]) }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <button
      class="button button-default"
      role="button"
      data-bs-toggle="modal"
      data-bs-target="#createTicketModal"
    >
      {{ $t("createTicket") }}
    </button>
    <CreateTicketModal @onNewTicket="onNewTicket" />
  </section>
</template>

<script>
import useGetAccountTickets from "@/composables/getAccountTickets";
import { useConstantsStore } from "@/stores/constantsStore";
import CreateTicketModal from "@/components/CreateTicketModal.vue";

export default {
  components: {
    CreateTicketModal,
  },
  setup() {
    const { getAccountTickets, isLoading, data } = useGetAccountTickets();
    const constantsStore = useConstantsStore();

    getAccountTickets().finally((isLoading.value = false));

    const onNewTicket = () => {
      getAccountTickets().finally((isLoading.value = false));
    };

    return {
      isLoading,
      data,
      getTicketTypeById: constantsStore.getTicketTypeById,
      getTicketStatusById: constantsStore.getTicketStatusById,
      onNewTicket,
    };
  },
};
</script>

<style></style>
