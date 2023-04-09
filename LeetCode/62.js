/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return factorial(m+n-2) / (factorial(m-1) * factorial(n-1));
};

const factorial = (num) => {
    if(num === 1 || num === 0) return 1;

    return num * factorial(num-1);
}
