function checkJump(heights) {
  const sameValues = heights.every((curr) => curr === heights[0])
  if (sameValues) return false
  const maxValue = Math.max(...heights)
  if (heights[heights.indexOf(maxValue)] === heights[heights.length - 1]) {
    return false
  }
  if (heights[heights.indexOf(maxValue)] === heights[0]) return false
  const firstSection = heights.slice(0, heights.indexOf(maxValue))
  const secondSection = heights.slice(heights.indexOf(maxValue) + 1, heights.length)

  const checkFirstSection = firstSection.filter((item, i) => {
    return item > firstSection[i + 1] || item > maxValue
  })
  const checkSecondSection = secondSection.filter((item, i) => {
    return item < secondSection[i + 1] || item > maxValue
  })

  if (!checkFirstSection.length && !checkSecondSection.length) {
    return true
  }

  return false
}

//const heights = [1, 3, 8, 5, 2] // true
//const heights = [1, 7, 3, 5] // false
//const heights = [2, 2, 2, 2] // false
const heights = [1, 2, 3] // false
//const heights = [1, 1, 1, 1, 1, 1, 1, 1, 2, 1] //true
const res = checkJump([3, 2, 1])

console.log(res)
