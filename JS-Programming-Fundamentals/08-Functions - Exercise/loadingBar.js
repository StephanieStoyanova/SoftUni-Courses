function loadingBar(num) {
    if (num == 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        let output = "";
        for (let i = 0; i < 10; i++) {
            if (i < num / 10) {
                output += "%";
            } else {
                output += ".";
            }
        }
        console.log(`${num}% [${output}]`);
        console.log("Still loading...");
    }
}

loadingBar(30);