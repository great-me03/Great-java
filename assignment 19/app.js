



// 1. positive number math methods

let num1 = +prompt( "Enter a positive number" );

document.write( "number : " + num1 + "<br>" );
document.write( "round off : " + Math.round( num1 ) + "<br>" );
document.write( "floor : " + Math.floor( num1 ) + "<br>" );
document.write( "ceil : " + Math.ceil( num1 ) + "<br><br>" );






// 2. negative floating number

let num2 = +prompt( "Enter a negative floating number" );

document.write( "number : " + num2 + "<br>" );
document.write( "round off : " + Math.round( num2 ) + "<br>" );
document.write( "floor : " + Math.floor( num2 ) + "<br>" );
document.write( "ceil : " + Math.ceil( num2 ) + "<br><br>" );






// 3. absolute value

let absNum = +prompt( "Enter any number" );

document.write(
"absolute value of " + absNum + " is " + Math.abs( absNum ) + "<br><br>"
);







// 4. dice simulation

let dice = Math.floor( Math.random() * 6 ) + 1 ;

document.write( "Dice value : " + dice + "<br><br>" );







// 5. coin toss

let toss = Math.floor( Math.random() * 2 );

if ( toss === 0 )
{
document.write( "Coin : Heads <br><br>" );
}
else
{
document.write( "Coin : Tails <br><br>" );
}







// 6. random number 1 to 100

let randNum = Math.floor( Math.random() * 100 ) + 1 ;

document.write( "Random number between 1 and 100 : " + randNum + "<br><br>" );







// 7. weight input parse

let weight = prompt( "Enter your weight" );

let parsedWeight = parseFloat( weight );

document.write(
"Your weight is " + parsedWeight + " kgs <br><br>"
);







// 8. secret number game

let secret = Math.floor( Math.random() * 10 ) + 1 ;

let guess = +prompt( "Guess number between 1 to 10" );

if ( guess === secret )
{
alert( "Congratulations! You guessed it right 🎉" );
}
else
{
alert( "Sorry! Secret number was " + secret );
}







// 1. current date & time
let d = new Date()
document.write( d + "<br><br>" )




// 2. current month in words
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
alert( months[ d.getMonth() ] )




// 3. first 3 letters of day
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let today = days[ d.getDay() ]
alert( today.slice(0,3) )




// 4. Fun day check
if ( d.getDay() == 0 || d.getDay() == 6 )
{
alert("It’s Fun day")
}




// 5. first or last days of month
let dateNum = d.getDate()

if ( dateNum < 16 )
{
document.write("First fifteen days of the month <br><br>")
}
else
{
document.write("Last days of the month <br><br>")
}




// 6. minutes since Jan 1, 1970
timePassed = d.getTime() / (1000 * 60)
document.write("Minutes since Jan 1, 1970 : " + Math.floor(timePassed) + "<br><br>")




// 7. AM or PM
let hrs = d.getHours()

if ( hrs < 12 )
{
alert("Its AM")
}
else
{
alert("Its PM")
}




// 8. last day of last month of 2020
let laterDate = new Date(2020,11,31)
document.write("Later Date : " + laterDate + "<br><br>")




// 9. days passed since 1st Ramadan
let ramadan = new Date("June 18, 2015")
let todayDate = new Date()

let diff = todayDate.getTime() - ramadan.getTime()
let daysPassed = Math.floor( diff / (1000*60*60*24) )

alert( daysPassed + " days have passed since 1st Ramadan" )




// 10. seconds between reference date & beginning of 2015
let refDate = new Date()
let start2015 = new Date("Jan 1, 2015")

let secDiff = ( refDate.getTime() - start2015.getTime() ) / 1000
document.write("Seconds passed since 2015 : " + Math.floor(secDiff) + "<br><br>")




// 11. add 1 hour in current date
let curDate = new Date()
curDate.setHours( curDate.getHours() + 1 )

document.write("Updated date & time : " + curDate + "<br><br>")




// 12. date 100 years back
let oldDate = new Date()
oldDate.setFullYear( oldDate.getFullYear() - 100 )

alert( oldDate )




// 13. age to birth year
let age = +prompt("Enter your age")
let birthYear = d.getFullYear() - age

document.write("Your birth year is " + birthYear + "<br><br>")




// 14. K-Electric Bill
let customerName = "Hilal"
let currentMonth = months[ d.getMonth() ]
let units = 410
let chargesPerUnit = 16

let netAmount = units * chargesPerUnit
let lateCharges = 350
let grossAmount = netAmount + lateCharges

document.write("<h2>K-Electric Bill</h2>")

document.write("Customer Name : " + customerName + "<br>")
document.write("Month : " + currentMonth + "<br>")

document.write("Units : " + units + "<br>")

document.write("Charges per unit : " + chargesPerUnit.toFixed(2) + "<br>")


document.write("Net Amount : " + netAmount.toFixed(2) + "<br>")
document.write("Late Charges : " + lateCharges.toFixed(2) + "<br>")


document.write("Gross Amount : " + grossAmount.toFixed(2))
