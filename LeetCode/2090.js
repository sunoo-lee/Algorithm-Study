/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
  if(k === 0) return nums;

  let array = new Array(nums.length).fill(-1);

  if (nums.length - k <= 1) return array;

  let tmp = nums.slice(0, 2 * k + 1).reduce((acc, cur) => acc + cur, 0);

  array[k] = tmp / (k * 2 + 1);

  for(let i = k; i< nums.length - k; ++i) {
    array[i] = Math.floor(tmp / (k * 2 + 1));
    tmp = tmp - nums[i - k] + nums[i + k + 1];
  }
  
  return array;
};
