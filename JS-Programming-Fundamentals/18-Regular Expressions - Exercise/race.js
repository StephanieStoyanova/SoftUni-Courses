function race(input) {
    let participants = input.shift().split(", ");
    let command = input.shift();

    let results = {};

    participants.forEach(participant => results[participant] = 0);

    let letterPattern = /[a-z]/gi;
    let digitPattern = /\d/g;

    while (command != "end of race") {
        let letterMatches = command.match(letterPattern);
        let name = letterMatches.join("");

        let digitMatches = command.match(digitPattern);
        let distance = digitMatches.map(Number).reduce((acc, val) => acc + val);

        if (name in results) {
            results[name] += distance;
        }

        command = input.shift();
    }

    let sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]);


    console.log(`1st place: ${sortedResults[0][0]}`);
    console.log(`2nd place: ${sortedResults[1][0]}`);
    console.log(`3rd place: ${sortedResults[2][0]}`);

}

race([
'George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'
]);

race([
'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'
]);