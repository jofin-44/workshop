function equation(val){
document.getElementById("txt").value+=val;
}

function calculation(val){
var a=document.getElementById(txt).value;
var c=eval(a)
document.getElementById("txt").value(c);
}

function clear(val){
document.getElementById("txt").value=" ";
}