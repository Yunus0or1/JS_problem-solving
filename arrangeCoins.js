var arrangeCoins = function (n) {
  let totalRow = 0

  for (let i = 1; i <= n; i++) {
    if (n >= i) {
      totalRow = totalRow + 1
    }

    n = n - i
  }
  return totalRow
};

n = 8
console.log(arrangeCoins(n))