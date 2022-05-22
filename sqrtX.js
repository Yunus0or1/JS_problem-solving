

var mySqrt = function (x) {

    for (let i = 0; i <= x; i++) {
        if (i * i === x) {
            return i
        }
        if (i * i > x) {
            return i - 1
        }
    }
}


x = 2

console.log(mySqrt(x))
