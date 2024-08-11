function getGiftsToRefill(a1, a2, a3) {
  const countGifts = [...arguments]
    .map((arr) => {
      return Array.from(new Set(arr))
    })
    .flat()
    .reduce((acc, curr) => {
      acc[curr] ? (acc[curr] += 1) : (acc[curr] = 1)
      return acc
    }, [])
  let response = []

  for (let key in countGifts) {
    if (!(countGifts[key] > 1)) {
      response.push(key)
    }
  }
  return response
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

//const res = getGiftsToRefill(a1, a2, a3)
//console.log(res)

// Solución mas corta
// utilizando includes ya que en JS se pueden sumar booleanos
// true es igual a 1 y false es igual a 0
function getGiftsToRefill2(a1, a2, a3) {
  return [...new Set([...a1, ...a2, ...a3])].filter((gift) => {
    return a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1
  })
}

const res = getGiftsToRefill2(a1, a2, a3)
console.log(res)
