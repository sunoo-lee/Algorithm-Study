/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    const sumNums = nums.map( (item) => { 
        let a = item + sum;
        sum = a;
        return a;
        } )
    
    return sumNums;
};
 
