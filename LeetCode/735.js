/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let stack = [];

  for(const num of asteroids) {
    let curr = num;
    // 새로 들어오는 숫자curr가 음수, 마지막 숫자stack.length-1이 양수일 때 충돌이 발생한다.
    while(stack.length && curr < 0 && stack[stack.length-1] > 0) {
      let diff = curr + stack[stack.length-1];
      if(diff < 0) { // 마지막 숫자 제거
        stack.pop();
      } else if(diff > 0) { // 새로 들어오는 숫자 제거
        curr = null;
      } else { // 절댓값이 동일, 둘 다 제거
        curr = null;
        stack.pop();
      }
    }
    if(curr) stack.push(num);
  }

  return stack;
};
