/* global describe, test, expect */
const adjustLights = require('./index')

describe('adjustLights', () => {

  test("Test #01 - adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])", () => {
    const response = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
  
    expect(response).toBe(1)
  })
  test("Test #02 - adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])", () => {
    const response = adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"])
  
    expect(response).toBe(1)
  })
})
