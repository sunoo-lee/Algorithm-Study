/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sArray = arrayFilter([...s]);
    let tArray = arrayFilter([...t]);

    for(let i=0; i<s.length; ++i) {
        if(sArray[i] !== tArray[i]) return false;
    }
   
    return true;
};

const arrayFilter = (array) => {
    let index = 0;
    while(array) {
        if(!array.includes('#')) break;
        index = array.indexOf('#');
        if(index === 0) {
            array.shift();
        } else {
            array.splice([index-1], 2);
        }
    }
    return array;
}
