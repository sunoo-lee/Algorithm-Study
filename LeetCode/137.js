/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = new Map();

  for( const num of nums) {
    map.has(num) ? map.set(num, map.get(num)+1) : map.set(num, 1);
  }

  for (const [key, value] of map) {
    if( value === 1) return key;
  }
};
