function countTime(leds) {
  let times = 0
  while (leds.includes(0)) {
    for (let i = 0; i < leds.length; i++) {
      if (i === 0 && leds[i] === 0 && (leds[i - 1] || leds[leds.length - 1]) === 1) {
        leds[i] = 1
        times++
      }
      if (leds[i] === 0 && (leds[i - 1] || leds[leds.length - 1]) === 1) {
        leds[i] = 1
      }

      if (i === leds.length - 1) {
        times++
      }
    }
    console.log(leds)
  }

  return times * 7
}

//const leds = [0, 1, 1, 0, 1]
const leds = [0, 0, 0, 1]
const res = countTime(leds)
console.log(res)
