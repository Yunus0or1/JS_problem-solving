var maxProfit = function (prices) {
  let maxProf = 0

  for (let i = 0 ; i < prices.length; i++){
    for(let j = i; j < prices.length; j++){
      const profit = prices[j] - prices[i]

      if(profit >= maxProf){
        maxProf = profit
      }
    }
  }

  return maxProf

};


prices = [7,6,4,3,1]
console.log(maxProfit(prices))