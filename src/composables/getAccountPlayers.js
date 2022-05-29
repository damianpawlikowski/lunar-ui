import axios from "@/plugins/axios";
import { ref } from "vue";

const useGetAccountPlayers = () => {
  const data = ref({});
  const isLoading = ref(null);

  const getAccountPlayers = async () => {
    isLoading.value = true;
    const response = (await axios.get("api/account/players")).data;
    if (response) {
      data.value = response.data;
    }
  };

  return { getAccountPlayers, isLoading, data };
};

export default useGetAccountPlayers;
