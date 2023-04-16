

//if STATEMENT USING getHours
function my_Time() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}
     //THE END


//if STATEMENT USING getFullYear
function my_Greeting() {
    if (new Date().getFullYear() > 2022) {
        document.getElementById("time").innerHTML = "How is your current year going on?";
    }
}
//THE END




//if (Conditional) Statement
if (10 > 8) {
    document.write("The left number is larger that the right one." + "<br>")
}
//THE END


//else STATMENT only used when the if condition is false
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        vote = "You are old enough to vote!";
    }
    else {
        vote = "You are old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = vote;
}
//THE END



//Global variable
var x = 100;
function global_variable_1() {
    document.write(20 + x + "<br>")
}
    function global_variable_2() {
    document.write(x + 50 + "<br>")
}
global_variable_1();
global_variable_2();



//2ND Global variable
var s = 500;
function Add_number_1() {
    document.write(300 + s + "<br>")
}
    function Add_number_2() {
    document.write(s + 100 + "<br>")
}
Add_number_1();
Add_number_2();




// 1ST Local variable
function my_local_Variable_1() {
    var y = 700;
    document.write(y + 400)
}
function my_local_Variable_2() {
    document.write(y + 200)
}
my_local_Variable_1();
my_local_Variable_2();



// 2ND Local variable
function local_Variab_1() {
    var x = 20;
    document.write(200 + x)
}
function local_variable_2() {
    document.write(x + 80)
}
local_Variab_1();
local_variable_2();






