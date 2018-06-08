import { plus } from '../libs'

describe('libs', () => {
  describe('plus', () => {
    it('Calculate a + b', () => {
      expect(plus(3, 5)).toBe(8)
    })
  })
})
