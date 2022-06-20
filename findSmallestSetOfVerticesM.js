var findSmallestSetOfVertices = function (n, edges) {
    let array = []
    for (let i = 0; i < n; i++) {
        array.push(0)
    }

    for (let i = 0; i < edges.length; i++) {
        array[edges[i][1]] = 1
    }

    let result = []

    for (let i = 0; i < n; i++) {
        if (array[i] === 0) {
            result.push(i)
        }
    }

    return result
};

n = 6, edges = [[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]]
console.log(findSmallestSetOfVertices(n, edges))