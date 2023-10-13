function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    let correctPassword = "";
    let count = 1;

    for (let i = username.length - 1; i >= 0; i--) {
        correctPassword += username[i];
    }

    while (correctPassword !== password) {
        if (count < 4) {
        console.log("Incorrect password. Try again.");
        count++;
        index++;
        password = input[index];
        }
        if (count == 4 && correctPassword !== password) {
            console.log(`User ${username} blocked!`);
            break;
        }
        
    }

    if (correctPassword == password) {
        console.log(`User ${username} logged in.`);
    }
}

// login(['Acer','login','go','let me in','recA']);
//login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
