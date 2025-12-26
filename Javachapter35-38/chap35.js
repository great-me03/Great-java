// Chapter : 35-38
// Function to display current date and time
function displayDateTime() {
    var now = new Date();
    document.write("Current date and time: " + now + "<br><br>");
}
displayDateTime();

// Function to greet user with full name
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    document.write("Hello, " + fullName + "! Welcome!<br><br>");
}
greetUser("John", "Doe");

// Function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}
var sum = addNumbers(5, 10);
document.write("Sum of 5 and 10 is: " + sum + "<br><br>");
// Function to perform calculator operations
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}
document.write("5 + 3 = " + calculator(5, 3, "+") + "<br>");
document.write("5 - 3 = " + calculator(5, 3, "-") + "<br>");
document.write("5 * 3 = " + calculator(5, 3, "*") + "<br>");
document.write("5 / 3 = " + calculator(5, 3, "/") + "<br>");
document.write("<br>");
// Function to square a number
function squareNumber(num) {
    return num * num;
}
document.write("Square of 4 is: " + squareNumber(4) + "<br><br>");
// Function to calculate factorial
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
document.write("Factorial of 5 is: " + factorial(5) + "<br><br>");
// Function to display counting between two numbers
function displayCounting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + " ");
    }
    document.write("<br><br>");
}
displayCounting(1, 10);
// Function to calculate hypotenuse
function calculateHypotenuse(base, perpendicular) {
    function square(num) {
        return num * num;
    }

    return Math.sqrt(square(base) + square(perpendicular));
}
document.write("Hypotenuse of a right triangle with base 3 and perpendicular 4 is: " + calculateHypotenuse(3, 4) + "<br><br>");
// Function to calculate area of rectangle
function calculateArea(width, height) {
    return width * height;
}
document.write("Area of rectangle with width 5 and height 10 is: " + calculateArea(5, 10) + "<br><br>");
// Function to check if a string is a palindrome
function isPalindrome(str) {
    var cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
var testString = "madam";
document.write("Is '" + testString + "' a palindrome? " + isPalindrome(testString) + "<br><br>");
// Function to convert first letter of each word to uppercase
function toTitleCase(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
}
var sampleString = "hello world from javascript";
document.write("Title Case: " + toTitleCase(sampleString) + "<br><br>");
// Function to find the longest word in a string
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}
document.write("Longest word in 'JavaScript is awesome': " + findLongestWord("JavaScript is awesome") + "<br><br>");
// Function to count occurrences of a letter in a string
function countLetterOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}
var sampleText = "JavaScript is a versatile language";
var letterToCount = "a";
document.write("Occurrences of letter '" + letterToCount + "' in the string: " + countLetterOccurrences(sampleText, letterToCount) + "<br><br>");
// Count Letter Occurrences
function countLetter(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

// Example
var result = countLetter("JSResourceS.com", "o");
document.write("Occurrences: " + result);
document.write("<br><br>");
// Function to calculate circumference and area of a circle
function calculateCircleMetrics(radius) {
    var circumference = 2 * Math.PI * radius;
    var area = Math.PI * radius * radius;
    return {
        circumference: circumference,
        area: area
    };
}
var radius = 5;
var circleMetrics = calculateCircleMetrics(radius);
document.write("For a circle with radius " + radius + ":<br>");
document.write("Circumference: " + circleMetrics.circumference + "<br>");
document.write("Area: " + circleMetrics.area + "<br>");
