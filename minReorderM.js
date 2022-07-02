var minReorder = function (n, connections) {

    let newConnections = connections.sort((a, b) => a[1] - b[1])

    let ordered = []
    for (let i = 0; i < n; i++) {
        ordered.push(false)
    }
    ordered[0] = true
    let count = 0

    for (let i = 0; i < newConnections.length; i++) {
        let first = connections[i][0]
        let second = connections[i][1]

        if (ordered[second]) {
            ordered[first] = true
            continue
        }
        ordered[second] = true
        count = count + 1

    }

    return count

};

n = 6, connections = [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]
n = 3
connections = [[1, 2], [2, 0]]

// n = 7
// connections = [[0, 6], [6, 3], [1, 3], [2, 1], [4, 0], [4, 5]]

n = 6
connections = [[1, 4], [2, 3], [3, 1], [4, 0], [5, 4]]
console.log(minReorder(n, connections))