/* global describe, test, expect */
const manufacture = require('./index')

describe('manufacture method', () => {
  test('should return an array ["tren", "oso]', () => {
    const gifts = ['tren', 'oso', 'pelota']
    const materials = 'tronesa'
    const result = manufacture(gifts, materials)
    expect(result).toEqual(['tren', 'oso'])
  })

  test('should return an array ["puzzle"]', () => {
    const gifts = ['juego', 'puzzle']
    const materials = 'jlepuz'
    const result = manufacture(gifts, materials)
    expect(result).toEqual(['puzzle'])
  })

  test('should return an empty array', () => {
    const gifts = ['libro', 'ps5']
    const materials = 'psli'
    const result = manufacture(gifts, materials)
    expect(result).toEqual([])
  })
})
