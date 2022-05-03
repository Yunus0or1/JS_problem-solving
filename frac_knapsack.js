function frac_knapsack(data, W) {
    const ratio = []
    for (let singleData of data) {
        singleData.ratio = parseFloat((singleData.val / singleData.wt).toFixed(3))
    }

    data.sort((a, b) => b.ratio - a.ratio)

    console.log(data)
    console.log('-----------------------------------')

    // Total taken weight
    let tw = 0
    let val = 0
    for (let singleData of data) {
        if (tw === W) return

        if (tw + singleData.wt <= W) {
            tw = tw + singleData.wt
            val = val + singleData.val
        } else {
            const remaining = W - tw
            tw = tw + remaining
            val = val + (remaining * singleData.ratio)
        }
    }

    console.log(val)
}

const data = [
    {
        val: 60,
        wt: 10,
    },
    {
        val: 100,
        wt: 20,
    },
    {
        val: 120,
        wt: 30,
    },
]

W = 50

frac_knapsack(data, W)