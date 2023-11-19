function meetings(arr) {
    let weekMeetings = {};

    for (let item of arr) {
        let [day, name] = item.split(" ");

        if (day in weekMeetings) {
            console.log(`Conflict on ${day}!`);
            continue;
        }

        weekMeetings[day] = name;

        console.log(`Scheduled for ${day}`);
    }

    for (let entry of Object.entries(weekMeetings)) {
        console.log(entry.join(" -> "));
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);