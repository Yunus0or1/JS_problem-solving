var generate = function (numRows) {
    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1], [1, 1]]

    const pasArray = [[1], [1, 1]]

    for (let i = 2; i < numRows; i++) {
        const prevArray = pasArray[i - 1]
        const newArray = []

        for (let j = 0; j <= i; j++) {
            if (j == 0 || j === i) {
                newArray.push(1)
            }
            else {
                newArray.push(prevArray[j] + prevArray[j-1])
            }
        }

        pasArray.push(newArray)
    }

    return pasArray

};


numRows = 5
console.log(generate(numRows))