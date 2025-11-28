


//       1.   Empty    Multidimensional Array    
let   emptyArray      =       [   []    ,      []      ];







//   2. Matrix    
let     matrix     =   [
        [0, 1 ,2 ,3]      ,
[1,0,1,2]        ,
            [   2,1,0  ,1]
            ];
console . log   ( "Matrix:"   ,          matrix   );







//     3. Counting 1 to 10

for (
let i=1
;
 i<=10
;
i++
)
{
console.log
(
i
)
}








//    4. Multiplication Table (User Input)

let        num     =    +prompt (   "Table number:"     ) ;
let     len     = +prompt(
"Table length:"
);

for ( let i = 1 ;   i   <=    len   ;   i++ )
{
console
.
log
(
num   +    " x " +     i    +   " = "         + ( num * i )
);
}











//
// 5. Print Fruits Array
//

let fruits =
[
"apple"  ,
     "banana",
"mango",
            "orange" ,
"strawberry"
];

for ( let i = 0 ;
i < fruits . length ;
i++   )
{
console.log
(
fruits[
i]
)
}










//
// 6.     Series
//


// a. Counting
for (let i=1 ;
i<=15 ;
i++      )
{
console.log(i)
}

// b. Reverse Counting
for (let i = 10 ; i>=1 ;
i--      )
{
console.log   (i)
}

// c. Even
for(let i=0 ;i<=20;i+=2)
{ console . log ( i ) }

// d. Odd
for ( let i=1 ; i<=19 ; i+=2 )
{
console.log ( i )
}

// e. Series (2k,4k..)
for ( let i=2;i<=20;i+=2 )
{
console.log(     i   +   "k"     )
}










//
// 7.   Search Item
//

let    A   =   [
"cake","apple pie" ,     "cookie" ,
"chips" ,
"patties"
];

let user =
prompt ( "What do you want to search?" )
            .toLowerCase     ();

let found   =
false;

for ( let i=0;i<A.length;i++ )
{
if ( A[i]   ===   user )
{
found =     true
;
break
}
}

if ( found )
{
alert( user   + " is available" )
}
else
{
alert( user + " is not available" )
}









//
//   8. Largest Number
//

let arr1 =
[
24,
53 ,
78  ,
91 ,
12
];

let largest = arr1[0];

for ( let i=1;i<arr1.length; i++ )
{
if ( arr1[i] >  largest )
{
largest=arr1[i]
}
}

console . log
(
" Largest Number : "   ,
largest
);









//
//   9. Smallest Number
//

let arr2 =   [  24,   53,78,91,12 ];

let smallest   = arr2[0];

for (let i=1;i<arr2.length;i++)
{
if ( arr2[i] < smallest )
smallest = arr2[i]
}

console.log(       "Smallest Number:"   , smallest  );











//
// 10. Multiples of 5 (1–100)
//

for (let i=5 ;
i<=100 ;
 i+=5
)
{
console.log(i)
}
