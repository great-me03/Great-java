// Question 1
function power(a, b) {
  var result = 1;
  for (var i = 1; i <= b; i++) {
    result = result * a;
  }
  return result;
}

console.log(power(2, 3)); 

// Question 2
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}

console.log(isLeapYear(2020));

// Question 3
function calculateS(a, b, c) {
  return (a + b + c) / 2;
}
function triangleArea(a, b, c) {
  var S = calculateS(a, b, c);
  return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}

console.log(triangleArea(5, 6, 7));

// Question 4
function average(m1, m2, m3) {
  return (m1 + m2 + m3) / 3;
}

function percentage(m1, m2, m3) {
  return ((m1 + m2 + m3) / 300) * 100;
}

function mainFunction(m1, m2, m3) {
  console.log("Average: " + average(m1, m2, m3));
  console.log("Percentage: " + percentage(m1, m2, m3) + "%");
}

mainFunction(80, 75, 90);

// Question 5
function customIndexOf(str, char) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}

console.log(customIndexOf("JavaScript", "S"));

// Question 6
function removeVowels(sentence) {
  return sentence.replace(/[aeiouAEIOU]/g, "");
}

console.log(removeVowels("JavaScript is fun"));

// Question 7
function countDoubleVowels(text) {
  var count = 0;
  for (var i = 0; i < text.length - 1; i++) {
    var pair = text[i] + text[i + 1];

    switch (pair) {
      case "aa": case "ae": case "ai": case "ao": case "au":
      case "ea": case "ee": case "ei": case "eo": case "eu":
      case "ia": case "ie": case "ii": case "io": case "iu":
      case "oa": case "oe": case "oi": case "oo": case "ou":
      case "ua": case "ue": case "ui": case "uo": case "uu":
        count++;
    }
  }
  return count;
}

console.log(countDoubleVowels("Pleases read this application"));

// Question 8
function meters(km) {
  return km * 1000;
}
function feet(km) {
  return km * 3280.84;
}
function inches(km) {
  return km * 39370.1;
}
function centimeters(km) {
  return km * 100000;
}

var distance = 5;
console.log(meters(distance));
console.log(feet(distance));
console.log(inches(distance));
console.log(centimeters(distance));

// Question 9
function overtimePay(hours) {
  if (hours > 40) {
    return (hours - 40) * 12;
  } else {
    return 0;
  }
}

console.log(overtimePay(45));

// Question 10
function currencyNotes(amount) {
  var hundreds = Math.floor(amount / 100);
  amount %= 100;

  var fifties = Math.floor(amount / 50);
  amount %= 50;

  var tens = Math.floor(amount / 10);

  console.log("100 notes: " + hundreds);
  console.log("50 notes: " + fifties);
  console.log("10 notes: " + tens);
}

currencyNotes(880);

// Events

// Question 1
function showAlert() {
  alert("Link clicked!");
}

// Question 2
function mobileAlert() {
  alert("Thanks for purchasing a mobile from us!");
}

// Question 3
function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.remove();
}

// Question 4
 function changeImage() {
        document.getElementById("myImage").src ="https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_1280.jpg" ;
    }

    function resetImage() {
        document.getElementById("myImage").src = "https://w0.peakpx.com/wallpaper/882/76/HD-wallpaper-beautiful-tiger-handsome-tiger-wild-animal.jpg";
    }

// Question 5
var count = 0;

function increase() {
  count++;
  document.getElementById("counter").innerText = count;
}

function decrease() {
  count--;
  document.getElementById("counter").innerText = count;
}