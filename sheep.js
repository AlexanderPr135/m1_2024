const sheep = [0,1,1,0]
const spot = []
for (x=0;x<4;x++) {
    if (sheep[x] === 0){
        spot.push(sheep[x])
    }
    
}
console.log(`В массиве ${sheep} находится ${spot.length} белые овцы`)