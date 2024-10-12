/* global describe, test, expect */
const checkIsValidCopy = require('./index')

describe('checkIsValidCopy', () => {
  test('should return true', () => {
    const letterOne = 'Santa Claus is coming'
    const letterTwo = 'sa#ta Cl#us i+ comin#'
    const response = checkIsValidCopy(letterOne, letterTwo)

    expect(response).toBe(true)
  })
  test('should return false', () => {
    const letterOne = 's#nta Cla#s is coming'
    const letterTwo = 'p#nt: cla#s #s c+min#'
    const response = checkIsValidCopy(letterOne, letterTwo)

    expect(response).toBe(false)
  })
  test('should return true', () => {
    const letterOne = 'Santa Claus'
    const letterTwo = 's#+:. c:. s'
    const response = checkIsValidCopy(letterOne, letterTwo)

    expect(response).toBe(true)
  })
  test('should return false', () => {
    const letterOne = 'Santa Claus'
    const letterTwo = 's#+:.#c:. s'
    const response = checkIsValidCopy(letterOne, letterTwo)

    expect(response).toBe(false)
  })
  test('should return false', () => {
    const response = checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')
    expect(response).toBe(false)
  })
  test('should return false', () => {
    const response = checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')
    expect(response).toBe(false)
  })
})
