/* global describe, test, expect */
const getIndexsForPalindrome = require('./index')

describe('getIndexsForPalindrome', () => {
  test('should return []', () => {
    const res = getIndexsForPalindrome('anna')
    expect(res).toStrictEqual([])
  })
  test('should return [0,1]', () => {
    const res = getIndexsForPalindrome('abab')
    expect(res).toStrictEqual([0, 1])
  })
  test('should return null', () => {
    const res = getIndexsForPalindrome('abac')
    expect(res).toBe(null)
  })
})
