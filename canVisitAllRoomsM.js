var canVisitAllRooms = function (rooms) {
    let opened = []

    for (let i = 0; i < rooms.length; i++) {
        opened.push(0)
    }

    opened[0] = 1

    let stack = [0]

    while (stack.length != 0) {
        const value = stack.pop()
        opened[value] = 1
        const nextNodeRooms = rooms[value]

        for (let i = 0; i < nextNodeRooms.length; i++) {
            if (opened[nextNodeRooms[i]] === 1) { continue }
            else {
                stack.push(nextNodeRooms[i])
            }
        }
    }

    for (let i = 0; i < opened.length; i++) {
        if (opened[i] === 0) return false
    }

    return true

};

rooms = [[1, 3], [3, 0, 1], [2], [0]]
// rooms = [[1], [2], [3], []]
// rooms = [[4], [3], [], [2, 5, 7], [1], [], [8, 9], [], [], [6]]
rooms = [[2], [], [1]]
console.log(canVisitAllRooms(rooms))

// for (let i = 0; i < rooms.length; i++) {
//     const nextRooms = rooms[i]

//     for (let j = 0; j < nextRooms.length; j++) {
//         opened[nextRooms[j]] = 1
//     }
// }