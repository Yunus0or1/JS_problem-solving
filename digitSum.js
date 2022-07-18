/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    let len = s.length

    while (len > k) {
        let newS = ''
        for (let i = 0; i < s.length; i = i + k) {
            let str = s.slice(i, i + k)
            let sum = 0
            for (let j = 0; j < str.length; j++) {
                sum += parseInt(str[j])
            }
            newS += sum
        }
        s = newS
        len = s.length
    }

    return s
};

s = "1", k = 3
console.log(digitSum(s, k))