/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
    let visited = new Set();

    const rowRange = grid.length - 1
    const colRange = grid[0].length - 1

    const dfs = (x, y) => {
        let stack = [[x, y]];
        while (stack.length != 0) {
            const value = stack.pop()
            const i = value[0]
            const j = value[1]

            let key = `${i}_${j}`;
            visited.add(key)

            let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]

            for (let [dr, dc] of dir) {
                key = `${i + dr}_${j + dc}`;
                if (((i + dr >= 0 && i + dr <= rowRange) && (j + dc >= 0 && j + dc <= colRange))
                    && grid[i + dr][j + dc] === "1"
                    && !visited.has(key)) {
                    stack.push([i + dr, j + dc])
                }
            }
        }
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const key = `${i}_${j}`;
            if (grid[i][j] === "1" && !visited.has(key)) {
                dfs(i, j);
                count = count + 1
            }
        }
    }
    return count
};

grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]
console.log(numIslands(grid));
