const gifts = ['cat', 'game', 'socks']

function getPapper(gift) {
  return '*'.repeat(gift.length + 2)
}

function wrapping(gifts) {
  return gifts.map((gift) => {
    const papper = getPapper(gift)
    return `${papper}\n*${gift}*\n${papper}`
  })
}

const wrapped = wrapping(gifts)

console.log(wrapped)
