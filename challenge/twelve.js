const read = require('readline-sync');
var arr1 = []
var arr2 = []
console.log("Enter the name :");
for (let i = 0; i < 5; i++) {
    const input = read.question(' ')
    arr1.push(input)
    
}
console.log(arr1)

console.log("Enter the destination :");
for (let i = 0; i < 5; i++) {
    const input = read.question(' ')
    arr2.push(input)
    
}
console.log(arr2)

const arr3 = arr1.concat(arr2)

console.log(arr3);
