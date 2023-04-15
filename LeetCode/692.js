/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const newMap = new Map();

    let index = 0;

    while(index < words.length) {
        if(newMap.has(words[index])) {
            let val = newMap.get(words[index]);
            newMap.set(words[index], val + 1);
        } else {
            newMap.set(words[index], 1);
        }
        index++;
    }

    let newArray = [...newMap];
    newArray = newArray.sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1] - a[1]).slice(0, k);

    for(let i=0; i<newArray.length; ++i) {
        newArray[i] = newArray[i][0];
    }

    return newArray;
};
