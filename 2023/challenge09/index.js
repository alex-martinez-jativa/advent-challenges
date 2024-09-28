function adjustLights(lights) {
  const evenValue = lights[lights.length - 1]
  const oddValue = lights.find((el) => el !== evenValue)
  let count = 0

  for (let i = 0; i < lights.length; i++) {
    if (i === 0) {
      if (lights[i] !== evenValue) {
        count++
      }
    } else if (i % 2 === 0) {
      if (lights[i] !== evenValue) {
        count++
      }
    } else {
      if (lights[i] !== oddValue) {
        count++
      }
    }
  }
  return count
}

const res = adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])

console.log(res)

module.exports = adjustLights
