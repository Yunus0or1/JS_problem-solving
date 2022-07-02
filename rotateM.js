/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let visited = new Set()
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let key1 = `${i}_${j}`
            let key2 = `${j}_${i}`

            if (visited.has(key1) || visited.has(key2)) {
                continue
            }

            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp

            visited.add(key1)
            visited.add(key2)
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let len = matrix[i].length
        let x = len - 1
        let upto = parseInt(len / 2)

        for (j = 0; j < upto; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][x]
            matrix[i][x] = temp
            x = x - 1
        }

    }
};

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
rotate(matrix)
console.log(matrix)