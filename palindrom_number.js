var isPalindrome = function (x) {
    if (x < 0) return false

    if (x >= 0 && x <= 9) return true

    let revX = 0
    let tmpX = x
    while (tmpX > 0) {
        let lastDigit = tmpX % 10
        revX = revX * 10 + lastDigit
        tmpX = parseInt(tmpX / 10)
    }

    if(revX === x){
        return true
    }
    return false
};

x = 121

console.log(isPalindrome(x))