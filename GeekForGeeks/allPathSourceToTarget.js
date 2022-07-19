const allPathsSourceTarget = (graph) => {
    const start = 0
    const end = graph.length - 1
    const pathList = []

    const stack = [start]

    const dfs = (start, path) => {
        if (start == end) {
            pathList.push(path)
        }

        for (let node of graph[start]) {
            let newPath = [...path, node]
            console.log(node, newPath)
            dfs(node, newPath)
        }
    }
    dfs(start, [start])

    while (stack.length != 0) {
        const value = stack.pop()

        if (value === end) {
            pathList.push(path)
        }

        for (let node of graph[value]) {

        }
    }

    return pathList
}

// graph = [[4, 3, 1], [3, 2, 4], [3], [4], []]

let graph = [
    [1, 2, 3],
    [3, 4],
    [3, 4],
    [],
    [],
]

console.log(allPathsSourceTarget(graph))