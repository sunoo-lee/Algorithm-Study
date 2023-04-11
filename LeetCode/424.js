/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const map = [];

    let maxCount = 0;
    let max = 0;
    let left = 0;
    let right = 0;

    while(right < s.length) {
        const char = s[right];
        map[char] = (map[char] || 0) + 1;
        maxCount = Math.max(maxCount, map[char]);

        if(right - left + 1 - maxCount> k) {
            map[s[left]]--;
            left++;
        }

        max = Math.max(max, right - left + 1);
        right++;
    }

    return max;
};
