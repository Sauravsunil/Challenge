const read = require('readline-sync');
var arr = []
var c = 0
console.log("Enter the name:");
for (let i = 0; i < 10; i++) {
    const input = read.question(' ')
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

var input = read.question('Enter the name to be searched : ');
arr.forEach((data)=>{
    if (data==input) {
        console.log("The searched name is : "+data);
        
    }
})
console.log('length of each name :');
arr.forEach((data)=>{
    console.log(data.length);
})

console.log('Split name :');
arr.forEach((data)=>{
    console.log(data.split(' '));
})


console.log("Duplicate elements are:")
var dup = []
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









