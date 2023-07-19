/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if(intervals.length === 0 || intervals.length === 1) return 0;
  intervals = intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let last = intervals[0][0];
  
  for (const array of intervals) {
    if(array[0] >= last) {
      last = array[1];
    } else count++;
  }

  return count;
};

/**
  end 숫자를 기준으로 정렬한다.
  제외해야하는 배열의 최소 개수를 반환해야 하기 때문에 오름차순 정렬을 한다.

  [[1,2],[2,3],[3,4],[1,3]]
  [[1,2],[2,3],[1,3],[3,4]]

  interval이 겹치지 않으려면 이전 배열의 end보다 다음 배열의 start가 크거나 같아야한다.
 */
