function equalSums(arr) {
    let leftNumSum = 0;
    let rightNumSum = 0;
    let isEqual = false;
 
    for (let currIndex = 0; currIndex < arr.length; currIndex++) {
        for (let i = 0; i < arr.length; i++) {
 
            if (i !== currIndex) {
                let num = Number(arr[i]);
                if (i < currIndex) {
                    leftNumSum += num;
                } else if (i > currIndex) {
                    rightNumSum += num
                }
            }

            if (currIndex === 0 && i === 0) {
            rightNumSum = 0;
        } else if (currIndex === arr.length - 1) {
            rightNumSum = 0;
        }
    }

        if(leftNumSum === rightNumSum){
            console.log(currIndex)
            isEqual = true;
        }else{
            leftNumSum = 0;
            rightNumSum= 0;
        }
    }

    if(!isEqual){
        console.log(`no`);
    }
}

equalSums([1, 2, 3, 3]);