function pascalCaseSplitter(inputString) {
    let words = inputString.split(/(?=[A-Z])/).join(', ');

    console.log(words);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');