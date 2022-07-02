/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let list = []
    const col = matrix[0].length
    const row = matrix.length

    let position = [[0, 0], [0, col - 1], [row - 1, col - 1], [row - 1, 0]]

    let move = {
        top: false,
        bottom: false,
        right: true,
        left: false
    }

    const moveChange = (direction) => {
        move.top = false
        move.bottom = false
        move.right = false
        move.left = false

        move[direction] = true
    }

    let x = 0
    let y = 0
    let direction = 'right'

    for (let i = 0; i < row * col; i++) {
        list.push(matrix[x][y])

        if (x === (position[0][0] + 1) && y === (position[0][1]) && move.top === true) {
            direction = 'right'
            moveChange(direction)
            position[0] = [position[0][0] + 1, position[0][1] + 1]
        }

        else if (x === (position[1][0]) && y === (position[1][1]) && move.right === true) {
            direction = 'bottom'
            moveChange(direction)
            position[1] = [position[1][0] + 1, position[1][1] - 1]
        }

        else if (x === (position[2][0]) && y === (position[2][1]) && move.bottom === true) {
            direction = 'left'
            moveChange(direction)
            position[2] = [position[2][0] - 1, position[2][1] - 1]
        }

        else if (x === (position[3][0]) && y === (position[3][1]) && move.left === true) {
            direction = 'top'
            moveChange(direction)
            position[3] = [position[3][0] - 1, position[3][1] + 1]
        }


        if (move.right === true) {
            y = y + 1
        }
        else if (move.left === true) {
            y = y - 1
        }
        else if (move.bottom === true) {
            x = x + 1
        }
        else if (move.top === true) {
            x = x - 1
        }
    }

    return list
};

matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
console.log(spiralOrder(matrix))