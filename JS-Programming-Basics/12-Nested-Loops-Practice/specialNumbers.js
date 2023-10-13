function specialNumbers(input) {
    let num = Number(input[0]);

    let result = "";

    for (let currNum = 1111; currNum <= 9999; currNum++) {
        let currNumAsString = currNum.toString();
        let isSpecial = true;
        

        for (let i = 0; i < currNumAsString.length; i++){
            let currDigit = Number(currNumAsString[i]);
            if (num % currDigit !== 0) {
                isSpecial = false;
                break;
            } 

        }
         if (isSpecial) {
            result += `${currNumAsString} `
            }
        
    }
    console.log(result)

}

specialNumbers(["3"]);