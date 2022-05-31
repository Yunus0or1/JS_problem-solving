// var thirdMax = function (nums) {
//   let n = nums.sort((a, b) => a - b)

//   if (n.length <= 3) return n[n.length - 1]

//   let x = 0
//   let i = n.length - 1
//   while (x != 3) {
//     if (x === 2) return n[i]
//     if (n[i] === n[i - 1]) {
//       i = i - 1
//     } else {
//       i = i - 1
//       x = x + 1
//     }
//   }
// };

var thirdMax = function (nums) {
  let fMax = nums[0]
  let min = nums[0]
  let sMax = nums[0]
  let tMax = nums[0]

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > fMax) {
      fMax = nums[i]
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i]
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= min && nums[i] < fMax) {
      sMax = nums[i]
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= min && nums[i] < sMax) {
      tMax = nums[i]
    }
  }

  if(nums.length === 1) return fMax
  if(nums.length === 2) return sMax

  return tMax
};

// nums = 
nums = [1,2]
console.log(thirdMax(nums))