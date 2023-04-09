/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = [];
    const sArray = new Array(26).fill(0)
    const pArray = new Array(26).fill(0)

    for(let i=0; i<p.length; i++){
        sArray[s.charCodeAt(i)-97]++;
        pArray[p.charCodeAt(i)-97]++;
    }

    for(let i=0; i<s.length; i++){
        if(charCheck(sArray,pArray)){
            result.push(i)
        }
        sArray[s.charCodeAt(i)-97]--
        sArray[s.charCodeAt(i+p.length)-97]++;
    }

    return result;
};

const charCheck = (sArray, pArray) => {
    for(let i=0;i<pArray.length;i++){
        if(sArray[i]!==pArray[i]){
            return false;
        }
    }
    return true;
}
