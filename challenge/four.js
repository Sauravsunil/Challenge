const read = require('readline-sync');
var DOB = read.question('Enter the DOB in dd/mm/yy format :')
var year = parseInt(read.question('Enter the current year :'))

DOB = DOB.split('/')
console.log("Year of birth : " + DOB[2]);

var age = parseInt(year - DOB[2]);
console.log( "Age in years : " + age)

var age = parseInt((year - DOB[2])*12)
console.log("Age in months : " + age)

var age = parseInt(((year - DOB[2])*12)*4)
console.log("Age in weeks : " + age)

var age = parseInt((((year - DOB[2])*12)*4)*7)
console.log("Age in days : " + age)

var age = parseInt(((((year - DOB[2])*12)*4)*7)*24)
console.log("Age in hours : " + age)

if (parseInt((0 == DOB[2] % 4) && (0 != DOB[2] % 100) || (0 == DOB[2] % 400))) {
    console.log(DOB[2] + ' is a leap year');
} else {
    console.log(DOB[2]+ ' is not a leap year');
}




