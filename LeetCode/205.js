/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sArray = [];
    let tArray = [];

    for (let i = 0; i < s.length; i++) {
        sArray.push(s.indexOf(s[i]));
        tArray.push(t.indexOf(t[i]));
    }

    const equals = (sArray, tArray) =>
    JSON.stringify(sArray) === JSON.stringify(tArray);

    const a = sArray;
    const b = tArray;

    return equals(a, b);
};
