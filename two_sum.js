
function two_sum(nums, target) {
    let hash = {}
    let index1;
    let index2;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash) {
            const indexList = hash[nums[i]]
            indexList.push(i)
            hash[nums[i]] = indexList
        }

        else {
            const indexList = [i]
            hash[nums[i]] = indexList
        }
    }

    for (let i = 0; i < nums.length; i++) {
        index1 = i
        let minusResult = target - nums[i]

        // Same value generated after minus..
        // Now we check if there are mulitple index of this value
        if (minusResult in hash && minusResult === nums[i]) {
            const indexList = hash[nums[i]]

            if (indexList.length > 1) {
                const tmpIndex = indexList.findIndex(e => e === index1)
                index2 = indexList[tmpIndex + 1]
                matched = true
                break
            }
        }

        if (minusResult in hash && minusResult != nums[i]) {
            index2 = nums.findIndex(e => e === minusResult)
            break
        }
    }

    return [index1, index2]
}


nums = [-1,-2,-3,-4,-5]
target = -8

console.log(two_sum(nums, target))
