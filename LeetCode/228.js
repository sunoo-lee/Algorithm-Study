/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let result = [];
  let queue = [];

  const converString = (array) => {
    if (array.length === 0) return;
    let min = Math.min(...array);
    let max = Math.max(...array);
    if (min === max) {
      result.push(min + "");
    } else {
      let combine = min + "->" + max;
      result.push(combine);
    }
    queue = [];
  };

  for (let i = 1; i <= nums.length; ++i) {
    if (nums[i] - nums[i - 1] === 1) {
      queue.push(nums[i - 1]);
    } else {
      queue.push(nums[i - 1]);
      converString(queue);
    }
  }

  if (queue.length !== 0) {
    converString(queue);
  }

  return result;
};
