// Q1

var a=2, b=1
var result = --a - --b + ++b + b--
document.write("a is "+a+"<br>")
document.write("b is "+b+"<br>")
document.write("result is "+result)

// Q2

var a=10
document.write("Result:<br>")
document.write("The value of a is: "+a+"<br><br>")

++a
document.write("The value of ++a is: "+a+"<br>")
document.write("Now the value of a is: "+a+"<br><br>")

a++
document.write("The value of a++ is: "+(a-1)+"<br>")
document.write("Now the value of a is: "+a+"<br><br>")

--a
document.write("The value of --a is: "+a+"<br>")
document.write("Now the value of a is: "+a+"<br><br>")

a--
document.write("The value of a-- is: "+(a+1)+"<br>")
document.write("Now the value of a is: "+a)




// Q3
var nme = prompt("Enter ur name plz:")
if(nme){
    alert("Hello " + nme + " ! welcome bro :)")
}else{
    alert("You didn't enter name :(")
}


// Q4
var num = prompt("Enter a number for table:")
if(num == "" || num == null){
    num = 5
}
document.write("<h3>Table of " + num + "</h3>")
for(var i=1;i<=10;i++){
    document.write(num + " x " + i + " = " + (num*i) + "<br>")
}



// Q5
var num = prompt("Enter a number for multiplication table (leave blank for 5):");
if(num === null || num === ""){  // user cancelled ya blank
    num = 5;
}
num = parseInt(num); // convert
if(isNaN(num)){ // agar kuch aur dal diya to 5 rakh lete
    num = 5;
}

document.write("<h2>Multiplication Table of " + num + "</h2>");
document.write("<hr>");
for(var i = 1;i<=10;i++){   // simple loop
    document.write(num + " x " + i + " = " + (num*i) + "<br>");
}


// Q6

var s1=prompt("1st subject name")
var s2=prompt("2nd subject name")
var s3=prompt("3rd subject name")

var t=100

var a=prompt("enter marks for "+s1)
var b=prompt("enter marks for "+s2)
var c=prompt("enter marks for "+s3)

var total=t+t+t
var got=+a+ +b+ +c
var per=(got/total)*100

document.write("<h3>Marks Sheet</h3>")
document.write("<table border=1>")
document.write("<tr><th>Subject</th><th>Total</th><th>Got</th><th>%</th></tr>")
document.write("<tr><td>"+s1+"</td><td>"+t+"</td><td>"+a+"</td><td>"+a+"%</td></tr>")
document.write("<tr><td>"+s2+"</td><td>"+t+"</td><td>"+b+"</td><td>"+b+"%</td></tr>")
document.write("<tr><td>"+s3+"</td><td>"+t+"</td><td>"+c+"</td><td>"+c+"%</td></tr>")
document.write("<tr><td>Total</td><td>"+total+"</td><td>"+got+"</td><td>"+per+"%</td></tr>")
document.write("</table>")


