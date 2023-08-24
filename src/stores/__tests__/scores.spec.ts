import { describe, test, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useScoreStore } from '@/stores/scores'

describe('Score Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test("initial state and display", () => {
    const scoreStore = useScoreStore()

    expect(scoreStore._trialCount).toBe(0)
    expect(scoreStore._pairedCount).toBe(0)
    expect(scoreStore.trialCount).toMatch("000")
    expect(scoreStore.pairedCount).toMatch("000")
  })

  test("incorrect", () => {
    const scoreStore = useScoreStore()

    scoreStore.getIncorrect()

    expect(scoreStore._trialCount).toBe(1)
    expect(scoreStore._pairedCount).toBe(0)
    expect(scoreStore.trialCount).toMatch("001")
    expect(scoreStore.pairedCount).toMatch("000")
  })

  test("correct", () => {
    const scoreStore = useScoreStore()

    scoreStore.getCorrect()

    expect(scoreStore._trialCount).toBe(1)
    expect(scoreStore._pairedCount).toBe(1)
    expect(scoreStore.trialCount).toMatch("001")
    expect(scoreStore.pairedCount).toMatch("001")
  })
})