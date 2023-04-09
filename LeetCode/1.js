/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = [];
    const numsArray = nums;
    let number = 0;
    let pointer = 0;

    for (let i=0; i<nums.length; ++i) {
        number = target - numsArray[i];
        nums[i] = '';
        pointer = numsArray.indexOf(number);
        if(pointer !== -1) {
            console.log(pointer, nums[i], number);
            result.push(i);
            result.push(pointer);
            break;
        }
    }

    return result;
};
