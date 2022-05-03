function activitySelection(startTimeArray, endTimeArray,) {
    let i = 0

    let activity = []

    // always pushing the first one
    activity.push(0)


    for (let j = 1; j < startTimeArray.length; j++) {
        if (startTimeArray[j] >= endTimeArray[i]) {
            activity.push(j)
            i = j
        }
    }

    console.log(activity)
}

const startTimeArray = [1, 3, 0, 5, 8, 5]
const endTimeArray = [2, 4, 6, 7, 9, 9]

activitySelection(startTimeArray, endTimeArray)