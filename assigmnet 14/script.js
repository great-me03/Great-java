var a = prompt("Enter your City name:");
if (a === "Karachi") {
    alert("Welcome to city of lights")
}

var b = prompt("What is your gender?");
if (b === "male"){
    alert("Good Morning sir")
}
if ( b === "female"){
    alert('Good Morning Ma\'am')
}

// traffic signal
var signal = prompt("Enter your signal color:");
if (signal === "Red"){
    alert("Must stop")
}
if (signal === "Yellow"){
    alert("Ready to move")
}
if (signal === "Green"){
    alert("Move now")
}

// fuel check
var fuel = prompt("Enter remaining fuel in car (in litres):");
if (fuel <0.25){
    alert("Please refill the fuel in your car")
}

var a = 4;
if (++a ===5){
    alert("given condition for variable a is true")
}

var b = 83;
if (b++ ===83){
    alert("given condition for variable b is true")
}

var c = 12;
if (c++ ===13){
    alert("condition 1 is true")
}
if (c ===13){
    alert("condition 2 is true")
}
if (++c < 14){
    alert("condition 3 is true")
}
if (c ===14){
    alert("condition 4 is true")
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if  (totalCost === laborCost + materialCost){
    alert("The cost equals")
}
if (true){
    alert("True")
}
if (false){
    alert("False")
}
if ("car" < "cat"){
    alert("car is smaller than cat")
}

var sub1 ="80" +prompt("Enter marks obtained in subject 1:");
var sub2 ="70" +prompt("Enter marks obtained in subject 2:");
var sub3 ="69" +prompt("Enter marks obtained in subject 3:");
var totalMarks = 300;
var grade = "B";
var remarks = "You need to improve";
var obtainedMarks = parseInt(sub1) + parseInt(sub2) + parseInt(sub3);
var percentage = (obtainedMarks / totalMarks) * 100;
var grade, remarks;
if (percentage >= 80){
    alert("Grade: A-one\n Remarks: Excellent")
}
else if (percentage >= 70){
    alert("Grade: A\n Remarks: Good")
}
else if (percentage >= 60){
    alert("Grade: B\n Remarks: You need to improve")
}
else if (percentage < 60) {
    alert("Grade: Fail\n Remarks: Sorry")
}
document.write("<h1>Marks Sheet</h1>" + "<br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%" + "<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

var secretNumber = 7;
var userGuess = prompt("guess the secret number (between 1 and 10):");
if (parseInt(userGuess) === secretNumber){
    alert("Bingo! Correct answer")
}
else if (8){
    alert("Close enough to the correct answer")
}

var number = prompt("Enter a number to check if it is divisible by 3:");
if (number % 3 === 0){
    alert(number + " is divisible by 3")
}
 var number = prompt("Enter a number to check if it is even or odd:");
 if ( number % 2 === 0){
    alert(number + " is even")
 }
 else{
    alert(number + " is  odd")
 }

var temperature = prompt("Enter the temperature:");
if (temperature > 40){
    alert("It is too hot outside.")
}
else if (temperature > 30 ){
    alert("The Weather today is normal.")
}
else if ("temperature > 20"){
    alert("Today's Weather is cool.")
}
else if (temperature > 10){
    alert("OMG! Today's Weather is so cool.")
}
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var operation = prompt("Enter operation (+,-,*,/, %):");
var result;

if (operation === "+"){
    result = num1 + num2;
}
else if (operation === "-"){
    result = num1 - num2;
}
else if (operation === "*"){
    result = num1 * num2;
}
else if (operation === "/"){
    result = num1 / num2;
}
else if (operation === "%"){
    result = num1 % num2;
}
else{
    result = "Invalid operation";
}

alert("Result: " + num1 + " " + operation + " " + num2 + " = " + result);
document.write("<h2>Result: " + num1 + " " + operation + " " + num2 + " = " + result + "</h2>");