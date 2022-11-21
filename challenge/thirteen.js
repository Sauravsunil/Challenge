const read = require('readline-sync');
var arr = []
while (true) {
    console.log('Enter the No. :')
    const input = read.question(' ');
    if (input == 'q') {
        break
    }
    arr.push(input);
}
console.log(arr);

