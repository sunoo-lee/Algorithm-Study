/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0;
    let cows = 0;
    const sArray = [...secret];
    const gArray = [...guess];

    for (let i = 0; i<sArray.length; ++i) {
        if (sArray[i] === gArray[i]) {
            bulls++;
            sArray[i] = -1;
            gArray[i] = -1;
        } 
    }

    for (let i = 0; i<sArray.length; ++i) {
        let tmp = sArray.indexOf(gArray[i]);
        if (sArray[tmp] === gArray[i] && sArray[tmp] !== -1 ) {
            cows++;
            sArray[tmp] = -1;
        }
    }

    return `${bulls}A${cows}B`;
};
