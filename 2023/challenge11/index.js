function getIndexsForPalindrome(str) {
  const isPalindrome = (s) => s === s.split('').reverse().join('')

  if (isPalindrome(str)) return []

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      let chars = str.split('')
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
