/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  /**
  sliding window, two pointer
  T인 경우와 F인 경우를 나눠서 생각

  F의 경우 left ~ right 사이의 글자가 T인 경우 count 증가
  k=1
    T  F
    L  R
    count = 1

    T  F  F
    L     R
    count = 1

    T  F  F  T
    L        R
    count = 2
    count > k

  count가 k보다 커지는 경우 최대길이를 answer에 저장하고 left pointer 이동
  Math.max ( 저장된 최대값, 현재 길이 )
  최대값 계산 후 right pointer 이동
  
  */
  let [left, right] = [0, 0];
  let answer = 0;
  let count = 0;

  while (right < answerKey.length) {
    if(answerKey[right] === 'T') {
      count++;
    }

    while (count > k) {
      if(answerKey[left] === 'T') {
        count--;
      }
      left++;
    }
    answer = Math.max(answer, right - left + 1);
    right++;
  }

  [left, right] = [0, 0];
  count = 0;

  while (right < answerKey.length) {
    if(answerKey[right] === 'F') {
      count++;
    }

    while (count > k) {
      if(answerKey[left] === 'F') {
        count--;
      }
      left++;
    }
    answer = Math.max(answer, right - left + 1);
    right++;
  }

  return answer;
};
