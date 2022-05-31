var findDuplicate = function (nums) {

  for (let i = 0; i < nums.length;) {
    if (i === nums[i] - 1) {
      i++
      continue
    }
    else {
      let currentValue = nums[i]
      let indexedValue = nums[currentValue - 1]

      if (currentValue === indexedValue) return currentValue


      nums[i] = indexedValue
      nums[currentValue - 1] = currentValue

    }
  }

};
nums = [2,1, 1]
// nums = [3, 1, 3, 4, 2]
// nums = [1, 3, 4, 2, 2]
// nums = [1, 3, 4, 2, 1]
// nums = [1, 3, 4, 2, 2]
console.log(findDuplicate(nums))