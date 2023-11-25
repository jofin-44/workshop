function add() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = parseInt(a) + parseInt(b);
    document.getElementById("ans").value = c;
}

function subtract() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = parseInt(a) - parseInt(b);
    document.getElementById("ans").value = c;
}

function multiply() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = parseInt(a) * parseInt(b);
    document.getElementById("ans").value = c;
}

function divide() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = parseInt(a) / parseInt(b);
    document.getElementById("ans").value = c;
}



