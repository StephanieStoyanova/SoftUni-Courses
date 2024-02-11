function cars(commands) {
    let objects = {};

    for (let command of commands) {
        let [action, ...parts] = command.split(" ");

        if (action === "create") {
            let name = parts[0];
            let keyword = parts[1];

            if (keyword === "inherit") {
                let parentName = parts[2];
                objects[name] = Object.create(objects[parentName]);
            } else {
                objects[name] = {};
            }
        } else if (action === "set") {
            let name = parts[0];
            let key = parts[1];
            let value = parts[2];
            objects[name][key] = value;
        } else if (action === "print") {
            let name = parts[0];
            let output = [];
            let currObj = objects[name];

            while(currObj) {
                let entries = Object.entries(currObj).map(([key, value]) => `${key}:${value}`);
                output.push(...entries);
                currObj = Object.getPrototypeOf(currObj);
            }
            console.log(output.join(','));
        }
    }  
}

cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']);

cars(['create pesho',
'create gosho inherit pesho',
'create stamat inherit gosho',
'set pesho rank number1',
'set gosho nick goshko',
'print stamat']);