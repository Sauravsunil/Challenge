const read = require('readline-sync');
var DOB = read.question('Enter the DOB in dd/mm/yy format :')
var year = 2022

DOB = DOB.split('/')
console.log("Year of birth : " + DOB[2]);

const age = parseInt(year - DOB[2]);
console.log( "Passenger age : " + age);

if (age<10) {
    console.log("Passenger is a Kid");
}
else if (age>=10 && age<30) {
    console.log("Passenger is a Youth");
}
else if (age>=30 && age<60) {
    console.log("Passenger is a Adult");
}
else if (age>=60) {
    console.log("Passenger is Older");
}
