

// TLS Recieved 
// var maxArea = function (height) {
//     let max = 0

//     for (let i = 0; i < height.length; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             const distance = j - i
//             const h = height[i] > height[j] ? height[j] : height[i]

//             const area = distance * h
//             if (area > max) {
//                 max = area
//             }
//         }
//     }

//     return max
// };

var maxArea = function (height) {
    let max = 0
    let i = 0;
    let j = height.length - 1

    while (i <= j) {
        const distance = j - i
        const h = height[i] > height[j] ? height[j] : height[i]

        const area = distance * h
        if (area > max) {
            max = area
        }

        if (height[j] > height[i]) {
            i = i + 1
        }else {
            j = j - 1
        }

    }

    return max
};



height = [1,2,4,3]
console.log(maxArea(height))