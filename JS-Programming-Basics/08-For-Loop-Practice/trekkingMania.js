function trekkingMania(input) {
    let groupsCount = Number(input[0]);

    let firstGroupMembers = 0;
    let secondGroupMembers = 0;
    let thirdGroupMembers = 0;
    let fourthGroupMembers = 0;
    let fifthGroupMembers = 0;

    for (let i = 1; i < groupsCount + 1; i++) {
        let groupMembersCount = Number(input[i]);

        if (groupMembersCount <= 5) {
            firstGroupMembers += groupMembersCount;
        } else if (groupMembersCount <= 12) {
            secondGroupMembers += groupMembersCount;
        } else if (groupMembersCount <= 25) {
            thirdGroupMembers += groupMembersCount;
        } else if (groupMembersCount <= 40) {
            fourthGroupMembers += groupMembersCount;
        } else {
            fifthGroupMembers += groupMembersCount;
        }
    } 
    let totalMembersCount = firstGroupMembers + secondGroupMembers + thirdGroupMembers + fourthGroupMembers + fifthGroupMembers;
    let firstGroupPersent = firstGroupMembers / totalMembersCount * 100;
    let secondGroupPersent = secondGroupMembers / totalMembersCount * 100;
    let thirdGroupPresent = thirdGroupMembers / totalMembersCount * 100;
    let fourthGroupPresent = fourthGroupMembers / totalMembersCount * 100;
    let fifthGroupPresent = fifthGroupMembers / totalMembersCount * 100;

    console.log(`${firstGroupPersent.toFixed(2)}%`);
    console.log(`${secondGroupPersent.toFixed(2)}%`);
    console.log(`${thirdGroupPresent.toFixed(2)}%`);
    console.log(`${fourthGroupPresent.toFixed(2)}%`);
    console.log(`${fifthGroupPresent.toFixed(2)}%`);
}

trekkingMania(["5", "25", "41", "31", "250", "6"]);