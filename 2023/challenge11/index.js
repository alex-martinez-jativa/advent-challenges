function getIndexsForPalindrome(word) {
  const isPalindrome = (s) => s === s.split('').reverse().join('')

  if (isPalindrome(word)) return []

  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      let chars = word.split('')
      ;[chars[i], chars[j]] = [chars[j], chars[i]]
      let newStr = chars.join('')

      if (isPalindrome(newStr)) {
        return [i, j]
      }
    }
  }

  return null
}

const word = 'abab'
const res = getIndexsForPalindrome(word)
console.log(res)

module.exports = getIndexsForPalindrome
