var removeElement = function (nums, val) {
    let totalDuplicate = 0
    let endTail = nums.length - 1
    let lengthArr = nums.length

    for (let i = 0; i < nums.length; i++) {
        if(i > endTail) break
        
        if (nums[i] === val) {
            nums[i] = nums[endTail]
            endTail = endTail - 1
            totalDuplicate = totalDuplicate + 1
        }
        if (nums[i] === val) {
            i = i - 1
        }
    }

    var result = lengthArr - totalDuplicate

    return result
};

nums = [2,2]
val = 2
removeElement(nums, val)