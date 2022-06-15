var sortColors = function (nums) {
    let x = 0
    let y = nums.length - 1

    for (let i = 0; i <= y; i++) {
        if (nums[i] === 0) {
            const temp = nums[x]
            nums[x] = nums[i]
            nums[i] = temp
            x = x + 1
        }
        else if (nums[i] === 2) {
            const temp = nums[y]
            nums[y] = nums[i]
            nums[i] = temp

            y = y - 1
            i = i - 1
        }
    }
};

nums = [2,0,0,0,0,1,2,2]
sortColors(nums)
console.log(nums)