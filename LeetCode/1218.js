/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  const dp = new Map();
  let max = 0;
  let prev = 0;

  for( let i = 0; i < arr.length; ++i ) {
    // arr[i] - diff 값을 구한다.
    prev = arr[i] - difference;


    // map에 prev가 존재하는 경우 기존 값에 1을 더한다.
    // map에 존재하지 않는 경우 새로 등록한다.
      if(dp.has(prev)) {
      dp.set(arr[i], dp.get(prev) + 1);
    } else {
      dp.set(arr[i], 1);
    }
    // console.log(arr[i], prev, dp);
    max = Math.max(max, dp.get(arr[i]));
  }
  return max;
};
