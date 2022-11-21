const read = require('readline-sync');
var name = read.question('Enter the Name:')
var miles = parseInt(read.question('Enter the total miles travelled :'))
var points = parseInt(read.question('Enter your flyer points : '))

if (miles>=10000 && miles<20000) {
    var flyer =  points + 10
    console.log('Total flyer : ' + flyer)
    
}
else if (miles>=20000 && miles<50000) {
    var flyer =  points + 20
    console.log('Total flyer : ' + flyer)
    
}
else if (miles>=50000 && miles<100000) {
    var flyer =  points + 30
    console.log('Total flyer : ' + flyer)
    
}
else if (miles>=100000) {
    var flyer =  points + 50
    console.log('Total flyer : ' + flyer)
    
}



