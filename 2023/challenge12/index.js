function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) {
    return false
  }

  const specialChars = {
    '#': 1,
    '+': 2,
    ':': 3,
    '.': 4,
    ' ': 5,
  }

  const _originalArr = original.split('')
  const _copyArr = copy.split('')

  for (let i = 0; i < _originalArr.length; i++) {
    const originalChar = _originalArr[i]
    const copyChar = _copyArr[i]

    if (specialChars[originalChar] && specialChars[copyChar]) {
      if (specialChars[originalChar] > specialChars[copyChar]) {
        return false
      }
    }
    if (!specialChars[originalChar] && !specialChars[copyChar]) {
      if (originalChar !== copyChar) {
        if (copyChar.toLowerCase() === originalChar) {
          return false
        }
        if (copyChar.toLowerCase() !== originalChar.toLowerCase()) {
          return false
        }
      }
    }
  }

  return true
}

// true
//const letterOne = 'Santa Claus is coming'
//const letterTwo = 'sa#ta Cl#us i+ comin#'

// false
//const letterOne = 's#nta Cla#s is coming'
//const letterTwo = 'p#nt: cla#s #s c+min#'

// true
//const letterOne = 'Santa Claus'
//const letterTwo = 's#+:. c:. s'

// false
//const letterOne = 'Santa Claus'
//const letterTwo = 's#+:.#c:. s'

// false
//const letterOne = 'S#nta Claus'
//const letterTwo = 'S#ntA ClauS'

// false
const letterOne = 'Santa Claus is coming'
const letterTwo = 'p#nt: cla#s #s c+min#'

const res = checkIsValidCopy(letterOne, letterTwo)
console.log(res)

module.exports = checkIsValidCopy
