import axios from "@/plugins/axios";
import { ref } from "vue";

const useGetHighscores = () => {
  const data = ref({});
  const isLoading = ref(null);

  const getHighscores = async (vocationId = null, skillId, count) => {
    isLoading.value = true;
    let response;
    if (vocationId !== null) {
      response = (
        await axios.get(
          "api/player/highscores/" + vocationId + "/" + skillId + "/" + count
        )
      ).data;
    } else {
      response = (
        await axios.get("api/player/highscores/" + skillId + "/" + count)
      ).data;
    }

    if (response) {
      data.value = response.data;
    }
  };

  return { getHighscores, isLoading, data };
};

export default useGetHighscores;
