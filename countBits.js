/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    if (n === 0) return [0]

    let offset = 1

    let dp = [0]
    for (let i = 1; i <= n; i++) {
        if (offset * 2 === i) {
            offset = i
        }
        dp[i] = 1 + dp[i - offset]

    }

    return dp
};

n = 5
console.log(countBits(n))