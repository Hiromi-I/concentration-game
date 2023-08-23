import { defineStore } from "pinia";
import type { Card } from "@/types/card";

const CARD_PAIR_SET = 10;

const getRandomCards = (): Card[] => {
  const cards: Card[] = [];
  for (let i = 0; i < CARD_PAIR_SET; i++) {
    const card: Card = {
      number: i,
      isTurned: false,
      isPaired: false
    };
    // 対になる様、各数字2つずつ用意
    cards.push(card, Object.assign({}, card));
  }

  cards.sort(() => Math.random() - Math.random());
  return cards;
}

export const useCards = defineStore("card", {
  state: () => {
    return {
      cards: getRandomCards(),
    };
  },
  actions: {
    turnCard(index: number) {
      this.cards[index].isTurned = !this.cards[index].isTurned;
    },
  },
});