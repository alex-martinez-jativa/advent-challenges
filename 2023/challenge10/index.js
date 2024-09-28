function createChristmasTree(ornaments, height) {
  let tree = ''
  let ornamentIndex = 0

  for (let i = 0; i < height; i++) {
    let spaces = ' '.repeat(height - i - 1)
    let row = ''

    for (let j = 0; j <= i; j++) {
      row += ornaments[ornamentIndex % ornaments.length] + ' '
      ornamentIndex++
    }

    tree += spaces + row.trimEnd() + '\n'
  }

  tree += ' '.repeat(height - 1) + '|' + '\n'

  return tree
}

const ornaments = ['x', 'o']
const height = 4
const tree = createChristmasTree(ornaments, height)

console.log(tree)
