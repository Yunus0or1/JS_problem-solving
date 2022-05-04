var merge = function (nums1, m, nums2, n) {
    const nums1Tmp = nums1.slice(0, m)

    let i = 0
    let j = 0
    let newData = []

    while (nums1Tmp[i] != undefined && nums2[j] != undefined) {
        if (nums1Tmp[i] <= nums2[j]) {
            newData.push(nums1Tmp[i])
            i = i + 1
        }
        else if (nums1Tmp[i] > nums2[j]) {
            newData.push(nums2[j])
            j = j + 1
        }
    }

    while (i != nums1Tmp.length) {
        newData.push(nums1Tmp[i])
        i = i + 1
    }

    while (j != nums2.length) {
        newData.push(nums2[j])
        j = j + 1
    }

    for(let i = 0; i < newData.length; i++){
        nums1[i] = newData[i]
    }
   
};

nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3

merge(nums1, m, nums2, n)