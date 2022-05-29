import { ref } from "vue";

import axios from "@/plugins/axios";

const useCreateAccount = () => {
  const data = ref({});
  const isLoading = ref(null);

  const createAccount = async (credentials) => {
    const response = (await axios.post("api/account/create", credentials)).data;
    if (response) {
      data.value = response.data;
    }
  };

  return { createAccount, isLoading, data };
};

export default useCreateAccount;
