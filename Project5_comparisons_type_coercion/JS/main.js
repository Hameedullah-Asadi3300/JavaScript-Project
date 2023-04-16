

//TypeOf
document.write(typeof "Country");

//TypeCoercian
document.write("20" + 23);


//To check this is a number or string. output will be true.
function my_Number() {
    document.getElementById("test").innerHTML = isNaN("Is this s string?");
    
}



//To check whether this is a number or not. output will be false.
function my_String() {
    document.getElementById("done").innerHTML = isNaN("007");
}


//DISPLAYING +INIFINITY
document.write(2E310);

//DISPLAYING -INFINITY
document.write(-2E310);

//BOOLEAN - GREATER THAN
document.write(10 > 6);



//CONSOLE.LOG CHALLENGE 
console.log(20 + 20);


//BOOLEAND "false" CHALLENGE
console.log(20 > 21);


//BOOLEAND "true" CHALLENGE
console.log(25 > 24);

//DOUBLE ==EQUAL SIGN TO COMPARE TWO NUMBERS WHICH IN THIS EXAMPLE IT IS TRUE
document.write(10 == 10);

//DOUBLE EQUAL SIGN TO COMPARE TWO NUMBERS WHICH IN THIS EXAMPLE IT IS FALSE
document.write(3 == 3);



//TRIPLE === SIGN TO COMPARE NUMBERS WHICH RETURNS TRUE
x = 10;
y = 10;
document.write(x === y);

//TRIPLE === SIGN TO COMPARE NUMBERS WHICH RETURNS FALSE BECAUSE THEY ARE THE SAME DATA TYPE
x = 23;
y = "25";
document.write(x === y);


//TRIPLE === TO COMPARE TWO STRINGS WHICH RETURNS TRUE
A = "Nabil";
B = "Nabil";
document.write(A === B);


//&& LOGICAL "Boolean" OPERATOR RTURNS TRUE
document.write(10 > 5 && 10 > 5);


//&& LOGICAL "Boolean" OPERATOR RETURN FALSE
document.write(10 > 11 && 10 & 10);

// || LOGICAL "Boolean" OPERATOR WHICH RETURNS TRUE
document.write(20 > 21 || 10 > 5);

// || LOGICAL "Boolean" OPERATOR WHICH RETURNS FALSE
document.write<(10 > 11 || 10 > 12);


//! "Not" LOGICAL BOOLEAN 
function not_Function() {
    document.getElementById("Not").innerHTML =!(20 > 10);
}

