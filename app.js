


//==============================DATE METHODS=============================================

// 1. Write a program that displays current date and time in
// your browser.

// var rightNow = new Date();
// console.log(rightNow);

// 2. Write a program that alerts the current month in words.
// For example December.
// var month = ["jan","feb","mar","april","may","june","july","aug","sep","oct","nov","dec"];
// var monthRes = rightNow.getMonth();
// console.log("Current Month is " + month[monthRes]);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var rightNow = new Date();
// var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var day  = rightNow.getDay();
// var slicee = week[day].slice(0,3)
// console.log(slicee);

// 4. Write a program that displays a message “It’s Fun day” if
// // its Saturday or Sunday today.

// var rightNow = new Date();
// var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var day  = rightNow.getDay();
// console.log(week[6]);
// console.log(day);
// if (day === 6 || 0) {
//     console.log("its funday");
// } else {
//     console.log("TODAY is " + week[day]);
// }



var rightNow = new Date();
var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(week[rightNow.getDay()]);
var month = ["jan","feb","mar","april","may","june","july","aug","sep","oct","nov","dec"];
console.log(month[rightNow.getMonth()] );
console.log(rightNow.getDate());
console.log(rightNow.getFullYear());
console.log(rightNow.getHours());
console.log(rightNow.getMinutes());
console.log(rightNow.getSeconds());
console.log(rightNow.getMilliseconds());
console.log(rightNow.getTime());


var d = new Date();
d.setFullYear(2000)
console.log(d);
d.setMonth(11)
console.log(d);

const currentDate = new Date();

// Check if the day of the month is less than 16
// if (currentDate.getDate() < 16) {
//     console.log("First fifteen days of the month");
// } else {
//     console.log("Last days of the month");
// }
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// var datee = new Date();

// alert("since 1970 to time is " + currentDate.getTime( ) );
// alert(currentDate.getHours())
// var hourss  = currentDate.getHours()
// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// if (hourss > 12) {
//     alert("PM" )
// } else {
//     alert("AM")
// }


// Create a Date object for the last day of the last month of 2020
// const laterDate = new Date(2020, 11, 31); // Month is 0-indexed (11 = December)

// console.log(laterDate);

// Create a Date object for the starting date of Ramadan (June 18, 2015)
// const ramadanStartDate = new Date(2015 5, 18); // Month is 0-indexed (5 = June)

// Get the current date


// Calculate the time difference in milliseconds
// const timeDifference = currentDate - ramadanStartDate;

// Calculate the number of days passed
// const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Alert the number of days passed
// alert(`Number of days passed since 1st Ramadan: ${daysPassed}`);
// alert( Math.floor(currentDate.getTime()  / (1000 * 60 * 60 * 24)) )

// var firstDate = new Date('2015, 11 5' )
// var res = currentDate -firstDate 
// var seconEclapsed = Math.floor(res/1000)
// alert(seconEclapsed)

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


console.log("this is current date " + currentDate );    
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
console.log("this is ahed of 1 hour ago  " +  currentDate);
// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

currentDate.setFullYear(currentDate.getFullYear() - 100)
console.log(currentDate);
// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
var age = prompt("Please enter your age:");
var currentYear =new Date().getFullYear()
var birthYear = currentYear - age
console.log(birthYear);
