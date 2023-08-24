import { describe, it, expect, beforeEach } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { render } from '@testing-library/vue'

import ScoreDisplay from '@/components/ScoreDisplay.vue'

describe('ScoreDisplay', () => {
  beforeEach(() => {
    const initialState = {
      score: {
        _trialCount: 3,
        _pairedCount: 2
      }
    }
    createTestingPinia({ initialState })
  })

  it('renders 2 score', () => {
    const { getByText } = render(ScoreDisplay)
    const pElement = getByText(/^TRY:/)

    expect(pElement.textContent).toMatch(/TRY: 003/)
    expect(pElement.textContent).toMatch(/SCORE: 002/)
  })
})
