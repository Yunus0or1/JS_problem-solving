var isValid = function (s) {
    let strStack = []


    let oppositeBracketMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            strStack.push(s[i])
        } else {
            const poppedBracket = strStack.pop()
            if (s[i] != oppositeBracketMap[poppedBracket]) {
                return false
            }
        }
    }

    if (strStack.length === 0) return true
    return false
};

s = "([{]})"

console.log(isValid(s))