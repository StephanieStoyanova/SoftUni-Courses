function cutAndReverse(text) {
    let length = text.length;
    let middle = Math.floor(length / 2);
    let firstHalf = text.slice(0, middle).split("").reverse().join("");
    let secondHalf = text.slice(middle).split("").reverse().join("");
    console.log(firstHalf);
    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');