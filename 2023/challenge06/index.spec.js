/* global describe, test, expect */
const maxDistance = require('./index')

describe('maxDistance method', () => {
  test('should return 2', () => {
    const movements = '>>*<'
    const res = maxDistance(movements)
    expect(res).toEqual(2)
  })

  test('should return 2', () => {
    const movements = '<<<>'
    const res = maxDistance(movements)
    expect(res).toEqual(2)
  })

  test('should return 5', () => {
    const movements = '>***>'
    const res = maxDistance(movements)
    expect(res).toEqual(5)
  })

  test('should return 2', () => {
    const movements = '<<**>>'
    const res = maxDistance(movements)
    expect(res).toEqual(2)
  })
})