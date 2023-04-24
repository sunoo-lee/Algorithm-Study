/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if(nums.length === 0) return -1;
  if(nums.length === 1) return nums[0] === target ? 0 : -1;
  let start = 0;
  let end = nums.length - 1;
  let mid;
  let minIndex = findMinNumber(nums);

  if(nums[minIndex] === target) return minIndex;

  if (target < nums[start]) start = minIndex;
  else if (minIndex !== 0) end = minIndex;

  while (start <= end) {
    mid = parseInt((start + end) / 2);

    if (target === nums[mid]) return mid;
    else if (target < nums[mid]) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
};

const findMinNumber = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  if (nums[start] < nums[end]) return 0;

  while (start < end) {
    mid = parseInt((start + end) / 2);

    if (nums[mid] > nums[mid + 1]) {
      return mid + 1;
    } else {
      if (nums[start] > nums[mid]) end = mid;
      else start = mid;
    }
  }
};
