var findUnsortedSubarray = function (nums) {
    let sorted = [...nums]  
    sorted = sorted.sort((a, b) => a - b)
    let i = 0
    let j = nums.length - 1
    let changed = false

    for (let x = 0; x < nums.length; x++) {
        if (nums[x] != sorted[x]) {
            changed = true
            i = x
            break
        }
    }

    for (let x = nums.length - 1; x >= 0; x--) {
        if (nums[x] != sorted[x]) {
            changed = true
            j = x
            break
        }
    }

    if (changed) {
        return (j - i) + 1
    }

    return 0
};


nums = [2,1]
console.log(findUnsortedSubarray(nums))