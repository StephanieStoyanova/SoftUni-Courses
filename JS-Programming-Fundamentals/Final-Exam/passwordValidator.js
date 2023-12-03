function passwordValidator(input) {
    let userPassword = input.shift();
    let command = input.shift();

    while (command != "Complete") {
        if (command.includes("Make Upper")) {
            let index = Number(command.split("Make Upper ")[1]);
            userPassword = userPassword.substring(0, index) + userPassword.charAt(index).toUpperCase() + userPassword.substring(index + 1);
            console.log(userPassword);
        } else if (command.includes("Make Lower")) {
            let index = Number(command.split("Make Lower ")[1]);
            userPassword = userPassword.substring(0, index) + userPassword.charAt(index).toLowerCase() + userPassword.substring(index + 1);
            console.log(userPassword);
        } else if (command.includes("Insert")) {
            let tokens = command.split("Insert ");
            let [index, char] = tokens[1].split(" ");
            index = Number(index);

            if (index >= 0 && index <= userPassword.length) {
                userPassword = userPassword.substring(0, index) + char + userPassword.substring(index);
                console.log(userPassword);
            }
        } else if (command.includes("Replace")) {
            let tokens = command.split("Replace ");
            let [char, value] = tokens[1].split(" ");
            let index = userPassword.indexOf(char)
            value = Number(value);

            if (index !== -1) {
                let newCharAsciiValue = userPassword.charCodeAt(index) + value;
                let newChar = String.fromCharCode(newCharAsciiValue);
                userPassword = userPassword.split(char).join(newChar);
                console.log(userPassword);
            }
        } else if (command == "Validation") {
            if (userPassword.length < 8) {
                console.log("Password must be at least 8 characters long!");
            } 
            if (!/^[a-zA-Z0-9_]+$/.test(userPassword)) {
                console.log("Password must consist only of letters, digits and _!");
            } 
            if (!/[A-Z]/.test(userPassword)) {
                console.log("Password must consist at least one uppercase letter!");
            } 
            if (!/[a-z]/.test(userPassword)) {
                console.log("Password must consist at least one lowercase letter!");
            } 
            if (!/\d/.test(userPassword)) {
                console.log("Password must consist at least one digit!");
            }
        }

        command = input.shift();
    }
}

passwordValidator([
    'invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'
]);

passwordValidator([
    '123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'
]);