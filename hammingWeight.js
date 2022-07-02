/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let decimel = 0
    let base = 1
    let count = 0
    while (n != 0) {
        let rem = n % 10
        n = parseInt(n / 10)
        decimel = decimel + base * rem
        base = base * 2
        if (rem === 1) count = count + 1
    }

    return count
};

n = 010
console.log(n)

// console.log(hammingWeight(n))