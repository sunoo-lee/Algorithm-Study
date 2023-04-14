/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let targetString = s;
    let remove = '';
    let index = 1;

    while(index < targetString.length) {
        if(targetString[index-1] === targetString[index]) {
            remove = targetString.slice(index-1, index+1);
            targetString = targetString.replace(remove, '');
            index = 1;
        } else {
            index++;
        }
    }

    return targetString;
};
