const read = require('readline-sync');
var fair = parseInt(read.question('Enter the Fair:'))
var bookingTime = parseInt(read.question('Enter the Time in 24 hour format :'))
var time = [23, 0, 1, 2, 3, 4, 5]

if (bookingTime >= 6 && bookingTime < 9) {
    var inc = (fair*10)/100
    console.log("Total fair : " +inc+fair);
}

else if (bookingTime >= 9 && bookingTime < 17) {
    var inc = (fair*20)/100
    console.log("Total fair : " +inc+fair);
}

else if (bookingTime >= 17 && bookingTime < 23) {
    var inc = (fair*7)/100
    console.log("Total fair : " +inc+fair);
}

else if (time.includes(bookingTime)){
    var inc = (fair*5)/100
    console.log("Total fair : " +inc+fair);
}

