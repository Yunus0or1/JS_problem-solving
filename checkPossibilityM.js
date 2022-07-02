var checkPossibility = function (nums) {
    let count = 0
    let i = 0

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] >= nums[i]) {
            i = j
            continue
        }
        if (nums[j] < nums[i]) {
            count = count + 1
            if (count > 1) return false
            if (j === nums.length - 1) continue

            // Now checking which to drop
            if (nums[j + 1] > nums[i]) {
                let temp = nums[i]
                nums[i] = nums[j + 1]
                nums[j + 1] = temp
                i = j
            } else if (nums[j + 1] > nums[j]) {
                i = j
            } else {
                return false
            }
        }
    }

    return true
};

nums = [4, 2, 3]
nums = [3, 4, 2, 3]
// nums = [4, 2, 1]
console.log(checkPossibility(nums))
