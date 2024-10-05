function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) {
    return false
  }
  const specialChars = ['#', '+', ':', '.', ' ']
  const _originalLower = original.toLowerCase()
  const _copyLower = copy.toLowerCase()
  const copyArr = _copyLower.split('')

  for (let i = 0; i < _originalLower.length; i++) {
    if (specialChars.includes(_copyLower[i]) && _originalLower[i] !== _copyLower[i]) {
      copyArr[i] = _originalLower[i]
    }
  }

  if (copyArr.join('') === _originalLower) {
    return true
  }

  return false
}

const letterOne = 'Santa Claus'
const letterTwo = 's#+:.#c:. s'

const res = checkIsValidCopy(letterOne, letterTwo)
console.log(res)

module.exports = checkIsValidCopy
