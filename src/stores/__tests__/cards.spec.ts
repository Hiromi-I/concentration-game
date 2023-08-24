import { describe, test, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCardStore } from '@/stores/cards'
import type { Card } from '@/types/card'

const findTargetIndexes = (targetNumber: number, cards: Card[]): number[] => {
  const result = []
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].number === targetNumber) {
      result.push(i)
    }
  }
  return result
}

describe('Card Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('initial state', () => {
    const cardStore = useCardStore()

    expect(cardStore.cards).toHaveLength(20)
    expect(cardStore.selectedIndexes).toHaveLength(0)
  })

  test('turn a card', () => {
    const cardStore = useCardStore()
    const targetNumber = 3
    const targetIndex = cardStore.cards.findIndex(({ number }) => number === targetNumber)

    cardStore.turnCard(targetIndex)

    expect(cardStore.cards[targetIndex].isTurned).toBeTruthy()
  })

  test('can not turn 3 cards', () => {
    const cardStore = useCardStore()

    cardStore.turnCard(0)
    cardStore.turnCard(3)
    cardStore.turnCard(6)

    expect(cardStore.selectedIndexes).toHaveLength(2)
    expect(cardStore.selectedIndexes).not.toContain(6)
  })

  test('turn pair cards', async () => {
    const cardStore = useCardStore()
    const targetNumber = 3
    const targetIndexes = findTargetIndexes(targetNumber, cardStore.cards)

    cardStore.turnCard(targetIndexes[0])
    cardStore.turnCard(targetIndexes[1])
    await new Promise((resolve) => setTimeout(resolve, 1200))

    expect(cardStore.cards[targetIndexes[0]].isTurned).toBeTruthy()
    expect(cardStore.cards[targetIndexes[1]].isTurned).toBeTruthy()
    expect(cardStore.cards[targetIndexes[0]].isPaired).toBeTruthy()
    expect(cardStore.cards[targetIndexes[1]].isPaired).toBeTruthy()
  })
})
