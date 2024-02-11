function solution() {
    let result = '';
    
    return {
        append: function(str) {
            result += str;
        },
        removeStart: function(n) {
            result = result.slice(n);
        },
        removeEnd: function(n) {
            result = result.slice(0, -n);
        },
        print: function() {
            console.log((result));
        }
    }
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();