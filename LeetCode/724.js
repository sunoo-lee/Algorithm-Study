/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let targetIndex = -1;
    let leftSum = 0;
    let rightSum = 0;

    nums.forEach(item => leftSum = leftSum + item);
 
    for ( let i=0; i<nums.length; ++i) {
        let current = nums[i];

        leftSum = leftSum - current;

        if ( leftSum === rightSum ) {
            targetIndex = i;
            break;
        }
        rightSum = rightSum + current;
    }
    return targetIndex;
};
 
