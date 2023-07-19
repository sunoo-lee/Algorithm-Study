/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let max = 0;
  let sum = 0;
  for(const num of gain) {
    sum += num;
    max = Math.max(max, sum);
  }

  return max;
};
