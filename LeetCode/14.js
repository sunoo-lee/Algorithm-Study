/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs[0] === '') return '';
    if(strs.length === 1) return strs[0];
    let array = strs.sort((a, b) => a.length - b.length);
    let pointer = 1;

    let target = [];

    array = array.map((element) => [...element]);

    while (pointer <= array[0].length) {
        target = array[0].slice(0, pointer);
        let combine;
        for (let i = 0; i < array.length; ++i) {
            let tmp = array[i].slice(0, pointer);
            combine = isSubset(tmp, target);
            if (!combine) break;
        }
        if (!combine) {
          target.pop();
          return target.join('');
        }
        else pointer++;
    }
    return array[0].join('');
};

const isSubset = (array1, array2) => {
  for (let i = 0; i < array2.length; ++i) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
