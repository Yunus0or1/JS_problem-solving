var findShortestSubArray = function (nums) {
  const dataMap = {}

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in dataMap) {
      const indexList = dataMap[nums[i]]
      indexList.push(i)
      dataMap[nums[i]] = indexList
    } else {
      dataMap[nums[i]] = [i]
    }
  }

  let totalArrayLen = 0
  let totalDigitInBetween = 99999

  for (let [key, value] of Object.entries(dataMap)) {
    const tempArrayLen = value.length
    const tmpDigitInBetween = value[value.length - 1] - value[0] + 1

    if (tempArrayLen > totalArrayLen) {
      totalArrayLen = tempArrayLen
      totalDigitInBetween = tmpDigitInBetween
    }

    if (tempArrayLen === totalArrayLen && tmpDigitInBetween <= totalDigitInBetween) {
      totalArrayLen = tempArrayLen
      totalDigitInBetween = tmpDigitInBetween
    }

  }
  return totalDigitInBetween

};
nums = [1,2,2,3,1]
console.log(findShortestSubArray(nums))