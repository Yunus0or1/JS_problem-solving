var allPathsSourceTarget = function (graph) {

    const target = graph.length - 1

    const stack = [[0]]

    const result = []

    while (stack.length != 0) {
        let path = []
        const lastPath = stack.pop()
        const lastNode = lastPath[lastPath.length - 1]

        if (lastNode === target) {
            result.push(lastPath)
        }

        const nextNodes = graph[lastNode]

        for (let node of nextNodes) {
            path = [...lastPath, node]
            stack.push(path)
        }
    }
    return result

};

graph = [[1, 2], [3], [3], []]

graph = [[4, 3, 1], [3, 2, 4], [3], [4], []]
console.log(allPathsSourceTarget(graph))

// Recursive Way
var allPathsSourceTargetR = function (graph) {

    const target = graph.length - 1

    const dfs = (start, path) => {
        if (start === target) {
            result.push(path)
        }

        for (let node of graph[start]) {
            let newPath = [...path]
            newPath.push(node)
            dfs(node, newPath)
        }
    }

    const result = []
    let path = [0]
    dfs(0, path)
    return result
};
