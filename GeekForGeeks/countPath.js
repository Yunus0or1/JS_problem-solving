// let V;

// // Array of lists for
// // Adjacency List
// // Representation
// let adj;

// function Graph(v) {
//     V = v;
//     adj = new Array(v);
//     for (let i = 0; i < v; ++i)
//         adj[i] = [];
// }

// // Method to add an edge into the graph
// function addEdge(v, w) {
//     // Add w to v's list.
//     adj[v].push(w);
// }

// // A recursive method to count
// // all paths from 'u' to 'd'.
// function countpathsUtil(u, d, pathCount) {
//     // If current vertex is same as
//     // destination, then increment count
//     if (u == d) {
//         pathCount++;
//     }

//     // Recur for all the vertices
//     // adjacent to this vertex
//     else {
//         for (let i = 0; i < adj[u].length; i++) {
//             let n = adj[u][i];
//             pathCount = countpathsUtil(n, d, pathCount);
//         }
//     }
//     return pathCount;
// }

// // Returns count of
// // paths from 's' to 'd'
// function countpaths(s, d) {
//     // Call the recursive method
//     // to count all paths
//     let pathCount = 0;
//     pathCount = countpathsUtil(s, d,
//         pathCount);
//     return pathCount;
// }

// // Driver Code
// Graph(5);
// addEdge(0, 1);
// addEdge(0, 2);
// addEdge(0, 3);
// addEdge(1, 3);
// addEdge(2, 3);
// addEdge(1, 4);
// addEdge(2, 4);

// console.log(adj)

// let s = 0, d = 3;
// console.log(countpaths(s, d))


// const stack = [start]

// while (stack.length != 0) {
//     const value = stack.pop()
//     if (value === end) {
//         pathCount++
//     } else {
//         for (let node of graph[value]) {
//             stack.push(node)
//         }
//     }
// }

// return pathCount


const countpath = (graph, start, end) => {
    let init = start
    let data = {
        pathCount: 0,
        path: []
    }
    let pathList = []

    const count = (data, start, end) => {
        let newData = { ...data }

        if (start == end) {
            newData.pathCount = newData.pathCount + 1
            return newData
        } else {
            for (let node of graph[start]) {
                let currentData = count(newData, node, end)

                if (currentData.pathCount > newData.pathCount) {
                    currentData.path.push(node)
                    newData = currentData
                }

                if (start === init) {
                    newData.path.push(init)
                    pathList.push(newData.path)
                    newData.path = []
                }
            }
        }
        return newData
    }

    count(data, start, end)
    return pathList
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












