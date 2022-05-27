var findJudge = function (n, trust) {
    if (n === 1) return n
    const indegree = {}
    const outdegree = {}

    for (let singleTrust of trust) {
        if (singleTrust[1] in indegree) {
            let value = indegree[singleTrust[1]]
            value = value + 1
            indegree[singleTrust[1]] = value
        } else {
            indegree[singleTrust[1]] = 1
        }

        if (singleTrust[0] in outdegree) {
            let value = indegree[singleTrust[0]]
            value = value + 1
            outdegree[singleTrust[0]] = value
        } else {
            outdegree[singleTrust[0]] = 1
        }


    }
    for (key of Object.keys(indegree)) {
        if (indegree[key] === n - 1 && (outdegree[key] === null || outdegree[key] === undefined)) {
            return key
        }
    }

    return -1
};


n = 1, trust = []
console.log(findJudge(n, trust))