const getMotherVertex = () => {
    let allNodes = Object.keys(graph).map((key) => parseInt(key))

    let result = []
    for (let singleNode of allNodes) {
        const stack = [singleNode]
        const visited = new Set()

        while (stack.length != 0) {
            const value = stack.pop()
            visited.add(value)
            const nextNodes = graph[value]

            for (let node of nextNodes) {
                if (!visited.has(node)) {
                    stack.push(node)
                }
            }
        }
        if (visited.size === allNodes.length) {
            result.push(singleNode)
        }
    }

    return result
}

let graph = {
    0: [2, 3],
    1: [0],
    2: [1],
    3: [4],
    4: [],
}

console.log(getMotherVertex(graph))