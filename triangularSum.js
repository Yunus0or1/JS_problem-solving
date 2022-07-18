/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    let len = nums.length
    while (len != 1) {

        for (let i = 0; i < len - 1; i++) {
            nums[i] = (nums[i] + nums[i + 1]) % 10
        }
        len = len - 1
    }

    return nums[0]
};

nums = [5]
console.log(triangularSum(nums))
