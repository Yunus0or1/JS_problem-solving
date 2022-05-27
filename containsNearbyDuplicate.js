var containsNearbyDuplicate = function (nums, k) {
    let numSet = {}

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in numSet && Math.abs(numSet[nums[i]] - i) <= k) {
            console.log(numSet)
            return true
        } else {
            numSet[nums[i]] = i
        }
    }

    return false
};

nums = [1,0,1,1], k = 1
console.log(containsNearbyDuplicate(nums, k))