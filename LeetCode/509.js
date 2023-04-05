/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0) return 0;
    let result = 1;
    let a = 0;
    let b = 1;

    for(let i=1; i<n; ++i) {
        result = a + b;
        a = b;
        b = result;
    }

    return result;
};
