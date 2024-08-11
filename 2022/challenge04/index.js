//true
const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]

//false
/* const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
] */ 

function fitsInOneBox(boxes) {

    const sortedBoxes = boxes.sort((a, b) => {
        const propA = a.l + a.w + a.h;
        const propB = b.l + b.w + b.h;
    
        return propA - propB;
    });

    return sortedBoxes.every((item, i) => {
        
        if (i > 0 && !(item.l > sortedBoxes[i-1].l && item.w > sortedBoxes[i-1].w && item.h > sortedBoxes[i-1].h)) {
            return false;
        }
        return true;
    });

}

const res = fitsInOneBox(boxes);

console.log(res)