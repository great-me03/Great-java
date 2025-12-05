// Question 1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");
document.write("<br>")

// Question 2
var favPhone = prompt("Enter your favorite phone model:");
var length = favPhone.length;
document.write("My Fvaorite phone is : " + favPhone + "<br>");
document.write("Length of string is : " + length + "<br>")
document.write("<br>")
// Question 3
var word = "Pakistani";
var index = word.indexOf("n");
document.write("String : " + word + "<br>");
document.write("Index of  ' n ' : " + index + "<br>");
document.write("<br>")
// Question 4

var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
document.write("String : " + word + "<br>");
document.write("Last Index of  ' l ' : " + lastIndex + "<br>")
document.write("<br>")
// Question 5
var word = "Pakistani";
var char = word.charAt(3);
document.write("string : " + word + "<br>");
document.write("Character at index 3 : " + char + "<br>");
document.write("<br>")
// Question 6
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello," + fullName + " ! ") 
document.write("<br>")
// Question 7
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City : " + city + "<br>");
document.write("After replacement : " + newCity + "<br>");
document.write("<br>")
// Question 8
var message = "Ali and Sami are best freinds. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("Before replacement : "  + message + "<br>");
document.write("After replacement : " + newMessage + "<br>");
document.write("<br>")
// Question 9
var str = "472";
var num = Number(str);
document.write("Value : " + str + "<br>");
document.write("Type : " + typeof str + "<br>");
document.write("Value : " + num + "<br>");
document.write("Type : " + typeof num + "<br>");
document.write("<br>")
// Question 10
var userInput = prompt("Enter any word:");
var upperCase = userInput.toUpperCase();
document.write("User input : " + userInput + "<br>");
document.write("Upper case :" + upperCase + "<br>");
document.write("<br>")
// Question 11
var userInput = prompt("Enter any word:");
var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLocaleLowerCase();
document.write("User input :" + userInput + "<br>");
document.write("Title case : " + titleCase + "<br>");
document.write("<br>")
// Question 12
var num = 35.36;
var str = num.toString().replace(".", "");
document.write("Number : " + num + "<br>");
document.write("Result : " + str + "<br>");
document.write("<br>")
// Question 13
var userName = prompt("Enter your username:");
var isInvalid = false;
for (var i = 0; i < userName.length; i++){
    var charCode = userName.charCodeAt(i);
    if  (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64){
        isInvalid = true;
        break;
    }
}
if (isInvalid) {
    alert("Please enter a valid username without special characters (! , . @)");
}
else {
    alert("Username is valid." + userName);
}
document.write("<br>")
// Question 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var itemFound = false;
for (var i = 0; i < A.length; i ++){
    if (A[i].toLocaleLowerCase() === userInput.toLocaleLowerCase()){
        itemFound = true;
        alert(userInput + " is available at index " + i + " in our bakery.");
        break;
    }
}
if (itemFound === false){
    alert("We are sorry. " + userInput + " is not available in our bakery.");
}
document.write("<br>")
// Question 15
var password = prompt("Enter your password:");
if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
}
else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    alert("Password should not start with a number.");
}
else {
    var hasAlphabet = false;
    var hasNumber = false;

    for (var i = 0; i < password.length; i++) {
        var code = password.charCodeAt(i);
        if ( (code >= 65 && code <= 90) || (code >= 97 && code <= 122) ) {
            hasAlphabet = true;
        }
        if (code >= 48 && code <= 57) {
            hasNumber = true;
        }
    }
    if (hasAlphabet && hasNumber) {
        alert("Password is valid!");
    } else {
        alert("Password must contain both alphabets and numbers.");
    }
}
document.write("<br>")
// Question 16
var university = "University of Karachi";
var chars = university.split("");
for (var i = 0; i < chars.length; i++){
    document.write(chars[i] + "<br>");
}
document.write("<br>")
// Question 17
var userInput = prompt("Enter any word:");
var lastChar = userInput.charAt(userInput.length - 1);
document.write("User input :" + userInput + "<br>");
document.write("Last character of input : " + lastChar + "<br>");
document.write("<br>")
// Question 18
var str = "The quick brown fox jumps over the lazy dog.";
var count = (str.toLocaleLowerCase().match(/the/g) || []).length;
document.write("Text :" + str + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the' .<br>");