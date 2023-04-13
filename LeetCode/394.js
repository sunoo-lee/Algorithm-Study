/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let targetString = s;
    let num = 0;
    let decode = '';
    let del = '';

    let start = 0;
    let end = 0;

    while(targetString.length) {
        if(targetString.lastIndexOf('[') === -1) break;

        start = targetString.lastIndexOf('[');
        num = getNums(targetString, start - 1);
        end = targetString.indexOf(']', start);
        decode = targetString.slice(start + 1, end);
        del = targetString.slice(start - num[0], end+1);
        decode = decode.repeat(num[1]);
        targetString = targetString.replace(del, decode);
        decode = '';
    }

    return targetString;
};

const getNums = (string, num) => {
    let result = '';
    let i = 0;
    while(i <= num) {
        if(string.charCodeAt(num - i) - 48 > 9) break;
        result = string.charCodeAt(num - i) - 48 + result;
        i++;
    }
    return [i, Number(result)];
}
