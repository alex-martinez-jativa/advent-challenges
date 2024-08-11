/* global describe, test, expect */
const findFirstRepeated = require('./index')

describe('findFirstRepeated method', () => {
  test('should return the first repeated gift', () => {
    const gifts = ['book', 'toy', 'book', 'pen', 'toy']
    const result = findFirstRepeated(gifts)
    expect(result).toBe('book')
  })

  test('should return -1 if no repeated gifts', () => {
    const gifts = ['book', 'toy', 'pen']
    const result = findFirstRepeated(gifts)
    expect(result).toBe(-1)
  })
})
