function listProcessor(input) {
    let result = [];

    const processor = {
        add: function(str) {
            result.push(str);
        },
        remove: function(str) {
            result = result.filter(el => el !== str);
        },
        print: function() {
            console.log(result.join(','));
        }
    };

    input.forEach(token => {
        let [command, value] = token.split(" ");
        processor[command](value);
    })
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);