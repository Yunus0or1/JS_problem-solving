/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let len = nums.length

    if (k >= len) {
        k = k % len
    }

    const startPoint = len - k
    let arr = nums.slice(startPoint, len)

    let j = len - 1
    for (let i = len - k - 1; i >= 0; i--) {
        nums[j] = nums[i]
        j = j - 1
    }

    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i]
    }
};

nums = [1, 2, 3, 4, 5, 6, 7], k = 0
rotate(nums, k)
console.log(nums)