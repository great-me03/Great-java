       // 1
var   studentNames     =        [];




// 2
                 var    studentNames2     =     new Array();





// 3
var   stringsArr=
["apple"  ,  "banana",
"cat"     ];






//        4
var 
numArr = [  1 ,   4,
9 ,22 ];




// 5
var
boolArr=[true,
false , true    ];






// 6
var mixArr=[
"bilal"   ,55,
 true ,  "ok"
];





// 7 qualification list


var eduPak=[
 "SSC",
"HSC" ,
 "BCS",
"BS",
 "BCOM",
"MS",
"M.Phil",
         "PhD"
];

document.write("<h2>Qualifications in Pakistan:</h2>");

for
(
var i =0;
i<
eduPak.length
;i++   ){


document.write(
(i+1)+") "
+ eduPak[i] +"<br>"
);

}






// 8  students + scores



var stdNames=["Ali" ,
"Sara",
       "John"];

var     stdScores=[
400,
350,     450          ];

var tMarks=500;

document.write("<hr><h3>Students Scores</h3>");

for(   var x=0;   x<stdNames.length
;    x++
)
{

    var        per=(stdScores[x]  /  tMarks   )  *100;

document.write(
stdNames[x]
 +" scored "
+ stdScores[x]
 +" out of "
+tMarks+
 " — "+ per +"%<br>"
);
}







// 9 colors

var colors=[
"Red",
"Blue",
         "Green"
];


document.write(
"<h3>Colors: </h3>"
+colors+
"<br><br>"
);





var addBeg = prompt("Color add beginning?");
colors.unshift(    addBeg    );
document.write(colors+"<br>");



var addEnd  =
prompt("Color add end?");
colors.push(
addEnd
);
document.write(colors+"<br>");





colors.unshift(
"Purple",
          "Brown"
);
document.write(colors+"<br>");

colors.shift();  
document.write(colors+"<br>");

colors.pop();
document.write(colors+"<br>");





var idx =
+prompt("Index?");
var colr=prompt("Color?");
colors.splice(
idx ,0 ,colr 
);
document.write(colors+"<br>");



var delIndex=+prompt("Index delete?");
var delHowMany=+prompt("How many?");
colors.splice(
 delIndex  ,
   delHowMany
);
document.write(colors+"<br><br>");








// 10 sort

var   sc =[
320,
230,    480,
 120 ];

document.write("<h3>Scores before sort: "+sc+"</h3>");

sc.sort(   );
document.write("After sort: "+sc+"<br><br>");







// 11 cities

var cities=[
"Karachi",
"Lahore",
   "Islamabad",
"Quetta" ,
"Peshawar"
];

var selectedCities=
[];


selectedCities =
cities.slice(
1 ,
         4);

document.write("Cities: "+cities+"<br>");
document.write("Selected: "+selectedCities+"<br><br>");








// 12 join

var arr=["This ",
" is "
," my ",
" cat"];

var sentence =
arr.join(
""
);

document.write("<h3>Join Result:</h3>"
+sentence+
"<br><br>");








// 13 FIFO


var fifo=[];

fifo.push("Keyboard");
fifo.push(
"Mouse");
fifo.push("Printer"
);
fifo.push(
"Monitor");


document.write("<h3>FIFO:</h3>");

document.write(
fifo.shift()+"<br>"
);
document.write(
fifo.shift()+"<br>"
);
document.write(
fifo.shift()+"<br>"
);
document.write(
fifo.shift()+"<br><br>"
);






// 14 LIFO


var lifo =[];

lifo.push(
"Keyboard"
);
lifo.push("Mouse");
lifo.push(
"Printer");
lifo.push("Monitor"
);

document.write("<h3>LIFO:</h3>");

document.write(lifo.pop()+"<br>");
document.write(lifo.pop()+"<br>");
document.write(lifo.pop()+"<br>");
document.write(lifo.pop()+"<br><br>");








// 15 dropdown

var phones=[
"Apple" ,
"Samsung", "Motorola",
"Nokia",
"Sony",
 "Haier"
];

document.write("<select>");
for(
var a =0 ; a<phones.length
;a++ ){


document.write(
"<option>"+phones[a]+"</option>"
);


}
document.write("</select>");