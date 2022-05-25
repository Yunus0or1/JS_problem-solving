var licenseKeyFormatting = function (s, k) {
    const newList = []
    let sLen = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '-') continue

        if (sLen != 0 && sLen % k === 0) {
            newList.push('-')
        }
        newList.push(s[i].toUpperCase())
        sLen = sLen + 1
    }

    const newS = newList.reverse().join('')

    return newS
};

s = "2-5g-3-J"
k = 2
console.log(licenseKeyFormatting(s, k))