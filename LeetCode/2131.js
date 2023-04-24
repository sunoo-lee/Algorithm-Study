/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  let sameWord = 0;
  let odd = false;

  const wordsCount = words.reduce((map, word) => {
    map[word] || (map[word] = 0);
    map[word]++;
    return map;
  }, []);

  for (const word in wordsCount) {
    wordReverse = getReverse(word);

    if (word === wordReverse) {
      if (wordsCount[word] % 2 === 0) {
        sameWord += wordsCount[word];
      } else if (wordsCount[word] % 2 === 1) {
        sameWord += wordsCount[word] - 1;
        odd = true;
      }
      continue;
    }

    if (wordsCount[word] > 0 && wordsCount[wordReverse] > 0) {
      const min = Math.min(wordsCount[word], wordsCount[wordReverse]);
      sameWord += 2 * min;
      wordsCount[word] -= min;
      wordsCount[wordReverse] -= min;
    }
  }

  if (odd) sameWord++;

  return sameWord * 2;
};

const getReverse = (string) => string.split("").reverse().join("");
