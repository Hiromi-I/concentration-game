import { defineStore } from "pinia";

const get0paddingNumber = (num: number): string => {
  return ("00" + String(num)).slice(-3);
};

export const useScores = defineStore("score", {
  state: () => {
    return {
      _trialCount: 0,
      _pairedCount: 0,
    };
  },
  getters: {
    trialCount(state) {
      return get0paddingNumber(state._trialCount);
    },
    pairedCount(state) {
      return get0paddingNumber(state._pairedCount);
    }
  }
});