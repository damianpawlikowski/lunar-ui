import { ref } from "vue";

import axios from "@/plugins/axios";

const useCreateTicket = () => {
  const data = ref({});
  const isLoading = ref(null);

  const createTicket = async (ticketInfo) => {
    const response = (await axios.post("api/ticket/create", ticketInfo)).data;
    if (response) {
      data.value = response.data;
    }
  };

  return { createTicket, isLoading, data };
};

export default useCreateTicket;
