function checkPart(part) {
  const words = part.split('').map((_, i) => {
    return part.slice(0, i) + part.slice(i + 1)
  })
  const reverseWords = words.map((item) => {
    return item.split('').reverse().join('')
  })

  const palindromes = words.filter((item) => {
    return reverseWords.includes(item)
  })

  return palindromes.length ? true : false
}

const res = checkPart('midu')

console.log(res)
