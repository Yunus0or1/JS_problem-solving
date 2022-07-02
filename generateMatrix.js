/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var generateMatrix = function (n) {
    let list = []
    let matrix = []

    for (let i = 1; i <= n * n; i++) {
        list.push(i)
    }

    for (let i = 0; i < n; i++) {
        let ll = []
        for (let j = 0; j < n; j++) {
            ll.push(0)
        }
        matrix.push(ll)
    }

    let position = [[0, 0], [0, n - 1], [n - 1, n - 1], [n - 1, 0]]

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

    for (let i = 0; i < list.length; i++) {
        matrix[x][y] = list[i]

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

    return matrix
};

n = 3
console.log(generateMatrix(n))