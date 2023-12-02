function partyTime(input){
    let currentGuest = input.shift();
    let vip = [];
    let regular = [];
    while (currentGuest != "PARTY"){
        let isVIP = isNaN(currentGuest[0]);
        if (isVIP){
            regular.push(currentGuest);
        } else {
            vip.push(currentGuest);
        }
        currentGuest = input.shift();
    }
    
    let allGuests = vip.concat(regular);
    
    for (guest of input){
        allGuests.splice(allGuests.indexOf(guest),1);
    }
    console.log(allGuests.length);
    allGuests.forEach(guest => 
        console.log(guest)
    )
}

partyTime([
'7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);

partyTime([
'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn',
'7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 
'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 
'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', 
'8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 
'PARTY', '2FQZT3uC', 'dziNz78I', 
'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 
'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 
'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', 
'7ugX7bm0', '9CQBGUeJ'
]);