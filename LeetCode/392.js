/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sCount = 0;

    for ( i=0; i<t.length; ++i) {
        if (s[sCount] === t[i]) {
            sCount ++;
        }
    }

    if (s.length === sCount) {
        return true;
    } else return false;
};
