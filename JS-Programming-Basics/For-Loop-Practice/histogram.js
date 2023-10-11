function histogram(input) {
    let numCount = Number(input[0]);

    let percent1 = 0;
    let percent2 = 0;
    let percent3 = 0;
    let percent4 = 0;
    let percent5 = 0;
    
    for (let i = 1; i < numCount + 1; i++) {
        let currentNum = Number(input[i]);

        if (currentNum < 200) {
            percent1++;
        } else if (currentNum <= 399) {
            percent2++;
        } else if (currentNum <= 599) {
            percent3++;
        } else if (currentNum <= 799) {
            percent4++;
        } else if (currentNum >= 800) {
            percent5++;
        }
    }
     console.log(`${((percent1 / numCount) * 100).toFixed(2)}%`);
     console.log(`${((percent2 / numCount) * 100).toFixed(2)}%`);
     console.log(`${((percent3 / numCount) * 100).toFixed(2)}%`);
     console.log(`${((percent4 / numCount) * 100).toFixed(2)}%`);
     console.log(`${((percent5 / numCount) * 100).toFixed(2)}%`);
}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);