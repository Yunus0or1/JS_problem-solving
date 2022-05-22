// Correct Solution but does not work for big number
// var plusOne = function (digits) {

// var powerMul = function (power) {
//     if (power === 0) return 1
//     let number = 1
//     for (let i = 0; i < power; i++) {
//         number = number * 10
//     }

//     return number
// }

//     let number = 0
//     let newDigit = []

//     for (let i = 0; i < digits.length; i++) {

//         number = number + digits[i] * powerMul(digits.length - i - 1)

//         console.log(digits[i], powerMul(digits.length - i - 1))
//         console.log(number)
//     }



//     number = number + 1

//     while (number != 0) {
//         let remainder = number % 10
//         newDigit.push(remainder)
//         number = parseInt(number / 10)
//     }


//     return newDigit.reverse()
// };


var plusOne = function (digits) {

    let newDigits = []

    let remainder = 0
    for (let i = digits.length - 1; i >= 0; i--) {
        let value = digits[i] + remainder

        if (i === digits.length - 1) {
            value = value + 1
        }

        if (value >= 10) {
            newDigits.push(value % 10) 
            remainder = 1
        } else {
            newDigits.push(value)
            remainder = 0
        }
    }

    if(remainder != 0) {
        newDigits.push(remainder)
    }

    return newDigits.reverse()

};

digits = [9]

// digits = [1, 2, 3]

console.log(plusOne(digits))