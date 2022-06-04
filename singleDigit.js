var singleNumber = function (nums) {
  var xor = 0

  for (let num of nums){
    xor = xor ^num
    console.log(xor)
  }

  return xor

};

nums = [-1,0,0,0,2,-1,2,2,-1,9]
console.log(singleNumber(nums))