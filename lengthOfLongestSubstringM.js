var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0
    if (s.length === 1) return 1

    let x = 0;
    let y = 1;
    let set = new Set([s[x]])

    let max = 0

    while (y != s.length) {
        if (set.has(s[y])) {
            while(set.has(s[y])){
                set.delete(s[x])
                x = x + 1
            }
        } else {
            let maxSub = y - x
            if (maxSub > max) {
                max = maxSub
            }
        }
        set.add(s[y])
        y = y + 1
    }

    return max + 1
};

s = "au"
console.log(lengthOfLongestSubstring(s))