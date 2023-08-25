import { describe, test, expect } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { render } from '@testing-library/vue'
import GameClear from '@/components/GameClear.vue'

describe('CardList', () => {
  test("invisible when game is not cleared", () => {
    const initialState = {
      score: {
        _trialCount: 20,
        _pairedCount: 8,
      }
    }
    createTestingPinia({ initialState })

    const { queryByRole } = render(GameClear)
    const title = queryByRole('heading', { level: 3 })

    expect(title).not.toBeInTheDocument()
  })

  test("visible when game is cleared", () => {
    const initialState = {
      score: {
        _trialCount: 15,
        _pairedCount: 10,
      }
    }
    createTestingPinia({ initialState })

    const { queryByRole } = render(GameClear)
    const title = queryByRole('heading', { level: 3 })

    expect(title).toBeInTheDocument()
  })
})