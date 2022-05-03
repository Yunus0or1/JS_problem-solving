function un_frac_knap(data, W) {
    const ratio = []
    for (let singleData of data) {
        ratio.push(singleData.val / singleData.wt)
    }

    ratio.sort((a, b) => b - a)

    let highestValue= ratio[0] * W
    console.log(highestValue.toFixed(3))

}

const data = [
    {
        val: 14,
        wt: 6,
    },
    {
        val: 27,
        wt: 7,
    },
    {
        val: 44,
        wt: 9,
    },
    {
        val: 19,
        wt: 8,
    },
]

W = 50


un_frac_knap(data, W)