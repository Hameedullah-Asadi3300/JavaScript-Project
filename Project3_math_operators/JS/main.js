

//ADDITION OPERATOR
function myFirstFunction() {
	var plus = 100 + 100;
	document.getElementById("math").innerHTML = "100 + 100 =" + plus;
}
//SUBTRACTION OPERATOR
function mySecondFunction() {
    var assignment = 50 - 100;
    document.getElementById("subtraction").innerHTML = "50 - 100 =" + assignment;
}
//MULTILIPCATION OPERATOR
function myThirdFunction() {
    var multiplication = 10 * 10;
    document.getElementById("project").innerHTML = "10 * 10 =" + multiplication;
}
//DIVISION OPERATOR
function myFourthFunction() {
    var division = 100 / 10;
    document.getElementById("operation").innerHTML = "100 / 10 =" + division;
}
//MODULUS OPERATOR
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("home").innerHTML = "When you divide 25 by 6, you have a remainder of: " + simple_Math;
}
//UNARY OPERATOR
function unary_operator() {
    var unary = 10;
    document.getElementById("super").innerHTML = - unary;
}
//INCREMENT
function increment() {
    var x = document.getElementById("increase").innerHTML;
    x++;
    document.getElementById("increase").innerHTML = x;
}
//DECREMENT
function decrement() {
    var x = document.getElementById("decrease").innerHTML;
    x--;
    document.getElementById("decrease").innerHTML = x;
}
//RANDOM NUMBER BETWEEN 0 AND 1
window.alert(Math.random());


//RANDOM NUMBER BETWEEN 0 AND 100
window.alert(Math.random() * 100);




