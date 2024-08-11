/* global describe, test, expect */
const findNaughtyStep = require('./index')

describe('findNaughtyStep method', () => {
  test('should return "e"', () => {
    const original = 'abcd'
    const modified = 'abcde'
    const result = findNaughtyStep(original, modified)
    expect(result).toBe('e')
  })

  test('should return "f"', () => {
    const original = 'stepfor'
    const modified = 'stepor'
    const result = findNaughtyStep(original, modified)
    expect(result).toBe('f')
  })

  test('should return ""', () => {
    const original = 'abcd'
    const modified = 'abcd'
    const result = findNaughtyStep(original, modified)
    expect(result).toBe('')
  })

  test('should return "d"', () => {
    const original = 'abcd'
    const modified = 'abc'
    const result = findNaughtyStep(original, modified)
    expect(result).toBe('d')
  })

  test('should return "a"', () => {
    const original = ''
    const modified = 'a'
    const result = findNaughtyStep(original, modified)
    expect(result).toBe('a')
  })
})
