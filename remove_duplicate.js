// Noob Method
var removeDuplicates = function (nums) {

    // First element is always unique
    let uniqueElement = 1

    for (let i = 1; i < nums.length; i++) {
        let currentElemnt = nums[i]
        let prevElemnt = nums[i - 1]

        if (currentElemnt != prevElemnt) {
            uniqueElement += 1
        }else {
            nums[i-1] = null
        }

    }


    for (let i =0; i< nums.length; i++){
        if(nums[i] === null){
            for(let j = i; j < nums.length - 1; j++){
                nums[j] = nums[j+1]
            }
        }
        if(nums[i] === null){
            i = i - 1
        }
    }

    return uniqueElement

};

var removeDuplicates = function (nums) {

    // First element is always unique
    let uniqueElement = 1
    let indexPointer = 1

    for (let i = 1; i < nums.length; i++) {
        let currentElemnt = nums[i]
        let prevElemnt = nums[i - 1]

        if (currentElemnt != prevElemnt) {
            uniqueElement += 1
            nums[indexPointer] = currentElemnt
            indexPointer = indexPointer  + 1
        }
    }

    return uniqueElement

};

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums))

nums =  [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))