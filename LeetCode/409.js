/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const sCount = {};

    let odd = 0;
    let even = 0;

    for (const char of s) {
        sCount[char] = sCount[char] ? sCount[char] + 1 : 1;
    }

    const sArray = Object.values(sCount);

    const oddArray = sArray.filter((element) => element % 2 === 1).sort( (a, b) => b - a );
    const evenArray = sArray.filter((element) => element % 2 === 0);

    if (oddArray.length) odd = oddArray.reduce((prev, curr) => prev + curr - 1, 0) + 1;
    if (evenArray.length) even = evenArray.reduce((prev, curr) => prev + curr, 0);

    return even + odd;
};
