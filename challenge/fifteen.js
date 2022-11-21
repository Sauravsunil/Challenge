var read =require('readline-sync')
var arr=[]
var weight=23
var n=read.question('Enter no of passengers:')
console.log("Enter weights:")
for(i=0;i<n;i++)
{
inp=read.question('')
if(inp>23)
{
    arr.push((inp-weight)*15)
}
}
console.log(arr.reverse())


