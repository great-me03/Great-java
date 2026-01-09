
let scr = document.getElementById("screen")



// number or symbol press
function press(val)
{
if(scr.value=="0")
{
scr.value = val
}
else
{
scr.value += val
}
}



// clear all
function clr()
{
scr.value = "0"
}



// backspace wala
function back()
{
scr.value = scr.value.slice(0,-1)

if(scr.value=="")
{
scr.value="0"
}
}



// calculate
function calc()
{
try
{
scr.value = eval(scr.value)
}
catch(e)
{
alert("wrong input")
}
}



// plus minus
function plusMinus()
{
if(scr.value[0]=="-")
{
scr.value = scr.value.slice(1)
}
else
{
scr.value = "-" + scr.value
}
}
