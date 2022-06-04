var isPowerOfThree = function (n) {
  if (n === 0) return false
  while (n != 1) {
    let remainder = n % 3
    if (remainder != 0) return false
    n = n / 3
  }

  return true
};

n = 0
console.log(isPowerOfThree(n))