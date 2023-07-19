/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let buy = new Array(prices.length).fill(0);
  let sell = new Array(prices.length).fill(0);

  // 첫 날에 매수한 상태로 시작
  buy[0] = -prices[0];

  //[1, 3, 2, 8, 4, 9];
  for (let i = 1; i < prices.length; ++i) {
    // 살 수 있는 상태
    // 남은 수익 - 현재 가격
    buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i]);
    // 팔 수 있는 상태
    // 남은 수익 + 현재 가격 - 수수료
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i] - fee);
  }

    // 팔 수 있는 상태
    // [1, 1, 1, 6, 6, 9]
    // 살 수 있는 상태
    // [0, 0, 0, 0, 2, 2]

  return sell[sell.length-1];
};
