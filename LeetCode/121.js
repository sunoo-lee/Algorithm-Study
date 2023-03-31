/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let profits = [];
    let buy = prices[0];

    for (const element of prices) {
        if(buy > element) buy = element;
        profits.push(element - buy);
    }

    if(profits) profit = Math.max(...profits);

    return profit;
}
