function cyberReindeer(road, time) {
  const result = []
  result[0] = road
  let count = 0
  let previous = ''
  let isOpened = false
  for (let i = 1; i < time; i++) {
    let _road = result[result.length - 1]
    const santaIndex = _road.indexOf('S')
    const nextIndex = santaIndex + 1
    count++

    if (count === 5 && !isOpened) {
      let updatedRoad = _road.replaceAll('|', '*')
      updatedRoad = updatedRoad.substring(0, nextIndex) + 'S' + updatedRoad.substring(nextIndex + 1)
      updatedRoad = updatedRoad.substring(0, santaIndex) + '.' + updatedRoad.substring(santaIndex + 1)
      previous = '*'
      isOpened = true
      if (updatedRoad.length <= road.length) {
        result.push(updatedRoad)
      } else {
        previous = ''
      }
    }

    if (_road[nextIndex] === '|' && count < 5) {
      result.push(_road)
    }

    if (_road[nextIndex] === '.') {
      let updatedRoad = _road.substring(0, nextIndex) + 'S' + _road.substring(nextIndex + 1)
      if (previous === '*') {
        updatedRoad = updatedRoad.substring(0, santaIndex) + '*' + updatedRoad.substring(santaIndex + 1)
      }
      if (previous === '') {
        updatedRoad = updatedRoad.substring(0, santaIndex) + '.' + updatedRoad.substring(santaIndex + 1)
      }
      previous = ''
      result.push(updatedRoad)
    }

    if (_road[nextIndex] === '*') {
      let updatedRoad = _road.substring(0, nextIndex) + 'S' + _road.substring(nextIndex + 1)
      updatedRoad = updatedRoad.substring(0, santaIndex) + '.' + updatedRoad.substring(santaIndex + 1)
      previous = '*'
      result.push(updatedRoad)
    }
  }

  return result
}

const road = '|..|.S........'
const time = 10 // unidades de tiempo
const res = cyberReindeer(road, time)

console.log(res)
module.exports = cyberReindeer

/* -> result:
Problema:
[
    "|..|.S........",
    "|..|..S.......",
    "|..|...S......",
    "|..|....S.....",
    "|..|.....S....",
    "*..*......S...",
    "|..|.....*S...",
    "|..|.....*.S..",
    "|..|.....*..S.",
    "|..|.....*...S"
]
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
