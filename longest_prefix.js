var longestCommonPrefix = function (strs) {

    if (strs.length === 1) return strs[0]

    let prefixIndex = -1

    strs.sort((a, b) => {
        if (a.length > b.length) {
            return 1
        }
        if (b.length > a.length) {
            return -1
        }
        if (b.length === a.length) {
            return 0
        }
    })

    if (strs[0] === "") return ""


    for (let i = 0; i < strs[0].length; i++) {
        let matched = true
        const character = strs[0][i]

        for (let j = 1; j < strs.length; j++) {
            const singleStr = strs[j]
            const singleStrChar = singleStr[i]

            if (singleStrChar != character) {
                matched = false
                i = strs[0].length + 1;
                break;
            }
        }
        if (matched)
            prefixIndex = i
    }

    if (prefixIndex === -1) return ""

    return strs[0].slice(0, prefixIndex + 1)
};

strs = ["ab", "a"]
console.log(longestCommonPrefix(strs))