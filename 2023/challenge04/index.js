/* function decode(message) {
  const open = message.indexOf('(')
  const close = message.indexOf(')')
  const first = message.substring(0, open)
  const inside = message
    .substring(open + 1, close)
    .split('')
    .reverse()
    .join('')
  return `${first}${inside}`
} */
function decode(message) {
  const arrayOfWords = []
  let result = ''

  for (let i = 0; i < message.length; i++) {
    const char = message[i]
    if (char === '(') {
      arrayOfWords.push(result)
      result = ''
    } else if (char === ')') {
      result = arrayOfWords.pop() + result.split('').reverse().join('')
    } else {
      result += char
    }
  }
  return result
}

const a = decode('sa(u(cla)atn)s')
console.log(a)

module.exports = decode
