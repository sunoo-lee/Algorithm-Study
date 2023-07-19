/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let arr = [0];
  let index = 0;

  for(let i = 0; i<nums.length; ++i) {
    if(nums[i] === 1) {
      arr[index] = arr[index] + 1;
    } else {
      arr.push(0);
      index++;
    }
  }

  if(arr.length === 1) return arr[0] - 1;

  let max = 0;

  for(let i = 1; i<arr.length; ++i) {
    max = Math.max(max, arr[i] + arr[i - 1]);
  }

  return max;
};
