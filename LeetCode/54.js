/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let resultArray = [];

    while(matrix.length) {
        resultArray.push(...matrix.shift());
        for(let i=0; i<matrix.length-1; ++i) {
            resultArray.push(matrix[i].pop());
        }

        if(matrix.length) {
            for(let i=matrix[matrix.length-1].length; i>0; --i) {
                resultArray.push(matrix[matrix.length-1].pop());
            }
            matrix.pop();
        }
        if(matrix.length) {
            for(let i=matrix.length-1; i>=0; --i) {
                resultArray.push(matrix[i].shift());
            }
        }
    }

    return resultArray.filter(element => element !== undefined);
};
