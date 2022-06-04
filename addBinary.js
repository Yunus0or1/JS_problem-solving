var addBinary = function (a, b) {
    let i = a.length - 1
    let j = b.length - 1
    let str = []
    let sum = 0
    let carry = 0

    while (i >= 0 || j >= 0) {
        let val1 = 0
        let val2 = 0

        if (a[i] != undefined) {
            val1 = a[i]
        }

        if (b[j] != undefined) {
            val2 = b[j]
        }

        sum = parseInt(val1) + parseInt(val2) + carry

        if (sum === 2) {
            sum = 0
            carry = 1
        } else if (sum === 3) {
            sum = 1
            carry = 1
        }
        else {
            sum = sum
            carry = 0
        }

        str.push(sum)
        i = i - 1
        j = j -1
    }

    if (carry > 0) str.push(carry)

    return str.reverse().join('')

};

a = "1", b = "0"
console.log(addBinary(a, b))