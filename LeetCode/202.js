/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let result = 0;

    while(n) {
        if(n === 1) return true;
        if(n !== 0 && n !== 7 && n < 10) {
            return false;
        } else {
            result = 0;
            let nums = n.toString();
            for (const num of nums) {
                result = result + Math.pow(Number(num), 2);
            }
            n = result;
        }
    }
};
