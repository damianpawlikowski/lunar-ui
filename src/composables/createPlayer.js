import { ref } from "vue";

import axios from "@/plugins/axios";

const useCreatePlayer = () => {
  const data = ref({});
  const isLoading = ref(null);

  const createPlayer = async (playerInfo) => {
    isLoading.value = true;
    const response = (await axios.post("api/player/create", playerInfo)).data;
    if (response) {
      data.value = response.data;
    }
  };

  return { createPlayer, isLoading, data };
};

export default useCreatePlayer;
