/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const imageArray = image;
    let targetColor = imageArray[sr][sc];
    let i = sr, j = sc;

    fillColor(imageArray, i, j, targetColor, color);

    return imageArray;
};

const fillColor = (image, i, j, targetColor, newColor) => {
    if(i < 0 || j < 0 || i >= image.length || j >= image[i].length || image[i][j] === newColor || image[i][j] !== targetColor) return;
    image[i][j] = newColor;

    fillColor(image, i-1, j, targetColor, newColor);
    fillColor(image, i+1, j, targetColor, newColor);
    fillColor(image, i, j-1, targetColor, newColor);
    fillColor(image, i, j+1, targetColor, newColor);
}
