const read = require('readline-sync');
var arr = []
var c = 0
console.log("Enter the fair :");
for (let i = 0; i < 10; i++) {
    const input = parseInt(read.question(' '))
    arr.push(input)
    
}
console.log(arr)

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if(arr[i]<arr[j]){
            t = arr[i]
            arr[i] = arr[j] 
            arr[j] = t
        }

    }

}
console.log("Ascending order:" + arr)

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if(arr[i]>arr[j]){
            t = arr[i]
            arr[i] = arr[j] 
            arr[j] = t
        }

    }

}
console.log("Descending order:" + arr)

var input = read.question('Enter the fair to be searched : ');
arr.forEach((data)=>{
    if (data==input) {
        console.log("The searched fair is : "+data);
    }
})

var min = arr[0]
arr.forEach((data)=>{
    if (data<min) {
        min = data
    }
})
console.log("Minimum value is : " + min)


var max = arr[0]
arr.forEach((data)=>{
    if (data>max) {
        max = data
    }
})
console.log("Maximum value is : " + max)

console.log("Duplicate elements are:")
var dup = [ ]
for(i=0;i<10;i++){
    for(j=i+1;j<10;j++)
    {
        if(arr[i]==arr[j])
        {
            c++
        }
    }
    if(c>0 && !(dup.includes(arr[i])))
        {
            dup.push(arr[i])
        }
    c=0
}
console.log(dup)