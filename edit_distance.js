function min(x, y, z) {
    let min = x

    if (y < min) min = y
    if (z < min) min = z

    return min
}

function editDistance(str1, str2) {
    let n = str1.length
    let m = str2.length

    let dp = new Array(m + 1)

    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1)
        for (let j = 0; j <= n; j++) {
            dp[i][j] = 0
        }
    }

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = j;
                continue;
            }

            if (j === 0) {
                dp[i][j] = i;
                continue;
            }

            if (str2[i - 1] === str1[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            }

            else {
                dp[i][j] = 1 + min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j])
            }

            console.log(i, j, str1[i - 1], str2[j - 1], dp[i][j])
        }
    }
}

let str1 = 'abc'
let str2 = 'abde'
editDistance(str1, str2)
console.log('----------------------------------')
// editDistDP(str1, str2, str2.length, str1.length)