

//Concatenation
function my_Full_Sentence() {
    var part_1 = "I want to become a ";
    var part_2 = "skillful front-end Developer, ";
    var part_3 = "in next six months.";
    var whole_sentence = part_1 + part_2 + part_3;
    document.getElementById("concat").innerHTML = whole_sentence;
}


//Slice Method
function slice_Method() {
    var sentence = "All works and no play makes Johny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section; 
}

//ToUpperCase Method as Function
    function capitalLetter() {
        var sentence_1 = "Hello world";
        var sentence_2 = sentence_1.toUpperCase();
        document.getElementById("upper").innerHTML = sentence_2;
    }
    

//ToUpperCase Method as variable
    var text = "Hello friend";
    var result = text.toUpperCase();
    document.getElementById("capital").innerHTML = result;


//Search Method
function searchMethod() {
    let text = "Mr. Blue has a blue house"
    let position = text.search("Blue");
    document.getElementById("demo").innerHTML = position;
    }


    //Numbers to String Method
function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_String").innerHTML = x.toString();
}
    

//toPrecision () Method
function precision_Method() {
    var x = 12938.3012987376113;
    document.getElementById("precision").innerHTML = x.toPrecision(10);
}


//toFixed Mthod
var x = 4.97543;
var n = x.toFixed();
document.getElementById("demo").innerHTML = n;


//2nd tofixed Method
var y = 9.98543363;
var m = y.toFixed();
document.getElementById("demo_1").innerHTML = m;

