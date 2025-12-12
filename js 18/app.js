// chap 1
alert("Welcome to JavaScript!");
var usrNamee = prompt("ur name??");
alert(usrNamee);
var favclr = prompt("fav clr?");
alert(favclr);

// chap 2
var firstNamee="Ali", lastNamee="Khan";
alert(firstNamee+" "+lastNamee);
var cty="Lahore"; alert("You live in "+cty);
var hobbyy="cricket"; alert(hobbyy);

// chap 3
var n1=5,n2=9; alert(n1+n2);
var markks=55; if(markks>=50) alert("Pass"); else alert("Fail");
var agE=19; if(agE>18) alert("above 18");

// chap 4
var ab1="ok",$n="hmm",user_1="y"; alert(ab1+$n+user_1);
alert("illegal: 1a, a-b, @z");
var arrN=["a","b","c"]; alert(arrN);

// chap 5
var aa=3,bb=2; alert(aa+bb); alert(aa-bb);
alert(aa*bb); alert(aa/bb); alert(aa%bb);
var numx=4; numx++; alert(numx);

// chap 6
var xx=8; xx++; xx--; alert(xx);
var yy=5; yy+=3; yy-=1; alert(yy);
var zz=2; zz*=5; zz/=2; alert(zz);

// chap 7
var a=2,b=3,c=4; alert((a+b)*c);
alert(a + b * c - a);
alert(((a+b)-c)*b);

// chap 8
var fn="Ali", ln="Haider"; alert(fn+" "+ln);
alert("hello "+ "karachi");
alert("one"+"two"+"three");

// chap 9
var cl=prompt("clr?"); alert(cl);
var aage=prompt("age?"); alert(aage);
var fruit=prompt("fruit?"); alert(fruit);

// chap 10
var num=11; if(num>10) alert("Number is greater than 10");
var mk=55; if(mk>=50) alert("Pass");
var aag=15; if(aag<18) alert("Minor");

// chap 11
alert(5>3);
if(5==5) alert("equal"); else alert("not eq");
alert(5<=7);

// chap 12
var m=80;
if(m>=90) alert("A"); else if(m>=70) alert("B"); else alert("C");
var ag=13;
if(ag<12) alert("Child"); else if(ag<18) alert("Teen"); else alert("Adult");
var t=25;
if(t>30) alert("Hot"); else if(t>18) alert("Warm"); else alert("Cold");

// chap 13
var nb=6; if(nb>0 && nb%2==0) alert("pos+even");
var mm=77; if(mm>=50 && mm<=100) alert("valid");
var nn=15; if(nn%3==0 && nn%5==0) alert("divisible");

// chap 14
var agee=19, id=true;
if(agee>=18){ if(id) alert("Allowed"); }
var x=4; if(x>0){ if(x%2==0) alert("even"); }
var mmk=55, ex=true; if(mmk>=50){ if(ex) alert("ok"); }

// chap 15
var frts=["a","b","c","d","e"]; alert(frts);
var nums=[1,3,5,7]; alert(nums[0]+" "+nums[3]);
var col=["red","blue","black"]; alert(col);

// chap 16
var f=["a","b"]; f.push("c"); alert(f);
f.pop(); alert(f);
f.unshift("x"); f.shift(); alert(f);

// chap 17
var ar=[1,2,3,4]; ar.splice(1,0,9); alert(ar);
ar.splice(2,1); alert(ar);
var p=ar.slice(1,3); alert(p);

// chap 18
for(var i=1;i<=5;i++) alert(i);
var aArr=["a","b","c"]; for(var j=0;j<aArr.length;j++) alert(aArr[j]);
for(var k=1;k<=10;k++) if(k%2!==0) alert(k);

// chap 19
var ax=[2,4,-1,5];
for(var i1=0;i1<ax.length;i1++){ if(ax[i1]<0){ alert("neg"); break; } }
var a2=[1,2,3]; var flag=false; for(var i2=0;i2<a2.length;i2++){ if(a2[i2]%2==0) flag=true; } alert(flag);
var a3=[10,40,60]; for(var i3=0;i3<a3.length;i3++){ if(a3[i3]>50){ alert("over 50"); break; } }

// chap 20
for(var a1=1;a1<=3;a1++){ for(var b1=1;b1<=5;b1++){ alert(a1*b1); } }
var two=[[1,2],[3,4]];
for(var r=0;r<two.length;r++){ for(var c1=0;c1<two[r].length;c1++){ alert(two[r][c1]); } }
var A=[1,2],B=[3,4];
for(var i4=0;i4<A.length;i4++){ for(var j4=0;j4<B.length;j4++){ alert(A[i4]+B[j4]); } }

// chap 21
var s="hello"; alert(s.toUpperCase());
alert(s.toLowerCase());
alert(s.charAt(0).toUpperCase()+s.slice(1));

// chap 22
var ss="javascript"; alert(ss.length);
alert(ss.slice(0,3));
alert(ss.slice(-3));

// chap 23
var tx="this is test"; alert(tx.indexOf("test"));
alert(tx.lastIndexOf("t"));
alert(tx.includes("is"));

// chap 24
var t2="coding";
alert(t2.charAt(2));
alert(t2[t2.length-1]);
alert(t2.charAt(Math.floor(t2.length/2)));

// chap 25
var line="i love coding";
alert(line.replace("coding","javascript"));
alert(line.replaceAll("o","*"));
alert(line.replace("o","0"));