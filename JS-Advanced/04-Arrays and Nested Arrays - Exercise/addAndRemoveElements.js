function addAndRemoveElements(commands) {
    let result = [];
    let num = 1;

    for (let command of commands) {
        if (command === 'add') {
            result.push(num);
        } else if (command === 'remove') {
            if (result.length > 0) {
                result.pop();
            }
        }
        num++;
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);