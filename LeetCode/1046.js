/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let stonesArray = stones;
    let indexX = 0;
    let indexY = 0;

    while(stonesArray.length) {
        if(stonesArray.length < 2) break;
        stonesArray.sort((a, b) => a - b);
        indexX = stonesArray.pop();
        indexY = stonesArray.pop();
        stonesArray.push(indexX-indexY);
    }
    return stonesArray[0];
};
