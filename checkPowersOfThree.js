// Pending
var checkPowersOfThree = function (n) {
  let totalTraversal = parseInt(n/3)  + 1
  let totalSum = 0

  for (let i = 1; i <totalTraversal; i++){
    totalSum = totalSum + Math.pow(3,i)

    if(totalSum > n) return false

    if(totalSum === n) return true

    console.log(totalSum)
  }
};

n = 91
console.log(checkPowersOfThree(n))