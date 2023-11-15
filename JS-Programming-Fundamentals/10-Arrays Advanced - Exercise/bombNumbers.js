function bombNumbers(nums, bomb) {
    let [bombNum, power] = bomb;

    while (nums.includes(bombNum)) {
        let index = nums.indexOf(bombNum);

        nums.splice(Math.max(0, index - power), power * 2 + 1);
    }

    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
