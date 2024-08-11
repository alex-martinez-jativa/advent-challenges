function findNaughtyStep(original, modified) {
  const [short, large] = [original, modified].sort((a, b) => a.length - b.length)
  return [...large].find((x, i) => short[i] != x) ?? ''
}

const original = 'stepfor'
const modified = 'stepor'
const res = findNaughtyStep(original, modified) // 'f'
console.log(res)

module.exports = findNaughtyStep
