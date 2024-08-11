// drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

function drawGift(size, symbol) {
  if (size === 1) return '#\n'
  const filas = []
  filas[0] = '#'.repeat(size).padStart(size * 2 - 1) // primera linea
  filas[size * 2 - 2] = '#'.repeat(size) // ultima linea
  filas[size - 1] = `${'#'.repeat(size)}${symbol.repeat(size - 2)}#` // linea del medio

  for(let fila = 1; fila < size - 1; fila++) {
    let draft = `#${symbol.repeat(size-2)}#${symbol.repeat(fila-1)}#`
    filas[fila] = draft.padStart(size * 2 - 1, ' ')
    filas[size * 2 - 2 - fila] = draft
  }

  return filas.join('\n').concat('\n')
}

drawGift(5, '*')