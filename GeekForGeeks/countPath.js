const countpath = (graph, start, end) => {
    let pathCount = 0

    const count = (pathCount, start, end) => {

        if (start == end) {
            pathCount = pathCount + 1
        }

        let neighbourList = graph[start]
        for (let node of neighbourList) {
            console.log(node, pathCount)
            pathCount = count(pathCount, node, end)
        }

        return pathCount
    }

    pathCount = count(pathCount, start, end)
    return pathCount
}


let graph = {
    0: [1, 2, 3],
    1: [3, 4],
    2: [3, 4],
    3: [],
    4: [],
}
// let graph = {
//     0: [1],
//     1: [3],
//     3: [],
// }
let start = 0
let end = 3

console.log(countpath(graph, start, end))












