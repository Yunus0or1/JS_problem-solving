// var convert = function (s, numRows) {
//   let array = []
//   let movingFromTop = true
//   let movingFromBottom = false

//   for (let i = 0; i < numRows; i++) {
//     array.push([])
//   }

//   for (let i = 0; i < numRows; i++) {
//     let current = i%numRows

//     console.log(current,s[i])
//     let valList = array[current]
//     valList.push(s[i])
//     array[current] = valList
//   }

//   return array
// };


var convert = function (s, numRows) {
  let pointer = 0
  for (let i = 0; i < s.length; i++) {

    if ((pointer + 1) % numRows === 0) {
      console.log(s[i])
    }
  }
  

  pointer = pointer + 1

  return s
};


s = "PAYPALISHIRING", numRows = 4
console.log(convert(s, numRows))