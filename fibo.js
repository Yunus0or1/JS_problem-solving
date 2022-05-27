function fiboTopDown(n, memo) {
    if (n == 1 || n == 2) return 1

    if (memo[n] != undefined || memo[n] != null) {
        return memo[n]
    }

    memo[n] = fiboTopDown(n - 1, memo) + fiboTopDown(n - 2, memo)
    return memo[n]
}

function fiboBottomUp(n) {
    const data = [1, 1]

    for (let i = 2; i < n; i++) {
        data[i] = data[i - 1] + data[i - 2]
    }

    return data[n - 1]
}

function fibo(n, type) {
    console.log(n, type)
    if (n === 1 || n === 0) {
        return 1
    }

    return fibo(n - 1, 'n-1') + fibo(n - 2, 'n-2')
}

x = 50
memo = []

console.log(fiboTopDown(x, memo))
// console.log(fibo(x, 'main'))