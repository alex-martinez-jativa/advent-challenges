function maxGifts(houses) {
  if (houses.length === 0) return 0
  if (houses.length === 1) return houses[0]

  let results = new Array(houses.length)
  results[0] = houses[0]
  results[1] = Math.max(houses[0], houses[1])

  for (let i = 2; i < houses.length; i++) {
    results[i] = Math.max(results[i - 1], results[i - 2] + houses[i])
  }
  return results[houses.length - 1]
}

const houses = [2, 4, 2]
const res = maxGifts(houses)

console.log(res) // 4

module.exports = maxGifts
