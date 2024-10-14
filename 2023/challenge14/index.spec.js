/* global describe, test, expect */

const maxGifts = require('./index')

describe('Test maxGifts', () => {
  test('should return type number', () => {
    const res = maxGifts([1])
    expect(typeof res).toBe('number')
  })
  test('should return 4', () => {
    const res = maxGifts([1, 2, 3, 1])
    expect(res).toBe(4)
  })
  test('should return 12', () => {
    const res = maxGifts([2, 7, 9, 3, 1])
    expect(res).toBe(12)
  })
})
