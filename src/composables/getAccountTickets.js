import axios from "@/plugins/axios";
import { ref } from "vue";

const useGetAccountTickets = () => {
  const data = ref({});
  const isLoading = ref(null);

  const getAccountTickets = async () => {
    isLoading.value = true;
    const response = (await axios.get("api/account/tickets")).data;
    if (response) {
      data.value = response.data;
    }
  };

  return { getAccountTickets, isLoading, data };
};

export default useGetAccountTickets;
