/* function cyberReindeer(road, time) {
  const roadChars = road.split('')
  let before = `${road.charAt(0)}`
  const result = []
  result.push(road)

  for (let i = 1; i < time; i++) {
    const char = roadChars[i]
    if (char === '.') {
      roadChars[i] = 'S'
      const newRoad = roadChars.join('')
      result.push(newRoad)
      if (before !== '') {
        roadChars[i - 1] = before === 'S' ? '.' : '*'
        before = ''
      }
    }
    if (char === '|') {
      if (i < 5) {
        result.push(roadChars.join(''))
      } else {
        before = '|'
        roadChars[i] = 'S'
        const newRoad = roadChars.join('')
        result.push(newRoad)
      }
    }
  }
  return result
} */
function cyberReindeer(road, time) {
  let roadChars = road.split('')
  const result = []
  result.push(road)
  let stop = false

  for (let i = 1; i < time; i = stop ? i : i++) {
    const currentChar = roadChars[i]
    if (i < 5 && currentChar === '|') {
      stop = true
      result.push(roadChars.join(''))
      time -= 1
    }
    if (i === 5) {
      stop = false
      roadChars = roadChars.join('').replaceAll('|', '*').split('')
      result.push(roadChars.join(''))
    }
    if (currentChar !== '|') {
      roadChars[i] = 'S'
      roadChars[i - 1] = '.'
      result.push(roadChars.join(''))
    }
  }

  return result
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const res = cyberReindeer(road, time)

console.log(res)

module.exports = cyberReindeer

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
