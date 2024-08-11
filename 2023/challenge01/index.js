function findFirstRepeated(gifts) {
  let prevGift = []
  for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i]

    if (prevGift.includes(gift)) return gift

    prevGift.push(gift)
  }

  return -1
}

module.exports = findFirstRepeated
