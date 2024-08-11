function manufacture(gifts, materials) {
  const giftsCopy = [...gifts]
  for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i]
    for (let j = 0; j < gift.length; j++) {
      const char = gift[j]
      if (!materials.includes(char)) {
        const index = giftsCopy.indexOf(gift)
        if (index !== -1) {
          giftsCopy.splice(index, 1)
        }
      }
    }
  }
  return giftsCopy
}

module.exports = manufacture
