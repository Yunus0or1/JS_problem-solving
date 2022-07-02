var findCircleNum = function (isConnected) {
    const graph = {}
    for (let i = 0; i < isConnected.length; i++) {
        graph[i] = []
        for (let j = 0; j < isConnected[i].length; j++) {
            if (i === j) continue

            if (isConnected[i][j] === 0) continue

            let value = graph[i]
            value.push(j)
            graph[i] = value
        }
    }


    let visited = []
    for (let i = 0; i < isConnected.length; i++) {
        visited.push(0)
    }

    let i = 0
    let count = 0
    while (i != visited.length) {
        if (visited[i] === 1) {
            i = i + 1
            continue
        }

        let stack = [i]
        while (stack.length != 0) {
            const value = stack.pop()
            visited[value] = 1

            let list = graph[value]
            for (let j = 0; j < list.length; j++) {
                if (visited[list[j]] != 1) {
                    stack.push(list[j])
                }
            }
        }
        if (stack.length === 0) {
            count = count + 1
        }
        i = i + 1
    }

    return count

};

isConnected = isConnected = [[1,0,0],[0,1,0],[0,0,1]]
console.log(findCircleNum(isConnected))