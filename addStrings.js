var addStrings = function (num1, num2) {

  let max = (num2.length > num1.length) ? num2.length - 1 : num1.length - 1

  let i = num1.length - 1
  let j = num2.length - 1
  let remainder = 0
  let newS = ''

  while (max != -1) {
    let a = num1[i] ? num1[i] : 0
    let b = num2[j] ? num2[j] : 0

    let sum = remainder + (parseInt(a) + parseInt(b))

    if (sum >= 10) {
      remainder = 1
      sum = sum - 10
    } else {
      remainder = 0
      sum = sum
    }

    newS = newS + sum

    i = i - 1
    j = j - 1
    max = max - 1
  }

  if(remainder != 0){
    newS = newS + remainder
  }


  function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }

  return reverseString(newS)
};

num1 = "1", num2 = "9"
console.log(addStrings(num1, num2))