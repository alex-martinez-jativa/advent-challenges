// TODO, ENTENDER COMO RESOLVER EL PROBLEMA

function getMaxGifts(giftsCities, maxGifts, maxCities) {

    let combinaciones = [];
    combinaciones.push([], [giftsCities[0]]);
    giftsCities.shift()
  
    giftsCities.map(x => {
      const newList = combinaciones.map(combinacion => {
        let _combinacion = [...combinacion]
        if(_combinacion.length < maxCities) {
          _combinacion.push(x)
        }
        return _combinacion
      })
      combinaciones = combinaciones.concat(newList)
    })
  
    combinaciones.shift()
  
    return Math.max(
      ...combinaciones.map(x => {
        let sum = x.reduce((total, num) => total + num)
        return sum > maxGifts ? 0 : sum
      })
    )
  
  }
  
  function getMaxGiftsOPTIMIZED (giftsCities, maxGifts, maxCities) { 
    return Math.max(
      ...giftsCities
        .sort((x, y) => y - x)
        .reduce(
          (result, _, i) => (
            i && giftsCities.unshift(giftsCities.pop()),
            (i = giftsCities
              .slice(0, maxCities)
              .reduce((acc, curr) => (acc += curr), 0)),
            i <= maxGifts && result.push(i),
            i - giftsCities[maxCities - 1] <= maxGifts &&
            result.push(i - giftsCities[maxCities - 1]),
            result
          ),
          []
        ),
      0
    );
  }

  // Otra solución
  
  const getMaxGifts = (giftsCities, maxGifts, maxCities) => {
    const combinations = giftsCities.reduce(
      (acc, cityGifts) => acc.concat(acc.map(existingCombination => [cityGifts].concat(existingCombination))),
      [[]]
    );
  
    const validCombinations = combinations.filter(combination => combination.length <= maxCities);
  
    const sums = validCombinations.map(combination => combination.reduce((total, current) => total + current, 0));
  
    const validSums = sums.filter(sum => sum <= maxGifts);
  
    return Math.max(...validSums);
  };