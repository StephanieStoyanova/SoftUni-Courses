function division(num) {
    let div = 0;
    if (num % 10 == 0) {;
        div = 10
        console.log(`The number is divisible by ${div}`);
    } else if (num % 7 == 0) {
        div = 7;
        console.log(`The number is divisible by ${div}`);
    } else if (num % 6 == 0) {
        div = 6;
        console.log(`The number is divisible by ${div}`);
    } else if (num % 3 == 0) {
        div = 3;
        console.log(`The number is divisible by ${div}`);
    } else if (num % 2 == 0) {
        div = 2;
        console.log(`The number is divisible by ${div}`);
    } else {
        console.log("Not divisible");
    }
}

division (30);
division (15);
division (12);
division (1643);