function organizeGifts(gifts) {
  const giftQuantities = []
  let draftRes = []
  let current = ''
  let typesOfGifts = []
  
  for (let i = 0; i < gifts.length; i++) {
    const char = gifts[i]
      if (!isNaN(char)) {
        current += char
      } else {
        if (current) {
          giftQuantities.push({[char]: current})
              current = ''
          }
      }
  }

  for (let j = 0; j < giftQuantities.length; j++) {
    const giftElement = giftQuantities[j]
    const giftType = Object.keys(giftElement)[0]
    !typesOfGifts.includes(giftType) && typesOfGifts.push(giftType)
    const giftValue = parseInt(Object.values(giftElement)[0])
    const giftValueCalc = giftValue / 10
    
	const giftValInt = Math.floor(giftValueCalc)
    const giftValFloat = Math.round((giftValueCalc - giftValInt) * 10)
    
    draftRes.push({
  		[giftType]: [
    		{ type: 'box', value: giftValInt },
    	{ type: 'bag', value: giftValFloat }
  		]
	});
  }
  
  let result = '';
  
  for (let i = 0; i < typesOfGifts.length; i++) {
  	const types = draftRes[i][typesOfGifts[i]]
    for (let j = 0; j < types.length; j++) {
    	if (types[j].type === 'box') {
        	const val = types[j].value
            if (val >= 5) {
            	let countVal = val;
              	let count = 0
              	while(countVal >= 5) {
                	countVal = countVal - 5
                  	count++
                }
              	result += `[${typesOfGifts[i]}]`.repeat(count)
              	result += `{${typesOfGifts[i]}}`.repeat(countVal)
            }
            if (val < 5) {
            	result += `{${typesOfGifts[i]}}`.repeat(val)
            } 
        }
      	if (types[j].type === 'bag') {
        	const val = types[j].value
          if (val > 0) {
            result += `(${typesOfGifts[i].repeat(val)})`
          }
        }
    }
  }
   return result;
 
}

const result1 = organizeGifts(`19d51e`)
console.log(result1)
