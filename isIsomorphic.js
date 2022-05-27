var isIsomorphic = function (s, t) {
    const data = {}

    for (let i = 0; i < s.length; i++) {
                    let value = data[s[i]]
        if (s[i] in data) {

            if (value != t[i]) {
                return false
            }
        }else{
            data[s[i]] = t[i]
        }

    }

    return true
};

// s = "egg"
// t = "add"
s = "paper", t = "title"

console.log(isIsomorphic(s, t))