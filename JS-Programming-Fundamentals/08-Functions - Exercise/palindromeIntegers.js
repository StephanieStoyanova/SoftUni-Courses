function palindromeIntegers(arr) {
    for (let currNum of arr) {
        let isPalindrome = checkIsPalindrome(currNum);
        console.log(isPalindrome);
    }

    function checkIsPalindrome(num) {
        let numStr = String(num);
        let reversedNumStr = "";

        for (let i = numStr.length - 1; i >= 0; i--) {
            let currChar = numStr[i];
            reversedNumStr += currChar;
        }

        let isPalindrome = numStr == reversedNumStr;
        return isPalindrome;
    }
}

palindromeIntegers([123,323,421,121]);
//palindromeIntegers([32,2,232,1010]);