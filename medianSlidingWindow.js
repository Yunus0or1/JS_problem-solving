var medianSlidingWindow = function (nums, k) {
    function getMedian(nums, k) {
        nums = nums.sort((a, b) => a - b)

        if (k % 2 == 1)
            median = nums[parseInt(nums.length / 2)]

        if (k % 2 == 0)
            median = (nums[parseInt(nums.length / 2) - 1] + nums[parseInt(nums.length / 2)]) / 2

        return median
    }

    result = []
    for (let i = 0; i < nums.length - k + 1; i++) {
        current = nums.slice(i, i + k)
        result.push(getMedian(current, k))
    }

    return result
};

nums = [1, 3, -1, -3, 5, 3, 6, 7]
k = 3

console.log(medianSlidingWindow(nums, k))