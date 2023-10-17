function arrayRotation(arr, rotations) {
    let rotated = rotationProcess(arr, rotations);

    function rotationProcess(arr, rotations){
    for (let i = 0; i < rotations; i++) {
        let currNum = arr.shift();
        arr.push(currNum);
    }
    return arr;
    }
    console.log(rotated.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);