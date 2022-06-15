var longestPalindrome = function (s) {
    if (s.length === 0) return 0
    if (s.length === 1) return 1

    for (let i = 0; i < s.length; i++) {
        let sub = ''

        for (let j = i; j < s.length; j++) {

            for (let k = i; k <= j; k++) {
                sub = sub + s[k]
            }


        }
        console.log(sub)
    }
};

s = "dvdf"
console.log(longestPalindrome(s))