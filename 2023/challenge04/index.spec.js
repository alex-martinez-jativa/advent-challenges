/* global describe, test, expect */
const decode = require('./index')

describe('decide method', () => {
  test('should return hola mundo', () => {
    const message = 'hola (odnum)'
    const result = decode(message)
    expect(result).toBe('hola mundo')
  })

  test('should return santaclaus', () => {
    const message = 'sa(u(cla)atn)s'
    const result = decode(message)
    expect(result).toBe('santaclaus')
  })
})
