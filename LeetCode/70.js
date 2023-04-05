/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const ways = Math.floor(n/2);
    let result = 1;

    for (let i = n - 1; i >= ways; --i) {
        result = result + getCount(i, n);
    }
    
    return result;
};


const getCount = (count, n) => {
    let step = count-1;
    let steps = 1;

    for (let i = 0; i < count; ++i) {
        if(step + (steps * 2) === n) break;
        step--;
        steps++;
    }

    if (step < 0 || steps < 0) return 0;

    return factorial(count) / (factorial(step) * factorial(steps));
}

const factorial = (num) => {
    if(num === 1 || num === 0) return 1;

    return num * factorial(num-1);
}
