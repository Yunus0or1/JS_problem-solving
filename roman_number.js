var romanToInt = function (s) {
    var mapData = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let intValue = 0

    for (let i = s.length - 1; i >= 0; i--) {
        intValue = intValue + mapData[s[i]]


        if (s[i] === 'V' && s[i - 1] === 'I') {
            intValue = intValue - 1
            i = i - 1
        }

        if (s[i] === 'X' && s[i - 1] === 'I') {
            intValue = intValue - 1
            i = i - 1
        }

        if (s[i] === 'L' && s[i - 1] === 'X') {
            intValue = intValue - 10
            i = i - 1
        }

        if (s[i] === 'C' && s[i - 1] === 'X') {
            intValue = intValue - 10
            i = i - 1
        }
        
        if (s[i] === 'D' && s[i - 1] === 'C') {
            intValue = intValue - 100
            i = i - 1
        }

        if (s[i] === 'M' && s[i - 1] === 'C') {
            intValue = intValue - 100
            i = i - 1
        }
    }

    return intValue
};

let s = "MCMXCIV"

console.log(romanToInt(s))

