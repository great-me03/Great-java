// Q1

var a=3
var b=5
var c=a+b
document.write("Sum of "+a+" and "+b+" is "+c)


// Q2

var a=3
var b=5

var sub=a-b
var mul=a*b
var div=a/b
var mod=a%b

document.write("Subtraction: "+sub+"<br>")
document.write("Multiplication: "+mul+"<br>")
document.write("Division: "+div+"<br>")
document.write("Modulus: "+mod)

// Q3

var a
document.write("Value after variable declaration is: "+a+"<br>")

a=5
document.write("Initial value: "+a+"<br>")

a++
document.write("Value after increment is: "+a+"<br>")

a=a+7
document.write("Value after addition is: "+a+"<br>")

a--
document.write("Value after decrement is: "+a+"<br>")

var rem = a % 3
document.write("The remainder is : "+rem)


// Q4

var ticket=600
var num=5
var total=ticket*num

document.write("Cost of one movie ticket is "+ticket+" PKR<br>")
document.write("Cost of buying "+num+" tickets is "+total+" PKR")



// Q6


var num=4
document.write("Table of "+num+"<br>")
document.write(num+"x1="+(num*1)+"<br>")
document.write(num+"x2="+(num*2)+"<br>")
document.write(num+"x3="+(num*3)+"<br>")
document.write(num+"x4="+(num*4)+"<br>")
document.write(num+"x5="+(num*5)+"<br>")
document.write(num+"x6="+(num*6)+"<br>")
document.write(num+"x7="+(num*7)+"<br>")
document.write(num+"x8="+(num*8)+"<br>")
document.write(num+"x9="+(num*9)+"<br>")
document.write(num+"x10="+(num*10)+"<br>")


// Q7

var item1 = 650
var item2 = 100
var qty1 = 3
var qty2 = 7
var ship = 100

var total = (item1*qty1)+(item2*qty2)+ship

document.write("<h3>Shopping Cart</h3>")
document.write("Price of item 1 is "+item1+"<br>")
document.write("Quantity of item 1 is "+qty1+"<br>")
document.write("Price of item 2 is "+item2+"<br>")
document.write("Quantity of item 2 is "+qty2+"<br>")
document.write("Shipping Charges "+ship+"<br><br>")
document.write("Total cost of your order is "+total)


// Q8

var totalMarks = 980
var marksObtained = 804
var percentage = (marksObtained/totalMarks)*100

document.write("<h3>Marks Sheet</h3>")
document.write("Total Marks: "+totalMarks+"<br>")
document.write("Marks Obtained: "+marksObtained+"<br>")
document.write("Percentage: "+percentage+"%")

// Q9

var usd = 10
var riyal = 25
var totalPKR = (usd*104.80) + (riyal*28)

document.write("<h3>Currency in PKR</h3>")
document.write("Total Currency in PKR: "+totalPKR)

// Q10

var num = 10
var result = ((num + 5) * 10) / 2

document.write("<h3>Arithmetic Result</h3>")
document.write("Initial number: "+num+"<br>")
document.write("Final result: "+result)

// Q11

var currentYear = 2025
var birthYear = 2007
var age1 = currentYear - birthYear
var age2 = age1 - 1

document.write("<h3>Age Calculator</h3>")
document.write("Current Year: "+currentYear+"<br>")
document.write("Birth Year: "+birthYear+"<br>")
document.write("They are either "+age2+" or "+age1+" years old")


// Q12

var radius = 20
var pi = 3.142
var circumference = 2 * pi * radius
var area = pi * radius * radius

document.write("<h3>The Geometrizer</h3>")
document.write("Radius of circle: "+radius+"<br>")
document.write("The circumference is "+circumference+"<br>")
document.write("The area is "+area)


// Q13

var snack = "chocolate chip"
var currentAge = 18
var maxAge = 65
var perDay = 3
var total = (maxAge - currentAge) * 365 * perDay

document.write("<h3>The Lifetime Supply Calculator</h3>")
document.write("Favourite Snack: "+snack+"<br>")
document.write("Current age: "+currentAge+"<br>")
document.write("Estimated Maximum Age: "+maxAge+"<br>")
document.write("Amount of snacks per day: "+perDay+"<br><br>")
document.write("You will need "+total+" "+snack+" to last you until the ripe old age of "+maxAge)

