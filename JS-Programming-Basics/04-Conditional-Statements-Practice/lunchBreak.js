function lunchBreak(input) {
    let seriesName = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchBreakTime = (1/8) * breakTime;
    let calmTime = (1/4) * breakTime;

    let totalBreakTime = lunchBreakTime + calmTime;
    let breakTimeLeft = breakTime - totalBreakTime;

    if (breakTimeLeft >= episodeTime) {
       let timeLeft = breakTimeLeft - episodeTime;
       console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft)} minutes free time.`)
    } else if (breakTimeLeft < episodeTime) {
       let timeNeeded = episodeTime - breakTimeLeft;
       console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }
 }

lunchBreak(["Game of Thrones", "60", "96"]);