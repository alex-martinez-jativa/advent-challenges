/* function cyberReindeer(road, time) {
  const result = []
  result[0] = road
  let count = 0
  let previous = ''
  let isOpened = false
  debugger
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

    if (!_road[nextIndex]) {
      result.push(_road)
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
} */

function cyberReindeer(road, time) {
  // Stores the state of the road at each unit of time
  const roadStates = [road];

  // Finds the initial position of the sled
  let sledPosition = road.indexOf("S");

  // Character that will be replaced by the sled when it moves
  let replacedChar = ".";

  // Iterates for each unit of time, minus one, since the initial state is already included
  for (let i = 0; i < time - 1; i++) {
    // Gets the current state of the road
    let currentRoadState = roadStates[i];

    // On the fifth iteration (unit of time 5), all barriers open
    if (i === 4) {
      currentRoadState = currentRoadState.replace(/[|]/g, "*");
    }

    // Checks if the next position of the sled is not a closed barrier
    if (currentRoadState[sledPosition + 1] !== "|") {
      // Prepares the new sled position
      // concatenating it to the element that previously was in that position
      const newSledPosition = `${replacedChar}S`;

      // Updates the character replaced by the sled before being replaced
      replacedChar = currentRoadState[sledPosition + 1];

      // Builds the new state of the road with the sled moved one position
      const firstPart = currentRoadState.substring(0, sledPosition);
      const lastPart = currentRoadState.substring(sledPosition + 2);
      currentRoadState = firstPart + newSledPosition + lastPart;

      // Updates the sled position
      sledPosition += 1;
    }

    // Adds the updated state of the road to the array
    roadStates.push(currentRoadState);
  }

  // Returns the array with the state of the road at each unit of time
  return roadStates;
}

const road = '|S.'
const time = 6 // unidades de tiempo
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
