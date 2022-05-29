import axios from "axios";
import { defineStore } from "pinia";

// This store contains constant data shared between frontend, backend and also
// The Forgotten MMORPG Server. Mainly to reduce count of API requests

export const useConstantsStore = defineStore("constants", {
  state: () => ({
    gameVocations: [],
    gameSex: [],
    ticketStatuses: [],
    ticketTypes: [],
  }),

  getters: {
    getVocationNameById: (state) => {
      return (vocationId) => state.gameVocations[vocationId].name;
    },
    getTicketStatusById: (state) => {
      return (ticketStatusId) => state.ticketStatuses[ticketStatusId];
    },
    getTicketTypeById: (state) => {
      return (ticketTypeId) => state.ticketTypes[ticketTypeId];
    },
  },

  actions: {
    async getGameConstants() {
      const response = (await axios.get("api/game/constants")).data;
      if (response) {
        this.gameVocations = response["data"]["vocations"];
        this.gameSex = response["data"]["sex"];
      }
    },
    async getTicketConstants() {
      const response = (await axios.get("api/ticket/constants")).data;
      if (response) {
        this.ticketStatuses = response["data"]["statuses"];
        this.ticketTypes = response["data"]["types"];
      }
    },
  },
});
