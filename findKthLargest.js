var findKthLargest = function (nums, k) {
    let n = nums.sort(function(a, b) {
        return a - b;
      })
    return n[n.length - k]
};

nums = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6]
k = 2
console.log(findKthLargest(nums, k))