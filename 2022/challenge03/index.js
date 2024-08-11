const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

function distributeGifts(packOfGifts, reindeers) {
    const giftsWeight = packOfGifts.reduce((acc, curr)   => {
        return acc += curr.length;
    }, 0);

    const reindeersWeight = reindeers.reduce((acc,curr) => {
        return acc += 2*curr.length;
    }, 0);

    return Math.trunc(reindeersWeight / giftsWeight);
}

const response = distributeGifts(packOfGifts, reindeers);

console.log(response);