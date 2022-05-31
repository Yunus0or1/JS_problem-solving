var multiply = function (num1, num2) {

  function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }

  let max = (num2.length > num1.length) ? num2.length - 1 : num1.length - 1

  let i = num1.length - 1
  let j = num2.length - 1
  let remainder = 0
  let newS = ''

  while (max != -1) {
    let a = num1[i] ? num1[i] : 0
    let b = num2[j] ? num2[j] : 0

    let mulPart = remainder + (parseInt(a) *  parseInt(b))

    if (mulPart >= 10) {
      remainder = mulPart % 10
      mulPart = parseInt(mulPart / 10)
    } else {
      remainder = 0
      mulPart = mulPart
    }

    newS = newS + mulPart

    i = i - 1
    j = j - 1
    max = max - 1
  }

  if (remainder != 0) {
    newS = newS + remainder
  }


  return newS
};

num1 = "3", num2 = "10"
console.log(multiply(num1, num2))