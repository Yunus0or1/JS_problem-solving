/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let mat = []
    mat.push([1])
    mat.push([1, 1])

    for (let i = 0; i <= rowIndex; i++) {
        if (i === 0 || i === 1) continue

        let list = []
        let prevList = mat[i - 1]

        for (let j = 0; j <= prevList.length; j++) {
            if (j === 0 || j === prevList.length) {
                list.push(1)
                continue
            }
            list.push(prevList[j] + prevList[j - 1])
        }

        mat.push(list)
    }
    return mat[rowIndex]
};

rowIndex = 0
console.log(getRow(rowIndex))