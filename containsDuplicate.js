var containsDuplicate = function(nums) {
    let numSet = new Set()

    for(let i = 0 ; i< nums.length; i++){
        if(numSet.has(nums[i])){
            return true
        }else{
            numSet.add(nums[i])
        }
    }

    return false
};

nums = [1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(nums))