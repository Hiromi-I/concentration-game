import { defineStore } from 'pinia'
import type { Card } from '@/types/card'
import { useScoreStore } from '@/stores/scores'

const CARD_PAIR_SET = 10

const getRandomCards = (): Card[] => {
  const cards: Card[] = []
  for (let i = 0; i < CARD_PAIR_SET; i++) {
    const card: Card = {
      number: i,
      isTurned: false,
      isPaired: false
    }
    // 対になる様、各数字2つずつ用意
    cards.push(card, Object.assign({}, card))
  }

  cards.sort(() => Math.random() - Math.random())
  return cards
}

export const useCardStore = defineStore('card', {
  state: () => {
    return {
      cards: getRandomCards(),
      selectedIndexes: [] as number[]
    }
  },
  actions: {
    turnCard(index: number) {
      if (this.cards[index].isTurned || this.cards[index].isPaired) return
      if (this.selectedIndexes.length >= 2 || this.selectedIndexes.includes(index)) return

      this.cards[index].isTurned = true
      this.selectedIndexes.push(index)

      if (this.selectedIndexes.length === 2) {
        this.checkPair()
      }
    },
    checkPair() {
      const { getCorrect, getIncorrect } = useScoreStore()
      const firstCard = this.cards[this.selectedIndexes[0]]
      const secondCard = this.cards[this.selectedIndexes[1]]

      // アニメーションの為、時間差をつけている
      setTimeout(() => {
        if (firstCard.number === secondCard.number) {
          firstCard.isPaired = true
          secondCard.isPaired = true
          getCorrect()
        } else {
          firstCard.isTurned = false
          secondCard.isTurned = false
          getIncorrect()
        }
        this.selectedIndexes = []
      }, 1000)
    }
  }
})
