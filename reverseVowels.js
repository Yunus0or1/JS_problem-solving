var reverseVowels = function (s) {
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E','I', 'O', 'U'])

    let i = 0;
    let j = s.length - 1

    s = s.split('')

    while (i <= j) {
        if (set.has(s[i]) && set.has(s[j])) {
            let temp = s[i]
            s[i] = s[j]
            s[j] = temp

            i = i + 1
            j = j - 1

            continue
        }

        if (!set.has(s[i])) {
            i = i + 1
        }

        if (!set.has(s[j])) {
            j = j - 1
        }
    }

    return s.join('')

};

s = "aA"
console.log(reverseVowels(s))