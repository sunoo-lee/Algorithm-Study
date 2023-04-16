/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') return '0';
  let resultArray = new Array(num1.length + num2.length).fill(0);
  let multyArray = [];
  let numArray1 = [...num1];
  let numArray2 = [...num2];
  let pointer1 = 0;
  let pointer2 = 0;
  let len1 = numArray1.length;
  let len2 = numArray2.length;

  for (let i = 0; i < len1; ++i) {
    multyArray.push(Number(numArray1.pop()));
  }

  while (pointer1 < len2) {
    let target = Number(numArray2.pop());

    for (let i = 0; i < multyArray.length - 1 + 1; i++) {
      resultArray[pointer2] += multyArray[i] * target;
      pointer2++;
    }

    pointer1++;
    pointer2 = pointer1;
  }

  for (let i = 0; i <= resultArray.length; ++i) {
    if (resultArray[i] > 9) {
      let tmp = resultArray[i] / 10;
      resultArray[i] = resultArray[i] % 10;
      resultArray[i + 1] = Math.floor(resultArray[i + 1] + tmp);
    }
  }

  for (let i = resultArray.length - 1; i >= 0; --i) {
    if (resultArray[i] === 0) resultArray.pop();
    else break;
  }

  let result = "";

  for (let i = 0; i < resultArray.length; ++i) {
    result = resultArray[i] + "" + result;
  }

  return result;
};
