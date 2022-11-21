const read = require('readline-sync');
var arr1 = []
var arr2 = []
console.log("Enter the Fair :");
for (let i = 0; i < 5; i++) {
    const input = parseInt(read.question(' '));
    arr1.push(input)
    
}
console.log(arr1)

console.log("Enter the destination :");
for (let i = 0; i < 5; i++) {
    const input = read.question(' ')
    arr2.push(input)
    
}
console.log(arr2)

var n = parseInt(read.question('Enter the No. : '))

console.log(arr1[n],arr2[n]);
