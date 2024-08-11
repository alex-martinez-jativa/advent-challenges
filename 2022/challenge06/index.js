function createCube(size) {
  let cube = ''
  const topPattern = '/\\'
  const sideTopPattern = '_\\'
  const bottomPattern = '\\/'
  const sideBottomPattern = '_/'

  for (let i = 0; i < size; i++) {
    const topCube = `${' '.repeat(i)}${topPattern.repeat(size - i)}${sideTopPattern.repeat(size)}\n`
    const bottomCube = `${' '.repeat(i)}${bottomPattern.repeat(size - i)}${sideBottomPattern.repeat(size)}\n`
    cube = `${topCube}${cube}${bottomCube}`
  }
  return cube.trimEnd()
}

const res = createCube(3)
console.log(res)
