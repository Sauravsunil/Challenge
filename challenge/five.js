const read = require('readline-sync');
var arr = []
a = 0
b = 1
console.log("Enter the Fair: ");
for (let i = 0; i < 10; i++) {
    const input = parseInt(read.question(' '))
    if (input%2 == 0) {
        arr[a] = input
        a = a + 2
    }
    else{
        arr[b] = input
        b = b + 2
    }


}
console.log(arr)

