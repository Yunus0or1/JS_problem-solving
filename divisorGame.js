/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {

    function getDivisors(x) {
        let list = []
        for (let i = 1; i < x; i++) {
            if (x % i === 0) {
                list.push(i)
            }
        }
        return list
    }

    let dp = [true, false]

    for (let i = 2; i <= n; i++) {
        const list = getDivisors(i)

        let result = true
        for (let j = 0; j < list.length; j++) {
            result = result & dp[i - list[j]]
            if (result === 0) {
                result = false
            }

            if (result === 1) {
                result = true
            }

        }
        dp[i] = result
    }

    console.log(dp, n)

    if (dp[n] === true) {
        return false
    }
    return true
};

n = 3
console.log(divisorGame(n))