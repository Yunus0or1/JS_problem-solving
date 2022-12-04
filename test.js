function maxPresentations(scheduleStart, scheduleEnd) {
  let data = [];

  for (let i = 0; i < scheduleStart.length; i++) {
    data.push({
      start: scheduleStart[i],
      end: scheduleEnd[i]
    });
  }

  data = data.sort((a, b) => {
    if (a.end > b.end) return 1;
    else if (a.end < b.end) return -1;
    return 0;
  });

  let maxCount = 0;

  for (let i = 0; i < data.length; i++) {}

  console.log(data);
}

scheduleStart = [6, 1, 2, 3];
scheduleEnd = [8, 9, 4, 7];

maxPresentations(scheduleStart, scheduleEnd);
