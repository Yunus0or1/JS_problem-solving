var maxProfit = function (prices) {
  let maxProf = 0
  let buy = prices[0]

  for (let i = 1; i < prices.length; i++) {
    let sell = prices[i]

    let profit = sell - buy
    if (profit > maxProf) {
      maxProf = profit
    }

    if (buy > sell) {
      buy = sell
    }
  }

  return maxProf

};


prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))