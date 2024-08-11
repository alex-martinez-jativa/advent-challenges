function maxDistance(movements) {
  
  let countLeft = 0
  let countRight = 0

  for (let movement of movements) {
    const rightMovement = +(movement === '>')
    const leftMovement = +(movement === '<')
    const extraMovement = +(movement === '*')

    countRight += rightMovement - leftMovement + extraMovement
    countLeft += leftMovement - rightMovement + extraMovement
  }

  return Math.max(countLeft, countRight)
}

module.exports = maxDistance

const movements = '***><<'
const res = maxDistance(movements)

console.log(res)
