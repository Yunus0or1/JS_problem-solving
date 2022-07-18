var getMaximumGenerated = function (n) {

    if (n === 0) return 0
    if (n === 1 || n === 2) return 1

    let nums = []
    for (let i = 0; i <= n; i++) {
        if (i === 1) nums.push(1)
        else nums.push(0)
    }
    let highest = 1


    for (let i = 1; i <= parseInt(n / 2); i++) {
        nums[2 * i] = nums[i]
        nums[2 * i + 1] = nums[i] + nums[i + 1]
    }

    for (let i = 0; i <= n; i++) {
        if (nums[i] > highest) highest = nums[i]
    }

    return highest
};

n = 4
console.log(getMaximumGenerated(n))